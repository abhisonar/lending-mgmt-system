import { constants } from 'http2';
import { ZodIssue } from 'zod';

export interface ResponseHttp<T = Record<string, never>> {
  data: T;
  statusCode: number;
  message?: string;
  error?: ErrorResponseHttp;
}

export interface PaginationResponseHttp<T> extends PaginationHttp {
  items: Array<T>;
}

export interface PaginationHttp {
  totalCount?: number;
  currentItemsCount?: number;
  pageIndex?: number;
  lastPage?: number;
}

export type StatusCodeTypes = keyof typeof constants;

export interface ErrorResponseHttp {
  message?: string;
  issues?: Array<ValidationErrorHttp>;
  validationErrors?: Array<ValidationErrorHttp>;
  name?: string;
}

type ValidationErrorHttp = ZodIssue;

