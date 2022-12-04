import { v4 as uuidv4 } from "uuid";
import addToLog from "../logging";
const logType = "Mutation";

const Mutation = {
  inserirMensagem(parent, args, ctx, info) {
    const texto = args.msg.texto;
    const categoria = args.msg.categoria;
    const categoriasValidas = ["cinema", "esportes", "geral"];
    if (texto.length > 500)
      throw new Error("Mensagem precisa ter até 500 caracteres");

    if (!categoriasValidas.includes(categoria))
      throw new Error("Categoria precisa ser 'cinema' | 'esportes' | 'geral' ");
    const mensagem = {
      id: uuidv4(),
      texto: texto,
      categoria: categoria,
      datahora: parseFloat(Date.now()),
    };
    ctx.db.mensagem.push(mensagem);
    const payload = {};
    payload[categoria] = {
      texto: mensagem.texto,
      datahora: mensagem.datahora,
    };
    ctx.pubSub.publish(categoria, payload);
    addToLog(ctx, logType);
    return mensagem;
  },
};
export default Mutation;
