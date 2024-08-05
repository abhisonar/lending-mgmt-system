import {baseResponse} from "@backend-lib/function";
import {BaseRequestModel, BaseResponseModel} from "@backend-lib/base";

export async function GET(req: BaseRequestModel, res: BaseResponseModel<any>) {
    return baseResponse<null>('HTTP_STATUS_OK', null, "Healthy Upstream")
}