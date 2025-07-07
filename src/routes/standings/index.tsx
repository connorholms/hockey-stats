import { createFileRoute } from "@tanstack/react-router";
import Standings from "../../features/standings/Standings";

export const Route = createFileRoute("/standings/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Standings />;
}
