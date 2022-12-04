const Query = {
    usuario(parent, args, ctx, info){
        return ctx.db.usuario
      },
    mensagem(parent, args, ctx, info){
        return ctx.db.mensagem
      },
    logs(parent, args, ctx, info){
        return ctx.db.logs
      },
}

export default Query