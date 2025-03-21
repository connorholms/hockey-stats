import { createFileRoute } from '@tanstack/react-router'
import Players from '../../features/players/Players'

export const Route = createFileRoute('/players/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Players />
}
