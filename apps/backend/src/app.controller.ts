import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('ola')
  async getHello(): Promise<any> {
    return {
      Message: 'ola Mundo',
    };
  }
}
