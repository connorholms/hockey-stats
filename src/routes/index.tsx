import { createFileRoute } from "@tanstack/react-router";
import StandingsSidebar from "../features/standings-sidebar/Standings-sidebar";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <div className="container">
        <h1>NHL Stats Site</h1>
        <StandingsSidebar />
      </div>
    </>
  );
}
