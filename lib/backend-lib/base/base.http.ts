import {PaginationResponseHttp, ResponseHttp} from './response.http';
import {NextRequest, NextResponse} from "next/server";

// Response: Reference of response object related to request
export class BaseRequestModel extends NextRequest {
}

export class BaseResponseModel<ResData> extends NextResponse<ResponseHttp<ResData>> {}

export type BasePaginatedResponseModel<ResData> = NextResponse<
    PaginationResponseHttp<ResData>
>;
