import { Controller, Get, Redirect } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

@Controller()
export class AppController {
  @ApiExcludeEndpoint()
  @Get('/')
  @Redirect('/api')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  redirectToApiEndpoint() {}
}
