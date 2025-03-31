import { db } from "../database/connection.js";

export async function getMovies(page = 1) {
  const [rows] = await db.query(
    "select * from movies order by rating limit 15"
  );
  return rows;
}

export async function getBestRatedMovies() {
  const [rows] = await db.query(
    "select * from movies order by rating desc limit 20"
  );
  return rows;
}

export async function getBestRatedMoviesByYear(year = 2024) {
  const [rows] = await db.query(
    "select * from movies where release_year=?  order by rating desc limit 10",
    [year]
  );
  return rows;
}

export async function getMostExpensiveMoviesByYear(year = 2024) {
  const [rows] = await db.query(
    "select title, budget, cast from movies where release_year=? order by budget desc limit 10",
    [year]
  );
  return rows;
}

export async function getMoviesWithMostRevenueByYear(year = 2024) {
  const [rows] = await db.query(
    "select title, budget, cast from movies where release_year=? order by revenue desc limit 10",
    [year]
  );
  return rows;
}
