const winston = require("winston");
const drf = require("winston-daily-rotate-file");

export const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      name: "console",
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    }),
    // eslint-disable-next-line new-cap
    new drf({
      name: "drf",
      filename: "tmc-%DATE%.log",
      dirname: "logs",
      datePattern: "YYYY-MM-DD",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "14d",
      level: "info",
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.align(),
        winston.format.printf(
          info => `${info.timestamp} ${info.level}: ${info.message}`
        )
      )
    })
  ]
});