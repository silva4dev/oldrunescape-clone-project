import express, { NextFunction, Request, Response } from "express";
import hiscores from "osrs-json-hiscores";

const app = express();
const port = process.env.PORT || 3333;

app.use((_, response: Response, next: NextFunction) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/stats/:player", (request: Request, response: Response) => {
  hiscores
    .getStatsByGamemode(request.params.player)
    .then((data) => {
      response.status(200).json(data)
    })
    .catch((err) => {
      response.status(404).json({ status: 404, error: err });
    });
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
