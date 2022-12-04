const Subscription = {
  mensagem: {
    subscribe(parent, args, ctx, info) {
      return ctx.pubSub.subscribe("mensagem");
    },
  },
  cinema: {
    subscribe(parent, args, ctx, info) {
      return ctx.pubSub.subscribe("cinema");
    },
  },
  esportes: {
    subscribe(parent, args, ctx, info) {
      return ctx.pubSub.subscribe("esportes");
    },
  },
  geral: {
    subscribe(parent, args, ctx, info) {
      return ctx.pubSub.subscribe("geral");
    },
  },
};

export default Subscription;
