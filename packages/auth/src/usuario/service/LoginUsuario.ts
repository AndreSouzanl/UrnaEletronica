import RepositorioUsuario from "../interface/RepositorioUsuario";
import  Usuario  from "../model/usuario";


export default async function loginUsuario(props: {
  repo: RepositorioUsuario
  email: string 
  senha: string
}): Promise<Usuario | never> {
  
  const { repo, email, senha } = props
  
  const usuario = await repo.buscarPorEmail(email)
  
  if(!usuario){
       throw new Error('Usuário não foi encontrado')
  }

  if(usuario.senha !== senha){
    throw new Error('senha invalida')
  }
  return {...usuario, senha: undefined }
}