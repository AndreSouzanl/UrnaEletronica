import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('login')
  async login(){
     return{
      token: 'abc'
     }
  }

  @Post('registrar')
  async registrar(){
    return{
      mensagem:'Usuario registrado com sucesso'
    };
  } 
}
