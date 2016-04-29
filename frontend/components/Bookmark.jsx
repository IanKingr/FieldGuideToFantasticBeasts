var React = require('react');
var BookmarkStore = require('../stores/bookmark_store');
var UserStore = require('../stores/user_store');
var BookmarkActions = require('../actions/bookmarkActions');


var Bookmark = React.createClass({

  // getInitialState: function (){
  //   return ({
  //     bookmarks:
  //   });
  // },

  componentDidMount: function(){
    this.bookmarkListener = BookmarkStore.addListener(this.getCurrentBookmark);
    var getData = {
      user_id: UserStore.currentUser().id,
      beast_id: this.props.beastId
    };
    BookmarkActions.fetchBookmark(getData);
  },

  componentWillUnmount: function(){
    this.bookmarkListener.remove();
  },

  getCurrentBookmark: function(){
    // Do we even need state here? I think we can just check the store with Find.
    this.setState({bookmark: BookmarkStore.currentBookmark()});
  },

  getBookmarks: function(){
    // Do we even need state here? I think we can just check the store with Find.
    this.setState({bookmarks: BookmarkStore.allBookmarks()});
  },

  createBookmark: function(){
    debugger;
    var postData = {
      user_id: UserStore.currentUser().id,
      beast_id: this.props.beastId
    };
    BookmarkActions.createBookmark(postData);
  },

  deleteBookmark: function(){
    BookmarkActions.deleteBookmark(this.props.beast.id);
  },

  toggleBookmark: function(){
    if(this.state.bookmarks){

    }
  },


  // addBookmark: function(){
  //   BookmarkActions.addBookmark(this.props.beast.id);
  // },

  // removeBookmark: function(){
  //   BookmarkActions.removeBookmark(this.props.beast.id);
  // },

  render: function(){
    return (
      <div>
        <div className="bookmark" onClick={this.toggleBookmark}>Bookmark</div>
      </div>
    );
  }
});

module.exports = Bookmark;
