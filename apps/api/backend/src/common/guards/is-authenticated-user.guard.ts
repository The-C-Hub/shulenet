import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import { extractTokenFromHeader } from '@common/token/extract-token';
import { decodeToken } from '@common/token/decode-token';

export class IsAuthenticatedUserGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = extractTokenFromHeader(request.headers);
    if (!token) {
      throw new UnauthorizedException(
        'A valid Bearer token is required to access this resource',
      );
    }
    try {
      const decodedToken = decodeToken(token);
      const userId = decodedToken.sub;
      // Write Code to check if the user exists in the database
      if (userId) {
        request['userId'] = decodedToken.sub;
        request['email'] = decodedToken.email;
        return true;
      }
    } catch (error) {
      throw new ForbiddenException();
    }
    return false;
  }
}
