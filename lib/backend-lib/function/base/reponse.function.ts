import { constants } from 'http2';
import {BaseResponseModel, ErrorResponseHttp, PaginationResponseHttp, ResponseHttp, StatusCodeTypes} from '../../base';

export async function baseResponse<T>(
  res: BaseResponseModel<T>,
  statusCode: StatusCodeTypes,
  data: T,
  message?: string
) {
   return res.status(constants[statusCode] as number).json({
     data,
     message,
     statusCode: constants[statusCode] as number
   });
}

export function basePaginatedResponse<T>(
  res: BaseResponseModel<PaginationResponseHttp<T>>,
  statusCode: StatusCodeTypes,
  paginatedData: PaginationResponseHttp<T>,
  message?: string
){
  return baseResponse(res, statusCode, paginatedData, message);
}

export function baseErrorResponse<T>(
  res: BaseResponseModel<T>,
  statusCode: StatusCodeTypes,
  error?: ErrorResponseHttp,
  message = ''
) {
  return res.status(constants[statusCode] as number).send({
    data: null,
    statusCode: constants[statusCode] as number,
    error,
    message: message
  });
}
