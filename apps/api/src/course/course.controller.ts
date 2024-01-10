import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Course')
@Controller({ path: 'course', version: '1'})
export class CourseController {}
