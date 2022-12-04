import addToLog from "../logging";
const logType = "Query";
const Query = {
  usuario(parent, args, ctx, info) {
    addToLog(ctx, logType);
    return ctx.db.usuario;
  },

  mensagem(parent, args, ctx, info) {
    addToLog(ctx, logType);
    return ctx.db.mensagem;
  },

  logs(parent, { login, senha }, ctx, info) {
    if (login === "admin" && senha === "admin") {
      addToLog(ctx, logType);
      return ctx.db.logs.sort((a, b) => {
        return b.datahora - a.datahora;
      });
    }
    throw new Error("User doesn't have authorization for this");
  },

  historico(parent, args, ctx, info) {
    const msgs = [...ctx.db.mensagem];
    msgs.sort((a, b) => {
      return b.datahora - a.datahora;
    });
    addToLog(ctx, logType);
    return msgs;
  },
  totaisPorCategoria(parent, args, ctx, info) {
    return ctx.db.categoria;
  },
};

export default Query;
