# Field Guide to Fantastic Beasts

[Heroku link][heroku]

[heroku]: https://field-guide-to-beasts.herokuapp.com/

## Minimum Viable Product

"Field Guide To Fantastic Beasts" or 'Field Guide' is a web application inspired by Harry Potter, Dungeons and Dragons, and other fantasy lores. Design strives to replicate key functionalities from sites like RateMyProfessor and will be built using Ruby on Rails and React.js. By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [x] New account creation, login, and guest/demo login
- [x] Smooth, bug-free navigation
- [x] Adequate seed data to demonstrate the site's features
- [x] The minimally necessary features for a RateMyProfessor-inspired site: Rating Beasts, Search with Autocomplete, Beasts organized by affinity (biome).
- [x] Hosting on Heroku
- [x] CSS styling that is satisfactorily visually appealing
- [x] A production README

## Product Goals and Priorities

Field Guide will allow users to do the following:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [x] Create an account (MVP)
- [x] Log in / Log out, including as a Guest/Demo User (MVP)
- [x] Search, select matching search results, and autocomplete searches for Beasts (MVP)
- [x] Rate Beasts in terms of Danger rating (MVP)
- [x] Write full review on Beast entries (MVP)
- [x] Like beasts (MVP)
- [x] Create Beast entries (MVP)
- [ ] Search/sort beasts by their danger rating (expected, but not MVP)
- [ ] Add Beasts to personal bookmarks (bonus, not MVP)

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

- [x] create new project
- [x] create `User` model
- [x] front-end authentication
- [x] CRUD API for user
- [x] user signup/signin forms
- [x] setup Webpack & Flux scaffold
- [x] setup `UserAPIUtil` to interact with the API
- [x] blank landing page after signin
- [x] test out API interaction in the console.

### Phase 2: Beasts Model, API, and basic BeastAPIUtil (1.5 days)

**Objective:** Beasts can be created and read through the API.

- [x] create `Beast` model
- [x] seed the database with a small amount of test data
- [x] CRUD API for beast (`BeastsController`)
- [x] jBuilder views for beasts
- [x] setup Webpack & Flux scaffold
- [x] setup `BeastAPIUtil` to interact with the API
- [x] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (2 days)

**Objective:** Beasts can be created, selected, bookmarked, and reviewed with the user interface.

- [x] setup React Router
- [x] setup `Review` model
- [x] setup `Like` model
- [x] setup the flux loop with skeleton files
- implement each beast component, building out the flux loop as needed.
  - [x] `BeastIndex`
  - [x] `AffinityBeastList`
  - [x] `BeastListItem`
  - [x] `Beast`
  - [x] `BeastForm`
  - [x] `Review`
  - [x] `Like`

### Phase 4: Start Styling (1 days)

**Objective:** Existing pages (including signup/signin) will look good.

- [x] create a basic style guide
- [x] position elements on the page
- [x] add basic colors & styles

### Phase 5: Affinity (1 day)

**Objective:** Beasts belong to an Affinity, and can be viewed by Affinity.

- [x] create `Affinity` model
- build out API, Flux loop, and components for:
  - [x] Affinity CRUD
  - [x] Sorting beasts by affinity
  - [x] Viewing beasts by affinity
- [x] Use CSS to style new views

### Phase 6: Search (2 days)

**Objective:** User can search for Beasts. Search autocomplete and suggested completion can be done from the user interface.

- build out API, Flux loop, and components for:
  - [x] fetching beasts
  - [x] searching beasts by name
  - [x] displaying selected beast
- [x] Style new elements

### Phase 7: Affinity NavBar (1.5 day)

**objective:** Implement AffinityFilterBar and associated components on FieldGuideIndex.

- [x] build out AffinityFilterBar Flux loop and components for:
  - [x] displaying AffinityDetails.
  - [x] displaying AffinityBeastList and BeastListItems.
- [x] Style new elements

### Phase 8: Styling Cleanup and Seeding (3 days)

**objective:** Make the site aesthetics more polished.

- [x] Get feedback on my UI from others
- [x] Refactor HTML classes & CSS rules
- [x] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Users can search/sort beasts by their danger rating
- [ ] Users can bookmark beasts for a collection
- [ ] Implement map with location markers to indicate where beasts live.
- [ ] Users can select multiple beasts and create a collection out of them.
