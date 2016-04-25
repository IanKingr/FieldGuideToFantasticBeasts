# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Beasts

- `GET /api/beasts`
  - Beasts index/search
- `GET /api/beasts/:id`

### Affinities

- `GET /api/affinities`
- `GET /api/affinities/:id`
- `GET /api/affinities/:id/beasts`
  - index of all beasts for an affinity

### Bookmarks

- User's bookmarked beasts will be included in a BeastList
- `GET /api/bookmarks`
- `POST /api/bookmarks/:beast_id`: add bookmark to beast by beast_id
  - if bookmark doesn't already exist, it will be created
- `DELETE /api/bookmarks/:beast_id`: remove bookmark from beast by beast_id

### DangerRatings

- Displays Beast's danger rating on Beast's show page
- `GET /api/danger_ratings/:beast_id`
- `POST /api/danger_ratings/:beast_id`: add rating by user to beast by beast_id
  - if rating doesn't already exist, it will be created
- `PATCH /api/bookmarks/:beast_id`: update rating of beast by beast_id
