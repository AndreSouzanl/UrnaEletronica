import ProvedorSenhaCriptografada from "../interface/ProvedorSenhaCriptografada";
import RepositorioUsuario from "../interface/RepositorioUsuario";
import Usuario from "../model/usuario";

export default async function registrarUsuario(props: {
  repo: RepositorioUsuario
  cripto: ProvedorSenhaCriptografada
  usuario: Partial<Usuario>
  
}): Promise<void> {
  const { repo, usuario, cripto } = props;
  
  
  const usuarioExistente = await repo.buscarPorEmail(usuario.email!);
  if (usuarioExistente)throw new Error("Usuário ja existente");
  
  
  const senhaCriptografada = await cripto.criptografar(usuario.senha!);
  console.log('senhaCriptografada:',senhaCriptografada)
  

  await repo.salvar({ ...usuario, senha: senhaCriptografada } as Usuario);
  
}
