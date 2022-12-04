const Query = {
  usuario(parent, args, ctx, info) {
    return ctx.db.usuario;
  },
  mensagem(parent, args, ctx, info) {
    return ctx.db.mensagem;
  },
  logs(parent, args, ctx, info) {
    return ctx.db.logs;
  },
  historico(parent, args, ctx, info) {
    const msgs = [...ctx.db.mensagem];
    msgs.sort((a, b) => {
      return b.datahora - a.datahora;
    });

    return msgs;
  },
};

export default Query;
