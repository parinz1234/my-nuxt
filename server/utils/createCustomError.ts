import { H3Error } from 'h3';

export const createCustomError = <DataT = unknown>({
    status,
    statusText,
    errorCode,
    message,
    ...rest
}: Partial<H3Error<DataT>> & {
    status?: number;
    statusText?: string;
    errorCode?: string;
}): H3Error<DataT> => {
    const error = createError({
        status, // Pass `status`
        statusText, // Pass `statusText`
        message, // Pass `message`
        ...rest, // Spread other properties
    }) as H3Error<DataT>;

    error.errorCode = errorCode ?? 'UNKNOWN_ERROR'; // Add custom `errorCode`
    return error;
}