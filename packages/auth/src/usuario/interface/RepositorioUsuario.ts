import Usuario from "../model/usuario";

export default interface RepositorioUsuario {
  buscarPorEmail(email: string) : Promise<Usuario> | null
  salvar(usuario: Usuario): Promise<void>
 
}

