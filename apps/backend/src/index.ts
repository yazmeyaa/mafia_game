import express from 'express'
import dotenv from 'dotenv'
import * as http from 'http'
import * as WebSocket from 'ws'
import { wsLobbyHandler } from 'handlers/WSLobbyHandler'
import { createClient } from 'redis'
import { appConfig, loadServerVariables } from 'config'
import { Sequelize } from 'sequelize'
import chalk from 'chalk'

const socketPathes = {
    lobby: '/lobby',
    game: '/game',
    chat: '/chat'
} as const

const app = express()
const server = http.createServer(app)
const wss = new WebSocket.Server({ server });

async function loadServerConfig() {
    dotenv.config()
    loadServerVariables()
}

async function startServer() {
    await loadServerConfig()
    console.log(chalk.bgBlue('System variables loaded.'))

    await redis.connect()
    console.log(chalk.blue('Successfully connected to Redis.'))

    await sequelize.authenticate()
    console.log(chalk.blue('Connected to MySQL Database.'))

    server.listen(appConfig.server.port, () => {
        console.log(chalk.blue('Server started at port: ', appConfig.server.port))
    })
}

startServer()

const redis = createClient({
    socket: {
        host: appConfig.redis.host,
        port: Number.parseInt(appConfig.redis.port),
    },
    database: Number.parseInt(appConfig.redis.database)
})
const sequelize = new Sequelize({
    dialect: 'mysql',
    host: appConfig.mysql.url,
    port: Number.parseInt(appConfig.mysql.port),
    username: appConfig.mysql.user,
    password: appConfig.mysql.password,

    logging: console.log
})

wss.on('connection', async (ws: WebSocket, req: http.IncomingMessage) => {

    const { url } = req

    switch (url as typeof socketPathes[keyof typeof socketPathes]) {

        case '/lobby': {
            ws.send('Wellcome to /lobby socket!')

            const subscriber = redis.duplicate()
            await subscriber.connect()
            subscriber.SUBSCRIBE('lobby', (message, channel) => {
                ws.send('Recieved new message: ' + message)
            })


            const publisher = redis.duplicate()
            await redis.connect()
            publisher.PUBLISH('lobby', 'Hello from publisher')


            ws.on('message', async (msg, isBinary) => {
                wsLobbyHandler({ msg, isBinary }, ws)
            })

            ws.on('close', () => {
                subscriber.disconnect()
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
