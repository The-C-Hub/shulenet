import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { extractTokenFromHeader } from '@common/token/extract-token';
import { decodeToken } from '@common/token/decode-token';
import { UserRepository } from '@user/user.respository';
import { BaseException } from '@common/exceptions/base.exception';
import { CourseRepository } from '@course/course.repository';

@Injectable()
export class IsCourseOwnerGuard implements CanActivate {
  constructor(
    private readonly _userRepository: UserRepository,
    private readonly _courseRepository: CourseRepository,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = extractTokenFromHeader(request.headers);
    const courseId = request.params.courseId;
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
      const courseOwner = userData.is_course_instructor;
      const courseData = await this._courseRepository.getCourseById(courseId);
      const courseCreator = courseData.creator.id;
      console.log(courseData.creator.id);
      if (
        userId &&
        (userRole === 'service_role' || courseOwner === true) &&
        userId === courseCreator
      ) {
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
