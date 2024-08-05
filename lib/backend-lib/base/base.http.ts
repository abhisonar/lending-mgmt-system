import {PaginationResponseHttp, ResponseHttp} from './response.http';
import {NextResponse} from "next/server";
import {NextApiRequest, NextApiResponse} from "next";

// Response: Reference of response object related to request
export interface BaseRequestModel<
    ReqBody,
    ReqParams = unknown,
    ReqQueryParams = unknown,
    ReqResponse = unknown
> extends NextApiRequest {
    body: ReqBody,
}

export type BaseResponseModel<ResData> = NextApiResponse<ResponseHttp<ResData>>;

export type BasePaginatedResponseModel<ResData> = NextResponse<
    PaginationResponseHttp<ResData>
>;
