var React = require('react');
var Beast = require('../components/Beast');
var BeastStore = require('../stores/beast_store');
var UserStore = require('../stores/user_store');
var BeastActions = require('../actions/beastActions');
var AffinityBeastList = require('../components/AffinityBeastList');
var BrowserHistory = require('react-router').browserHistory;
var ReviewStore = require('../stores/review_store');
var ReviewActions = require('../actions/reviewActions');
var ReviewList = require('../components/ReviewList');
var LikeActions = require('../actions/likeActions');
var Modal = require("react-modal");
var Signin = require('./Signin');

var BeastIndex = React.createClass({
  toggleFavorite: function(){
    if(UserStore.currentUser()){
      var data = {beast_id: this.state.currentBeast.id};
      if(this._isLiked() === "Like") {
        LikeActions.createLike(data);
      } else {
        LikeActions.deleteLike(data);
      }
    } else {
      this.setState({SignInModalOpen: true});
    }
  },

  _isLiked: function(){
    var likeText = "Like";
    var currentUser = UserStore.currentUser();
    var beastId = parseInt(this.props.params.id);
    if (currentUser) {
      var currentUserLikes = currentUser.liked_beasts;
      if(currentUserLikes.indexOf(beastId) !== -1){
        likeText = "Unlike";
        $("#Like").addClass("Active");
      } else {
        $("#Like").removeClass("Active");
      }
    }

    return likeText;
  },

  handleClickOnBeast: function(){
    BrowserHistory.push("/beasts/"+this.props.beast.affinity_id+"/"+this.props.beast.id);
  },

  componentWillMount: function(){
    var beastId = parseInt(this.props.params.id);
    var affinityId = parseInt(this.props.params.affinity_id);
    BeastActions.fetchBeast({id: beastId});
    BeastActions.fetchBeasts({affinity_id: affinityId});
    this.setState({
      currentBeast: BeastStore.currentBeast(),
      beasts: BeastStore.allStored()
    });
  },

  componentWillReceiveProps: function(nextProps){
    var beastId = parseInt(this.props.params.id);
    var beast;
    if(parseInt(nextProps.params.id) === BeastStore.currentBeast().id){
      beast = BeastStore.currentBeast();
    } else {
      beast = BeastStore.find(nextProps.params.id);
    }

    ReviewStore.resetErrors();

    this.setState({
      currentBeast: beast,
      reviews: ReviewActions.fetchReviews({beast_id: nextProps.params.id})
    });
  },



  componentDidMount: function(){
    this.beastListener = BeastStore.addListener(this.getBeast);

    this.reviewListener =
    ReviewStore.addListener(this.getReviews);
    ReviewActions.fetchReviews({beast_id: this.props.params.id});

    this.userListener = UserStore.addListener(this.getCurrentUser);
  },

  getCurrentUser: function(){
    this.setState({
      currentUser: UserStore.currentUser()
    });

    if(this.state.currentUser){
      this.closeModal();
    }
  },

  componentWillUnmount: function(){
    this.beastListener.remove();
    this.userListener.remove();
    this.reviewListener.remove();
  },

  getReviews: function(){
    this.setState({
      reviews: ReviewStore.allStored()
    });
  },


  getBeast: function(){
    var currentBeast = BeastStore.currentBeast();
    this.setState({
      currentBeast: BeastStore.currentBeast(),
    });

    // this.getReviews();

    if(this.state.beasts !== BeastStore.allStored()){
      this.setState({
        beasts: BeastStore.allStored()
      });
    }
  },

  closeModal: function(){
    this.setState({
      SignInModalOpen: false,
    });
  },

  render: function(){
    var currentBeast = this.state.currentBeast;
    var beast_image;
    var num_likes;
    if(currentBeast){
      beast_image= <img src={currentBeast.image_url}></img>;
      num_likes = currentBeast.like_users.length;
      if(num_likes === 1){
        num_likes = num_likes +" user likes this beast";
      } else {
        num_likes = num_likes +" users like this beast";
      }
    } else {
      beast_image= <div></div>;
    }
    this._isLiked(); //Determines the color of the like button upon rendering

    return (
      <div className="BeastIndex">
        <div className="BeastIndexInfo">
          <div className="AffinityBeastListBeast">
            <div className="AffinityListHeader">&nbsp;</div>
            <AffinityBeastList beasts={this.state.beasts} className="AffinityBeastList"
              itemclass="BeastListItem"/>
            <div className="AffinityListHeader AffinityListFooter"></div>
          </div>
          <Beast currentBeast={currentBeast}/>
          <div>
            <button id="Like" className="Like" onClick={this.toggleFavorite}>Like</button>
            <div className="numLikes">
              {num_likes}
            </div>
            <div className="BeastImage">{beast_image}</div>
          </div>
        </div>
        <div>
          <ReviewList reviews={this.state.reviews}/>
        </div>

        <Modal
          isOpen={this.state.SignInModalOpen}
          onRequestClose={this.closeModal}
          className="SignModal">
          <Signin />
        </Modal>
      </div>
    );
  }
});

// window.BeastStore = BeastStore;

module.exports = BeastIndex;
