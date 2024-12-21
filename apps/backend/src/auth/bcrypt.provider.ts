import { Injectable } from '@nestjs/common';
import { ProvedorSenhaCriptografada } from '@urna/auth';
import * as bcrypt from 'bcrypt';

@Injectable()
export default class BcryptProvider implements ProvedorSenhaCriptografada {
  criptografar(senha: string): Promise<string> {
    const salt = bcrypt.genSaltSync(12);
    return bcrypt.hash(senha, salt);
  }
  comparar(senha: string, senhaCriptografada: string): Promise<boolean> {
    return bcrypt.compare(senha, senhaCriptografada);
  }
}
