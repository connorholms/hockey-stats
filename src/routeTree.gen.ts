/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as TeamsIndexImport } from './routes/teams/index'
import { Route as StandingsIndexImport } from './routes/standings/index'
import { Route as PlayersIndexImport } from './routes/players/index'
import { Route as PlayersPlayerIdImport } from './routes/players/$playerId'
import { Route as TeamsTeamSeasonImport } from './routes/teams/$team.$season'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const TeamsIndexRoute = TeamsIndexImport.update({
  id: '/teams/',
  path: '/teams/',
  getParentRoute: () => rootRoute,
} as any)

const StandingsIndexRoute = StandingsIndexImport.update({
  id: '/standings/',
  path: '/standings/',
  getParentRoute: () => rootRoute,
} as any)

const PlayersIndexRoute = PlayersIndexImport.update({
  id: '/players/',
  path: '/players/',
  getParentRoute: () => rootRoute,
} as any)

const PlayersPlayerIdRoute = PlayersPlayerIdImport.update({
  id: '/players/$playerId',
  path: '/players/$playerId',
  getParentRoute: () => rootRoute,
} as any)

const TeamsTeamSeasonRoute = TeamsTeamSeasonImport.update({
  id: '/teams/$team/$season',
  path: '/teams/$team/$season',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/players/$playerId': {
      id: '/players/$playerId'
      path: '/players/$playerId'
      fullPath: '/players/$playerId'
      preLoaderRoute: typeof PlayersPlayerIdImport
      parentRoute: typeof rootRoute
    }
    '/players/': {
      id: '/players/'
      path: '/players'
      fullPath: '/players'
      preLoaderRoute: typeof PlayersIndexImport
      parentRoute: typeof rootRoute
    }
    '/standings/': {
      id: '/standings/'
      path: '/standings'
      fullPath: '/standings'
      preLoaderRoute: typeof StandingsIndexImport
      parentRoute: typeof rootRoute
    }
    '/teams/': {
      id: '/teams/'
      path: '/teams'
      fullPath: '/teams'
      preLoaderRoute: typeof TeamsIndexImport
      parentRoute: typeof rootRoute
    }
    '/teams/$team/$season': {
      id: '/teams/$team/$season'
      path: '/teams/$team/$season'
      fullPath: '/teams/$team/$season'
      preLoaderRoute: typeof TeamsTeamSeasonImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/players/$playerId': typeof PlayersPlayerIdRoute
  '/players': typeof PlayersIndexRoute
  '/standings': typeof StandingsIndexRoute
  '/teams': typeof TeamsIndexRoute
  '/teams/$team/$season': typeof TeamsTeamSeasonRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/players/$playerId': typeof PlayersPlayerIdRoute
  '/players': typeof PlayersIndexRoute
  '/standings': typeof StandingsIndexRoute
  '/teams': typeof TeamsIndexRoute
  '/teams/$team/$season': typeof TeamsTeamSeasonRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/players/$playerId': typeof PlayersPlayerIdRoute
  '/players/': typeof PlayersIndexRoute
  '/standings/': typeof StandingsIndexRoute
  '/teams/': typeof TeamsIndexRoute
  '/teams/$team/$season': typeof TeamsTeamSeasonRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/players/$playerId'
    | '/players'
    | '/standings'
    | '/teams'
    | '/teams/$team/$season'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/players/$playerId'
    | '/players'
    | '/standings'
    | '/teams'
    | '/teams/$team/$season'
  id:
    | '__root__'
    | '/'
    | '/players/$playerId'
    | '/players/'
    | '/standings/'
    | '/teams/'
    | '/teams/$team/$season'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  PlayersPlayerIdRoute: typeof PlayersPlayerIdRoute
  PlayersIndexRoute: typeof PlayersIndexRoute
  StandingsIndexRoute: typeof StandingsIndexRoute
  TeamsIndexRoute: typeof TeamsIndexRoute
  TeamsTeamSeasonRoute: typeof TeamsTeamSeasonRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  PlayersPlayerIdRoute: PlayersPlayerIdRoute,
  PlayersIndexRoute: PlayersIndexRoute,
  StandingsIndexRoute: StandingsIndexRoute,
  TeamsIndexRoute: TeamsIndexRoute,
  TeamsTeamSeasonRoute: TeamsTeamSeasonRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/players/$playerId",
        "/players/",
        "/standings/",
        "/teams/",
        "/teams/$team/$season"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/players/$playerId": {
      "filePath": "players/$playerId.tsx"
    },
    "/players/": {
      "filePath": "players/index.tsx"
    },
    "/standings/": {
      "filePath": "standings/index.tsx"
    },
    "/teams/": {
      "filePath": "teams/index.tsx"
    },
    "/teams/$team/$season": {
      "filePath": "teams/$team.$season.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
