import express from "express";
import {
  getBestRatedMovies,
  getBestRatedMoviesByYear,
  getMovies,
} from "./database/queries.js";

const app = express();
const port = 3000;

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", async (req, res) => {
  getMovies()
    .then((dbres) => res.json(dbres))
    .catch((error) => {
      res.json({ "error:": error }); //Change for proper handler
    });
});

app.get("/best-rated", (req, res) => {
  getBestRatedMovies()
    .then((dbres) => res.json(dbres))
    .catch((error) => {
      res.json({ "error:": error }); //Change for proper handler
    });
});

app.get("/best-rated/:year", (req, res) => {
  getBestRatedMoviesByYear(req.params.year)
    .then((dbres) => res.json(dbres))
    .catch((error) => {
      res.json({ "error:": error }); //Change for proper handler
    });
});

app.listen(port, () => console.log(`Listenning on port${port}`));
