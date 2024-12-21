import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { DbModule } from 'src/db/db.module';
import RepositorioUsuarioArray from './usuario-array.repository';
import BcryptProvider from './bcrypt.provider';
import { UsuarioPrisma } from './usuario.prisma';

@Module({
  imports: [DbModule],
  providers: [RepositorioUsuarioArray, BcryptProvider, UsuarioPrisma],
  controllers: [AuthController]
})
export class AuthModule {}
