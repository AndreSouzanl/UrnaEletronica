export default interface ProvedorSenhaCriptografada {
  criptografar(senha: string): Promise<string>;
  compar(senha: string, senhaCriptografada: string): Promise<boolean>;
}
