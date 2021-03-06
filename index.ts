import Server from "./classes/server";
import { router } from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = Server.instance;

server.app.use(bodyParser.urlencoded({ extended: true}));
server.app.use(bodyParser.json());

server.app.use(cors({ origin: true, credentials: true}))

server.app.use('/', router);

server.startServer(() => {
    // tslint:disable-next-line: no-console
    console.log(`Server successfully initialized on port: ${server.port}`);
});
