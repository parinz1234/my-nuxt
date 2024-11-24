
export default defineEventHandler((event) => {
  try {
    throw createCustomError({
      status: 404,
      statusText: 'Not Found',
      errorCode: 'RESOURCE_NOT_FOUND',
      message: 'The requested resource could not be found.',
    });
  } catch (error: any) {
    return sendCustomError(event, error);
  }
})