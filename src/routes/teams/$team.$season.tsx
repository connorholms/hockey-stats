import { createFileRoute } from '@tanstack/react-router'
import Roster from '../../features/roster/Roster'

export const Route = createFileRoute('/teams/$team/$season')({
  loader: ({ params: { team, season } }) => {
    return {team, season}
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <Roster rosterParams={Route.useLoaderData()}/>
}

