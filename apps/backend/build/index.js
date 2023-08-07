"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./paths");
const express_1 = __importDefault(require("express"));
const http = __importStar(require("http"));
const WebSocket = __importStar(require("ws"));
const WSLobbyHandler_1 = require("handlers/WSLobbyHandler");
const config_1 = require("config");
const chalk_1 = __importDefault(require("chalk"));
const sequelize_1 = require("./modules/sequelize");
const redis_1 = require("./modules/redis");
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const auth_1 = require("./routes/auth");
const socketPathes = {
    lobby: '/lobby',
    game: '/game',
    chat: '/chat'
};
const app = (0, express_1.default)();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
async function startServer() {
    console.log(chalk_1.default.bgBlue('System variables loaded.'));
    await redis_1.redis.connect();
    console.log(chalk_1.default.blue('Successfully connected to Redis.'));
    await sequelize_1.sequelize.authenticate();
    console.log(chalk_1.default.blue('Connected to MySQL Database.'));
    await sequelize_1.sequelize.sync();
    console.log(chalk_1.default.blue("Successfull synced Sequelize with MySQL server."));
    server.listen(config_1.appConfig.server.port, () => {
        console.log(chalk_1.default.blue('Server started at port: ', config_1.appConfig.server.port));
    });
}
startServer();
const corsOptions = {
    origin: ['http://localhost:3001', 'http://localhost:3000', 'http://localhost:5173'],
    credentials: true
};
app.use((0, cors_1.default)(corsOptions));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use('/auth', auth_1.authRouter);
wss.on('connection', async (ws, req) => {
    const { url } = req;
    switch (url) {
        case '/lobby': {
            ws.send('Wellcome to /lobby socket!');
            const subscriber = redis_1.redis.duplicate();
            await subscriber.connect();
            subscriber.SUBSCRIBE('lobby', (message, channel) => {
                ws.send('Recieved new message: ' + message);
            });
            const publisher = redis_1.redis.duplicate();
            await redis_1.redis.connect();
            publisher.PUBLISH('lobby', 'Hello from publisher');
            ws.on('message', async (msg, isBinary) => {
                (0, WSLobbyHandler_1.wsLobbyHandler)({ msg, isBinary }, ws);
            });
            ws.on('close', () => {
                subscriber.disconnect();
                ws.close();
            });
            break;
        }
        case '/chat': {
            ws.send('Wellcome to /chat socket!');
            ws.on('message', (msg) => {
                ws.send('ping! chat');
            });
            break;
        }
        case '/game': {
            ws.send('Wellcome to /game socket!');
            ws.on('message', (msg) => {
                ws.send('ping! game');
            });
            break;
        }
        default: {
            ws.send(JSON.stringify({
                code: "404",
                error: "Unexpected route."
            }));
            ws.close();
            break;
        }
    }
    ws.send('Websocket connected!');
});
