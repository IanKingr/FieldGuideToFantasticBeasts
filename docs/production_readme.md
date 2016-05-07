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

![image of notebook index](https://github.com/appacademy/sample-project-proposal/blob/master/docs/noteIndex.png)

Note editing is implemented using the Quill.js library, allowing for a Word-processor-like user experience.

### Notebooks

Implementing Notebooks started with a notebook table in the database.  The `Notebook` table contains two columns: `title` and `id`.  Additionally, a `notebook_id` column was added to the `Note` table.  

The React component structure for notebooks mirrored that of notes: the `NotebookIndex` component renders a list of `CondensedNotebook`s as subcomponents, along with one `ExpandedNotebook`, kept track of by `NotebookStore.selectedNotebook()`.  

`NotebookIndex` render method:

```javascript
render: function () {
  return ({this.state.notebooks.map(function (notebook) {
    return <CondensedNotebook notebook={notebook} />
  }
  <ExpandedNotebook notebook={this.state.selectedNotebook} />)
}
```

### Tags

As with notebooks, tags are stored in the database through a `tag` table and a join table.  The `tag` table contains the columns `id` and `tag_name`.  The `tagged_notes` table is the associated join table, which contains three columns: `id`, `tag_id`, and `note_id`.  

Tags are maintained on the frontend in the `TagStore`.  Because creating, editing, and destroying notes can potentially affect `Tag` objects, the `NoteIndex` and the `NotebookIndex` both listen to the `TagStore`.  It was not necessary to create a `Tag` component, as tags are simply rendered as part of the individual `Note` components.  

![tag screenshot](https://github.com/appacademy/sample-project-proposal/blob/master/docs/tagScreenshot.png)

## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for Field Guide are outlined below.

### Search

Searching notes is a standard feature of Evernote.  I plan to utilize the Fuse.js library to create a fuzzy search of notes and notebooks.  This search will look go through tags, note titles, notebook titles, and note content.  

### Direct Messaging

Although this is less essential functionality, I also plan to implement messaging between Field Guide users.  To do this, I will use WebRTC so that notifications of messages happens seamlessly.  
