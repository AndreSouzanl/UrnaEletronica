import { loginUsuario, registrarUsuario, Usuario } from '@urna/auth';
import { Body, Controller, Post } from '@nestjs/common';
import RepositorioUsuarioArray from './usuario-array.repository';
import jwt from 'jsonwebtoken';
import BcryptProvider from './bcrypt.provider';
import { UsuarioPrisma } from './usuario.prisma';

@Controller('auth')
export class AuthController {
  constructor(
    private repo: UsuarioPrisma,
    private cripto:  BcryptProvider,
  ) {}
  @Post('login')
  async login(@Body() usuarioInformado: Partial<Usuario>) {
    {
      const usuario = await loginUsuario({
        repo: this.repo,
        email: usuarioInformado.email,
        senha: usuarioInformado.senha,
      });
      return {
        token: jwt.sign(usuario, 'chave', {
          expiresIn: '15d',
        }),
      };
    }
  }

  @Post('registrar')
  async registrar(@Body() usuario: Partial<Usuario>) {
    await registrarUsuario({
      repo: this.repo,
      cripto: this.cripto,
      usuario,
    });
  }
}
