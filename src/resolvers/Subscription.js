import addToLog from "../logging";
const logType = "Subscription";

const Subscription = {
  cinema: {
    subscribe(parent, args, ctx, info) {
      ctx.db.categoria.cinema+=1
      addToLog(ctx, logType);
      return ctx.pubSub.subscribe("cinema");
    },
  },
  esportes: {
    subscribe(parent, args, ctx, info) {
      ctx.db.categoria.esportes+=1
      addToLog(ctx, logType);
      return ctx.pubSub.subscribe("esportes");
    },
  },
  geral: {
    subscribe(parent, args, ctx, info) {
      ctx.db.categoria.geral+=1
      addToLog(ctx, logType);
      return ctx.pubSub.subscribe("geral");
    },
  },
  logs: {
    subscribe(parent, { login, senha }, ctx, info) {
      if (login === "admin" && senha === "admin") {
        addToLog(ctx, logType);
        return ctx.pubSub.subscribe("logs");
      }
      throw new Error("User doesn't have authorization for this");
    },
  },
};

export default Subscription;
