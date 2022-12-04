let usuario = [
  {
    id: 1,
    login: "admin",
    senha: "admin",
  },
  {
    id: 2,
    login: "rodrigo",
    senha: "qwe123",
  },
];
let mensagem = [
  {
    id: 1,
    texto: "criando uma api com graphql e mq",
    categoria: "geral",
    datahora: 1670175726013,
  },
  {
    id: 2,
    texto: "mensagem do passado",
    categoria: "esportes",
    datahora: 1670170440000,
  },
];
let logs = [
  {
    id: 1,
    operacao: "mutation",
    datahora: 1670170441000,
  },
  {
    id: 2,
    operacao: "mutation",
    datahora: 1670175726013,
  },
];

let categoria = {
  cinema: 0,
  esportes: 0,
  geral: 0,
};

export default {
  usuario,
  mensagem,
  logs,
  categoria
};
