import Fastify from "fastify";

const PORT = process.env.port || 3000;

const server = Fastify({
  logger: true,
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
    const response = await fetch("https://api.nhle.com/stats/rest/en/team");
    const json = await response.json();
    reply.code(200).send(json);
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
    console.log("team, season", team, season);
    try {
      const response = await fetch(
        `https://api-web.nhle.com/v1/roster/${team}/${season}`,
      );
      const json = await response.json();
      console.log(json);
      reply.code(200).send(json);
    } catch (err) {
      reply
        .status(500)
        .send({ error: "Internal Server Error", message: err.message });
    }
  },
);

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
