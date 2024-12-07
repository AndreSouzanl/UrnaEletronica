import usuarios from "../../constants/usuarios";
import  Usuario  from "../model/usuario";


export default function loginUsuario(email: string, senha: string): Usuario | never {
  
  const usuario = usuarios.find((usuario) => usuario.email === email && usuario.senha === senha)
  
  if(!usuario){
       throw new Error('Usuário não foi encontrado')
  }

  if(usuario.senha !== senha){
    throw new Error('senha invalida')
  }
  return {...usuario, senha: undefined }
}