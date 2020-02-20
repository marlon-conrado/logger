const winston = require("winston");
const moment = require("moment");

const { createLogger, format, transports } = winston;

const logger = createLogger({
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.simple(),
        format.printf(data => `\n${data.level}: ${data.message}`)
      )
    })
  ]
});

logger.log({
  level: "info",
  message: getFormatedLogs(
    {
      date: getCurrentDate(),
      type: "application",
      message: "Error getting in database",
      exception: new Error("Database").message,
      level: "error",
      classMethodUrlEndpoint: "Index",
      userEmail: "marlonconrado1998@gmail.com"
    },
    "|"
  )
});

logger.log({
  level: "error",
  message: getFormatedLogs(
    {
      date: getCurrentDate(),
      type: "application",
      message: "Error getting in database",
      exception: new Error("Database").message,
      level: "error",
      classMethodUrlEndpoint: "Index",
      userEmail: "marlonconrado1998@gmail.com"
    },
    "|"
  )
});

logger.warn({
  level: "error",
  message: getFormatedLogs(
    {
      date: getCurrentDate(),
      type: "application",
      message: "Error getting in database",
      exception: new Error("Database").message,
      level: "error",
      classMethodUrlEndpoint: "Index",
      userEmail: "marlonconrado1998@gmail.com"
    },
    "|"
  )
});

function getFormatedLogs(logsObject, separator = "-") {
  const obj = logsObject;
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  let strLog = "";

  keys.forEach((key, index) => {
    const value = values[index];
    const valueOrkeyLog = value ? `[${key}] = ${value}` : `[${key}]`;

    const isLastIndex = index !== keys.length - 1;
    const putSeparator = isLastIndex ? separator : "";
    strLog += `${valueOrkeyLog} ${putSeparator} `;
  });

  return strLog;
}

function getCurrentDate() {
  return moment().format("YYYY-MM-DD hh:mm:ss.SSS A");
}
