import { Injectable } from '@nestjs/common';
import { Usuario } from '@urna/auth';
import RepositorioUsuario from '@urna/auth/src/usuario/interface/RepositorioUsuario';
@Injectable()
export default class RepositorioUsuarioArray implements RepositorioUsuario {
  private usuarios: Usuario[] = [];

  async buscarPorEmail(email: string): Promise<Usuario> | null {
    return this.usuarios.find((usuario) => usuario.email === email) || null;
  }

  async salvar(usuario: Usuario): Promise<void> {
    this.usuarios.push(usuario);
  }
}
