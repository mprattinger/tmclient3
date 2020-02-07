import express from "express";
import winston from "winston";
import expressWinston from "express-winston";
import bodyParser from "body-parser";
import { AppRoutes } from "./Routes";
import path from "path";

export class WebServer {
  constructor() {
    this.express = express();
    this.router = express.Router();
    this.setupExpressLogging();
    this.setupExpress();
    AppRoutes(this.express);
  }

  setupExpress() {
    this.express.use(
      bodyParser.urlencoded({
        extended: true
      })
    );

    this.express.use(bodyParser.json());

    this.express.set("view engine", "ejs");
    this.express.set("views", path.join(__dirname, "/Views"));

    this.express.use(express.static(path.join(__dirname, "/wwwroot")));
  }

  setupExpressLogging() {
    if (process.env.NODE_ENV !== "development") return;
    this.express.use(
      expressWinston.logger({
        transports: [new winston.transports.Console()],
        format: winston.format.combine(
          winston.format.colorize(),
          winston.format.simple()
        ),
        meta: false, // optional: control whether you want to log the meta data about the request (default to true)
        msg:
          "{{res.statusCode}} HTTP {{req.method}} {{req.url}} {{res.responseTime}}ms", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
        expressFormat: false, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
        colorize: true // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
      })
    );
  }
}
