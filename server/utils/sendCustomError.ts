import { H3Event, H3Error } from 'h3';

export function sendCustomError(event: H3Event, error: H3Error | Error, debug = false) {
    const statusCode = (error as H3Error).statusCode || 500;
    const statusMessage = (error as H3Error).statusMessage || 'Internal Server Error';

    const response = {
        statusCode,
        statusMessage,
        errorCode: (error as H3Error).errorCode || 'UNKNOWN_ERROR',
        message: error.message,
        stack: debug && error.stack ? error.stack : undefined,
    };

    event.node.res.statusCode = statusCode;
    event.node.res.setHeader('Content-Type', 'application/json');
    event.node.res.end(JSON.stringify(response));
}