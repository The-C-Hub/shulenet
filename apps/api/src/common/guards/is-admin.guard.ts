import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { extractTokenFromHeader } from '@common/token/extract-token';
import { decodeToken } from '@common/token/decode-token';
import { UserRepository } from '@user/user.repository';
import { BaseException } from '@common/exceptions/base.exception';

@Injectable()
export class IsAdminGuard implements CanActivate {
  constructor(private readonly _userRepository: UserRepository) {}
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
      const userData = await this._userRepository.findUserById(userId);
      const userEmail = userData.email;
      const userRole = decodedToken.role;
      if (userId && userRole === 'service_role') {
        request['userId'] = decodedToken.sub;
        request['userEmail'] = userEmail;
        return true;
      }
    } catch (error) {
      throw new BaseException(error.message);
    }
    return false;
  }
}
