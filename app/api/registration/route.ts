import {baseErrorResponse, baseResponse} from "@backend-lib/function";
import {BaseRequestModel, BaseResponseModel} from "@backend-lib/base";

import argon from 'argon2';

// prisma client
import {PrismaClient, USER_ROLE} from '@prisma/client';
import {RegistrationRequest} from "@backend-lib/request";

const prisma = new PrismaClient();

export async function POST(req: BaseRequestModel<RegistrationRequest>, res: BaseResponseModel<any>) {
    const {firstName, lastName, email, password, role} = await req.json();
    try {
        const isExist = await prisma.appUserCollection.findUnique({
            where: {
                email,
            },
        });

        if (isExist) {
            return baseErrorResponse('HTTP_STATUS_UNPROCESSABLE_ENTITY', {
                message: 'Email is already exist.',
            });
        }

        const hashedPassword = await argon.hash(password);

        const newUser = await prisma.appUserCollection.create({
            data: {
                isSuperAdmin: role === USER_ROLE.USER_ROLE_ADMIN,
                email,
                password: hashedPassword,
                person: {
                    create: {
                        firstName,
                        lastName,
                    },
                },
                role,
            },
        });

        if (newUser) {
            return baseResponse('HTTP_STATUS_CREATED', newUser);
        }
    } catch (err) {
        return baseErrorResponse('HTTP_STATUS_INTERNAL_SERVER_ERROR', err);
    }
}