import { logger } from "../logger";
import { WebServer } from "./WebServer";

export default function InitializeApp() {
  const port = process.env.PORT || 8888;
  logger.info(`Starting http server on port ${port}...`);

  const webServer = new WebServer();
  webServer.express.listen(port, () => {
    logger.info(`Server is listening on ${port}`);
  });

  return {
    webServer: webServer
  };
}
