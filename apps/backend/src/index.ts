import './paths'
import express from 'express'
import * as http from 'http'
import * as WebSocket from 'ws'
import { wsLobbyHandler } from 'handlers/WSLobbyHandler'
import { appConfig } from 'config'
import chalk from 'chalk'
import { sequelize } from './modules/sequelize'
import { redis } from './modules/redis'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { authRouter } from './routes/auth'
import { lobbyList } from './helpers/lobbyList'

const socketPathes = {
    lobby: '/lobby',
    game: '/game',
    chat: '/chat'
} as const

const app = express()
const server = http.createServer(app)
const wss = new WebSocket.Server({ server });

async function startServer() {
    console.log(chalk.bgBlue('System variables loaded.'))

    await redis.connect()
    console.log(chalk.blue('Successfully connected to Redis.'))
    await redis.set('lobby_list', '[]')

    lobbyList.getList().then(console.log)

    await sequelize.authenticate()
    console.log(chalk.blue('Connected to MySQL Database.'))

    await sequelize.sync()
    console.log(chalk.blue("Successfull synced Sequelize with MySQL server."))

    server.listen(appConfig.server.port, () => {
        console.log(chalk.blue('Server started at port: ', appConfig.server.port))
    })
}

startServer()

const corsOptions = {
    origin: ['http://localhost:3001', 'http://localhost:3000', 'http://localhost:5173'],
    credentials: true
}

app.use(cors(corsOptions));

app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/auth', authRouter)

wss.on('connection', async (ws: WebSocket, req: http.IncomingMessage) => {

    const { url } = req

    switch (url as typeof socketPathes[keyof typeof socketPathes]) {

        case '/lobby': {
            ws.send('Wellcome to /lobby socket!')

            ws.on('message', async (msg, isBinary) => {
                wsLobbyHandler({ msg, isBinary }, ws)
            })

            ws.on('close', () => {
                ws.close()
            })
            break;
        }
        case '/chat': {
            ws.send('Wellcome to /chat socket!')
            ws.on('message', (msg) => {
                ws.send('ping! chat')
            })
            break;
        }
        case '/game': {
            ws.send('Wellcome to /game socket!')
            ws.on('message', (msg) => {
                ws.send('ping! game')
            })
            break;
        }

        default: {
            ws.send(JSON.stringify({
                code: "404",
                error: "Unexpected route."
            }))
            ws.close()
            break;
        }
    }

    ws.send('Websocket connected!');
});
