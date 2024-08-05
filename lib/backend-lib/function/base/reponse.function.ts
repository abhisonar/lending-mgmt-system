import {constants} from 'http2';
import {BaseResponseModel, ErrorResponseHttp, PaginationResponseHttp, ResponseHttp, StatusCodeTypes} from '../../base';

export async function baseResponse<T>(
    statusCode: StatusCodeTypes,
    data: T,
    message?: string
) {
    return BaseResponseModel.json<ResponseHttp<T>>({
        data,
        message,
        statusCode: constants[statusCode] as number
    }, {status: constants[statusCode] as number})
}

export function basePaginatedResponse<T>(
    res: BaseResponseModel<PaginationResponseHttp<T>>,
    statusCode: StatusCodeTypes,
    paginatedData: PaginationResponseHttp<T>,
    message?: string
) {
    return baseResponse(statusCode, paginatedData, message);
}

export function baseErrorResponse<T>(
    statusCode: StatusCodeTypes,
    error?: ErrorResponseHttp,
    message = ''
) {
    return BaseResponseModel.json<ResponseHttp<T>>({
        data: null,
        statusCode: constants[statusCode] as number,
        error,
        message: message
    }, {status: constants[statusCode] as number});
}
