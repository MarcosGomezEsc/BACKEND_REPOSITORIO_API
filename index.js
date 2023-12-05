import cors from "cors";
import express from "express";
import { router as Autos_Router } from "./src/autos/Autos_Router.js";

// res.header("Access-Control-Allow-Origin", "*");

// import { router as usersRt } from "./src/users/usersRt.js";
const app = express();
app.use(cors("*"));
app.disable("x-powered-by");

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  console.log(
    err
      ? `Ocurrió un error: ${err}`
      : `Servidor corre en http://localhost:${PORT}`
  );
});

app.use(Autos_Router);
