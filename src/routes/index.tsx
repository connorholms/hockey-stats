import { createFileRoute } from "@tanstack/react-router";
import Standings from "../features/standings/Standings";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <div className="container">
        <h1>NHL Stats Site</h1>
        <Standings />
      </div>
    </>
  );
}
