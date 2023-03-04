import { createLogger, transports } from 'winston';

const logger = createLogger({
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'error.log', level: 'error' }),
        new transports.File({ filename: 'combined.log' }),
    ],
});

export default logger;
