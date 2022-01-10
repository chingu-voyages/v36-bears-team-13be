// Import the express in typescript file
import express from "express";
// postgress pool
import pool from "./database/config";
//Environment variables
import * as dotenv from "dotenv";
dotenv.config();

// Initialize the express engine
const app: express.Application = express();

// Take a port 3000 for running server.
const port: string | number = process.env.PORT || 3000;

const adsRouter: express.Router = require("./routes/ads.ts");

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Routers

app.use("/ads", adsRouter);

// Handling '/' Request
app.get("/", (req, res): void => {
  res.json({
    message: "Successfully accessed the endpoint",
    success: true,
    payload: {},
  });
});
// get ads from our postgress db
app.get("/adverts", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM advert");
    const results = { results: result ? result.rows : null };
    res.send(results);
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
});

// Server setup
app.listen(port, (): void => {
  console.log(`TypeScript with Express http://localhost:${port}/`);
});
