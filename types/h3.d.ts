import { H3Error } from 'h3';

declare module 'h3' {
    interface H3Error {
        errorCode?: string;
    }
}