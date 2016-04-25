# Field Guide to Fantastic Beasts

[Heroku link][heroku] **NB:** Heroku link to be added

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

"Field Guide To Fantastic Beasts" or 'Field Guide' is a web application inspired by Harry Potter, Dungeons and Dragons, and other fantasy lores. Design strives to replicate key functionalities from sites like RateMyProfessor and will be built using Ruby on Rails and React.js. By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] New account creation, login, and guest/demo login
- [ ] Smooth, bug-free navigation
- [ ] Adequate seed data to demonstrate the site's features
- [ ] The minimally necessary features for a RateMyProfessor-inspired site: Rating Beasts, Search with Autocomplete, Beasts organized by affinity (biome).
- [ ] Hosting on Heroku
- [ ] CSS styling that is satisfactorily visually appealing
- [ ] A production README

## Product Goals and Priorities

Field Guide will allow users to do the following:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an account (MVP)
- [ ] Log in / Log out, including as a Guest/Demo User (MVP)
- [ ] Search, select matching search results, and autocomplete searches for Beasts (MVP)
- [ ] Review Beasts and rate in terms of Danger rating (MVP)
- [ ] Add Beasts to personal bookmarks (MVP)
- [ ] Comment on Beast entries (MVP)
- [ ] Create Beast entries (MVP)
- [ ] Users can search/sort beasts by their danger rating (expected, but not MVP)

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (1.5 days)

**Objective:** Functioning rails project with Front-End Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] front-end authentication
- [ ] CRUD API for user
- [ ] user signup/signin forms
- [ ] setup Webpack & Flux scaffold
- [ ] setup `UserAPIUtil` to interact with the API
- [ ] blank landing page after signin
- [ ] test out API interaction in the console.

### Phase 2: Beasts Model, API, and basic BeastAPIUtil (1.5 days)

**Objective:** Beasts can be created and read through the API.

- [ ] create `Beast` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for beast (`BeastsController`)
- [ ] jBuilder views for beasts
- [ ] setup Webpack & Flux scaffold
- [ ] setup `BeastAPIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (2 days)

**Objective:** Beasts can be created, selected, bookmarked, and reviewed with the user interface.

- [ ] setup `Review` model
- [ ] setup `Bookmark` model
- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each beast component, building out the flux loop as needed.
  - [ ] `BeastListItem`
  - [ ] `Beast`
  - [ ] `BeastForm`
  - [ ] `Review`
  - [ ] `Bookmark`

### Phase 4: Start Styling (1 days)

**Objective:** Existing pages (including signup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Affinity (1 day)

**Objective:** Beasts belong to an Affinity, and can be viewed by Affinity.

- [ ] create `Affinity` model
- build out API, Flux loop, and components for:
  - [ ] Affinity CRUD
  - [ ] Sorting beasts by affinity
  - [ ] Viewing beasts by affinity
- Use CSS to style new views

### Phase 6: Search (2 days)

**Objective:** User can search for Beasts. Search autocomplete and suggested completion can be done from the user interface.

- build out API, Flux loop, and components for:
  - [ ] fetching beasts
  - [ ] searching beasts by name
  - [ ] displaying selected beast
- [ ] Style new elements

### Phase 7: Affinity NavBar (1.5 day)

**objective:** Implement Affinity NavBar and associated components on FieldGuideIndex.

- [ ] build out AffinityNavBar Flux loop and components for:
  - [ ] displaying AffinityDetails.
  - [ ] displaying AffinityBeastList and BeastListItems.
- [ ] Style new elements

### Phase 8: Styling Cleanup and Seeding (3 days)

**objective:** Make the site aesthetics more polished.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Users can search/sort beasts by their danger rating
