import {baseErrorResponse, baseResponse, generateJwtToken, getValueFromToken} from "@backend-lib/function";
import {BaseRequestModel, BaseResponseModel} from "@backend-lib/base";
import {LoginRequest} from "@backend-lib/request";

// prisma client
import {PrismaClient} from '@prisma/client';
import {TOKEN_SECRET} from "@backend-lib/constant";

import argon from 'argon2';

const prisma = new PrismaClient();

export async function POST(req: BaseRequestModel<LoginRequest>, res: BaseResponseModel<{ token: string }>) {
    try {
        const {email, password} = await req.json();

        const secretKey = getValueFromToken(TOKEN_SECRET);

        if (!secretKey) {
            baseErrorResponse('HTTP_STATUS_INTERNAL_SERVER_ERROR', {message: 'No secret key provided'});
        }

        const appUser = await prisma.appUserCollection.findUnique({where: {email}});

        if (!appUser) {
            return baseErrorResponse('HTTP_STATUS_NOT_FOUND', {message: `No any account found associated with ${email}`});
        }

        const isVerified = await argon.verify(appUser.password, password);

        if (!isVerified) {
            return baseErrorResponse('HTTP_STATUS_UNAUTHORIZED', {message: `Invalid credentials. Please double-check your username and password and try again. `});
        }

        const token = generateJwtToken({appUserId: appUser.id, appUserRole: appUser.role}, secretKey);

        return baseResponse('HTTP_STATUS_OK', {token});
    } catch (err) {
        return baseErrorResponse("HTTP_STATUS_INTERNAL_SERVER_ERROR", err)
    }
}