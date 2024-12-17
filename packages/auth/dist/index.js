var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  loginUsuario: () => loginUsuario,
  usuarios: () => usuarios_default
});
module.exports = __toCommonJS(src_exports);

// src/constants/usuarios.ts
var usuarios = [
  {
    id: 1,
    nome: "Jo\xE3o Pereira",
    email: "joao.pereira@example.com",
    senha: "senha123"
  },
  {
    id: 2,
    nome: "Mariana Silva",
    email: "mariana.silva@example.com",
    senha: "mariana456"
  },
  {
    id: 3,
    nome: "Carlos Eduardo",
    email: "carlos.eduardo@example.com",
    senha: "carlosSenha789"
  },
  {
    id: 4,
    nome: "Fernanda Almeida",
    email: "fernanda.almeida@example.com",
    senha: "fernandaSenha2024"
  },
  {
    id: 5,
    nome: "Rafael Oliveira",
    email: "rafael.oliveira@example.com",
    senha: "rafaelSenha567"
  },
  {
    id: 6,
    nome: "Andre Souza",
    email: "devsouza2022@gmail.com",
    senha: "80584195als2@"
  }
];
var usuarios_default = usuarios;

// src/usuario/service/LoginUsuario.ts
async function loginUsuario(props) {
  const { repo, email, senha } = props;
  const usuario = await repo.buscarPorEmail(email);
  if (!usuario) {
    throw new Error("Usu\xE1rio n\xE3o foi encontrado");
  }
  if (usuario.senha !== senha) {
    throw new Error("senha invalida");
  }
  return { ...usuario, senha: void 0 };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  loginUsuario,
  usuarios
});
