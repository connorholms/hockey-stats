This is an WIP project for playing around in react and building a landing space for a future NHL analytics project

TODO:

- UI
  - waiting to build out more components before organizing
  - establish color scheme, fonts, header design etc
- Standings:
  - more table info or separate widget for standings sidebar and page?
  - sorting?
  - Division/conference/wildcard/league toggle styling
  - division/conference/wildcard views
  - Write unit tests for standings sorting logic
- Team view
  - UI
  - Divisions?
  - _once DB is ready_: Formatting (ex: save logos on DB and load with teams?)
- Roster
  - UI (images, table etc)
  - Team info in route (team name etc)
  - clean up typing and check for logs/cleanup etc.
  - specify component in create file route and use loader data directly in Roster.tsx
- Player info
  - future database integration? (might not be best for live stats)
  - format table to include stats
  - check typings and do a review of existing code
- Database:
  - add team table with logos and basic information grabbed from the different endpoints
    - (or multiple tables and join where needed)
