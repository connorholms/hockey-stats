import { createFileRoute } from '@tanstack/react-router'
import Player from '../../features/player/components/Player'

export const Route = createFileRoute('/players/$playerId')({
  loader: ({ params: playerId }) => {
    return playerId
  },
  component: Player,
})
