# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## Field Guide Cycles

### Affinity API Request Actions

* `fetchAffinityBeasts`
  0. invoked from `FieldGuideIndex` `didMount`/`willReceiveProps`
  0. `GET /api/affinities/:id/beasts` is called.
  0. `receiveAllBeasts` is set as the callback.

* `fetchSingleBeast`
  0. invoked from `BeastListItem` `didMount`/`willReceiveProps`
  0. `GET /api/beasts/:id` is called.
  0. `receiveSingleBeast` is set as the callback.

### Affinity API Response Actions

* `receiveAllBeasts`
  0. invoked from an API callback.
  0. `Beast` store updates `_beasts` and emits change.

* `receiveSingleBeast`
  0. invoked from an API callback.
  0. `Beast` store updates `_beasts[id]` and emits change.

* `removeBeast`
  0. invoked from an API callback.
  0. `Beast` store removes `_beasts[id]` and emits change.


### Store Listeners

* `AffinityBeastList` component listens to `Beast` store.
* `AffinityDetails` component listens to `Beast` store.


### Review API Request Actions
* `fetchBeastReviews`
  0. invoked from `ReviewList` `didMount`/`willReceiveProps`
  0. `GET /api/reviews/:id` is called.
  0. `receiveAllReviews` is set as the callback.

* `createReview`
  0. invoked from `create review` button onClick
  0. `POST /api/reviews/:id` is called.
  0. `receiveAllReviews` is set as the callback.  


### Review API Response Actions

* `receiveAllReviews`
  0. invoked from an API callback.
  0. `Review` store updates `_reviews` and emits change.


### Store Listeners

* `ReviewList` component listens to `Review` store.


## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `SearchBar` `onChange` when there is text
  0. `GET /api/beasts` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `SearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.
