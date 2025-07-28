import Fastify from "fastify";
import cors from "@fastify/cors";
import { Pool } from "pg";
import dotenv from "dotenv";

const PORT = process.env.port || 3000;

dotenv.config({ path: "../../.env" });

const db = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: "localhost",
  database: process.env.POSTGRES_DB,
  port: 5432,
});

const server = Fastify({
  logger: true,
});

server.register(cors, {
  origin: "*",
});

server.get("/api/standings", async function getStandings(request, reply) {
  try {
    const response = await fetch("https://api-web.nhle.com/v1/standings/now");
    const json = await response.json();
    reply.code(200).send(json);
  } catch (err) {
    reply
      .status(500)
      .send({ error: "Internal Server Error", message: err.message });
  }
});

server.get("/api/active-teams", async function getActiveTeams(request, reply) {
  try {
    const response = await db.query(
      `SELECT id, franchise_id as "franchiseId", full_name as "fullName", league_id as "leagueId", raw_tricode as "rawTricode", tricode as "triCode", team_logo as "teamLogo", conference_name as "conference", division_name as "division" FROM teams`,
    );
    reply.code(200).send(response);
  } catch (err) {
    reply
      .status(500)
      .send({ error: "Internal Server Error", message: err.message });
  }
});

server.get(
  "/api/roster/:team/:season",
  async function getRoster(request, reply) {
    const { team, season } = request.params;
    try {
      const response = await fetch(
        `https://api-web.nhle.com/v1/roster/${team}/${season}`,
      );
      const json = await response.json();
      reply.code(200).send(json);
    } catch (err) {
      reply
        .status(500)
        .send({ error: "Internal Server Error", message: err.message });
    }
  },
);

server.get("/api/player/:playerId", async function getPlayer(request, reply) {
  const { playerId } = request.params;
  try {
    const response = await fetch(
      `https://api-web.nhle.com/v1/player/${playerId}/landing`,
    );
    const json = await response.json();
    reply.code(200).send(json);
  } catch (err) {
    reply
      .status(500)
      .send({ error: "Internal Server Error", message: err.message });
  }
});

const start = async () => {
  try {
    await server.listen({ port: PORT });
    console.log(`server listening on port ${PORT}`);
  } catch (err) {
    console.log("Server Error: ", err);
    process.exit(1);
  }
};

start();
