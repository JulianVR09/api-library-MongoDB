import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse();

    return next.handle().pipe(
      map((data) => ({
        code: response.statusCode,
        message: this.getMessageForStatusCode(response.statusCode),
        data,
      })),
    );
  }

  private getMessageForStatusCode(statusCode: number): string {
    switch (statusCode) {
      case 200:
        return 'Success: The request was successful, and the server returned the requested data.';
      case 201:
        return 'Created: The request was successful, and a new resource has been created.';
      case 204:
        return 'No Content: The request was successful, but there is no content to send in the response.';
      case 206:
        return 'Partial Content: The server is delivering only part of the resource due to a range header sent by the client.';
      case 400:
        return 'Bad Request: The server could not understand the request due to invalid syntax.';
      case 401:
        return 'Unauthorized: The request requires user authentication. Please log in and try again.';
      case 403:
        return 'Forbidden: You do not have permission to access the requested resource.';
      case 404:
        return 'Not Found: The server could not find the requested resource.';
      case 500:
        return 'Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.';
      default:
        return 'Unknown Error: The server returned an unrecognized status code.';
    }
  }
}
