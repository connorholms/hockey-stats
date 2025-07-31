This is an WIP project for playing around in react and building a landing space for a future NHL analytics project

npm commands in the package-json will set up the vite server, server and db until I get it all hosted on AWS

TODO:

- UI
  - waiting to build out more components before organizing
  - establish color scheme, fonts, header design etc
- Standings:
  - more table info or separate widget for standings sidebar and page?
  - Division/conference/wildcard/league toggle styling
  - division/conference/wildcard views
    - update standings headers to not be hardcoded + style
  - Write unit tests for standings sorting logic
- Team view
  - UI
  - Conference View?
- Roster
  - UI (images, table etc)
  - Team info in route (team name etc)
  - clean up typing and check for logs/cleanup etc.
  - specify component in create file route and use loader data directly in Roster.tsx
- Player info
  - future database integration? (might not be best for live stats)
  - format table to include stats
  - check typings and do a review of existing code
