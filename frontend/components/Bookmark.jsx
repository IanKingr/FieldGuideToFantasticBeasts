var React = require('react');
var BookmarkStore = require('../stores/bookmark_store');
var BookmarkActions = require('../actions/bookmarkActions');

var Bookmark = React.createClass({

  componentDidMount: function(){
    this.bookmarkListener = BookmarkStore.addListener(this.getBookmarks);
    BookmarkActions.fetchBookmarks();
  },

  componentWillUnmount: function(){
    this.bookmarkListener.remove();
    BookmarkActions.fetchBookmarks(this.props.currentUser)
  },

  getBookmarks: function(){
    // Do we even need state here? I think we can just check the store with Find.
    this.setState({bookmarks: BookmarkStore.allBookmarks()});
  },

  createBookmark: function(){
    BookmarkActions.createBookmark(this.props.beast.id);
  },

  deleteBookmark: function(){
    BookmarkActions.deleteBookmark(this.props.beast.id);
  },

  toggleBookmark: function(){
    if(BookmarkStore.find(this.props.beast.id))
  }


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
