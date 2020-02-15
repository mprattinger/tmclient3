import { HomeRoutes } from "./home";

export function AppRoutes(expressApp) {
    expressApp.use("/ping", (req, res) => {
      res.write("pong");
      res.status(200);
      res.end();
    });

    expressApp.use("/", HomeRoutes());
  }