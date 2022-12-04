import { v4 as uuidv4 } from "uuid";

export default function addToLog(ctx, logType) {
  const log = {
    id: uuidv4(),
    operacao: logType,
    datahora: parseFloat(Date.now()),
  };
  ctx.db.logs.push(log);

  const logsSortedByMostRecent = ctx.db.logs.sort((a, b) => {
    return b.datahora - a.datahora;
  });
  ctx.pubSub.publish("logs", { logs: logsSortedByMostRecent });
}
