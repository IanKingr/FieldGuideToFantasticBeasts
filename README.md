# Field Guide to Fantastic Beasts

[Field Guide live][heroku]

[heroku]: field-guide-to-beasts.herokuapp.com

"Field Guide To Fantastic Beasts" or 'Field Guide' is a web application inspired by Dungeons and Dragons, Harry Potter, and other fantasy lores. Design replicates key functionalities from sites like RateMyProfessor and was built using Ruby on Rails and React.js.

## Features & Implementation

Field Guide is an interactive (proof-of-concept) encyclopedia of mythical beasts. Users can navigate lore entries of various beasts, write reviews with ratings, and create their own beast entries as well. It features the following features and technical implementations.

* Single-page web application built on Rails, React.js/FLUX, and React-Router

* Custom and secure User Authentication with BCrypt salted hashing algorithm

* Users can search for Beasts, or browse by Affinity

* Create and Read reviews for multiple Beasts

* Gated user features and Guest login so visitors can still test the full functionality.

* Users can like and unlike Beasts

* Create new Beasts for users to Rate.

### Single-Page App

Field Guide is truly a single-page; all content is delivered on one static page. No need to refresh in order to navigate between pages or submit/get information. The root page listens to a `UserStore` and renders content based on a call to `UserStore._currentUser()`.  Sensitive information is kept out of the frontend of the app by making an API call to `UsersController#show`.

```ruby
class Api::UsersController < ApplicationController
  def show
    @user = current_user
    render :show
  end
 end
  ```

### Beast Rendering and Creating

  On the database side, the beasts are stored in one table in the database, which contains columns to describe all of their characteristics as well as their creator. The columns include `id`, `name`, `description`, `affinity_id`, `image_url`, `avg_length`, `avg_height`, `avg_weight` and `author_id`, a foreign key for the user's id.  When attempting to create a beast, front end verification occurs to make sure the user is logged in by checking the UserStore for a current user. Filling out the beasts information and submitting it makes an API call to the database and creates the beast entry, assuming the beast name is unique and passes validation. The beast table can be filtered `affinity_id` which is the environment, the beast is typically found/associated with.  These beasts are held in the `BeastStore` for fast querying.  

  The UI of "Field Guide" is completely hand-rolled and a personal design:  

![image of Field Guide index](/Users/ian/Desktop/FieldGuideToFantasticBeasts/docs/FieldGuideIndex.png)


### Searching Beasts



The ability to search through beasts required the building of the BeastStore flux cycle to hold the beast entries. The `SearchBar` component also utilizes a  `AffinityBeastList` subcomponent which houses the list of matching results. Further subcomponents like `BeastListItem` are also passed information about the beast in order to render information about the beast like their average `rating` score. This rating score was generated from an ActiveRecord query that joined our `review` table with our `beasts` table.

Given the size of our database and number of entries, Field Guide is able to front load the beasts to allow for fast querying and a smooth experience while in app. Refactoring this to handle a large number of entries would necessitate more hits to the database and/or selectively querying once a number of characters has been typed for example.  

![image of search results](/Users/ian/Desktop/FieldGuideToFantasticBeasts/docs/searchScreenshot.png)

`SearchBar` render method:

```javascript
render: function(){

  return (
    <div className="SearchContainer" >
      <input className="SearchBar" onClick={this.clickQuery} onChange={this.queryChange} type="text" value={this.state.query}></input>
      <AffinityBeastList beasts={this.state.beasts} itemclass={"SearchListItem"} className="SearchResultList"/>
    </div>
  );
}
```

### Likes

Likes are stored in the database in a `likes` table which acts as a join table for Users and Beasts.  The `likes` table contains the columns `id` and `beast_id`, `user_id`.

Tags are passed to the frontend by updating the relevant beast in the `BeastStore`. It was not necessary to create a `Like` component, as likes are simply rendered as part of the individual `Beast` component.  

![like screenshot](/Users/ian/Desktop/FieldGuideToFantasticBeasts/docs/likeScreenshot.png)


### Reviews

Stored in a `reviews` table, the columns it contains are `id`, `description`, and `rating`. The rating is used for an ActiveRecord query to generate an average score for each beast.

![image of Reviews](/Users/ian/Desktop/FieldGuideToFantasticBeasts/docs/reviewScreenshot.png)

## Future Directions for the Project

In addition to the features already implemented, here are a few of the stretch goals I plan to work on.

### Additional Search Queries

Users can search/sort beasts by their average danger rating. This could be useful for flavor purposes or more practical campaign planning.  

### Likes and Created Collections

Allow users to see the beasts they and others have created and liked. Also allow editing and deleting of beast entries and reviews.

### Map

More flavor, leverage Google Map API to plot out coordinates where beasts live.
