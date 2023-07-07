import express from 'express'
import dotenv from 'dotenv'
import * as http from 'http'
import * as WebSocket from 'ws'

const app = express()
const server = http.createServer(app)
const wss = new WebSocket.Server({ server });

const appConfig = {
    server: {
        port: 3000
    }
}

function loadServerVariables() {
    appConfig.server.port = Number(process.env.PORT) ?? appConfig.server.port
}

async function loadServerConfig() {
    dotenv.config()
    loadServerVariables()
}

async function startServer() {
    await loadServerConfig()
    server.listen(appConfig.server.port, () => {
        console.log('Server started at port: ', appConfig.server.port)
    })
}

startServer()

wss.on('connection', (ws: WebSocket, req: http.IncomingMessage) => {
    ws.on('message', (message: string) => {
        ws.send(`Hello, you sent -> ${message}`);
    });

    ws.send('Hi there, I am a WebSocket server');
});