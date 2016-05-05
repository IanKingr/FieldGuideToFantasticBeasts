var React = require('react');
var Beast = require('../components/Beast');
var BeastStore = require('../stores/beast_store');
var BeastActions = require('../actions/beastActions');
var AffinityBeastList = require('../components/AffinityBeastList');
var BrowserHistory = require('react-router').browserHistory;
var ReviewForm = require('../components/ReviewForm');
var ReviewStore = require('../stores/review_store');
var ReviewActions = require('../actions/reviewActions');
var ReviewList = require('../components/ReviewList');


window.BeastStore = BeastStore;
window.ReviewStore = ReviewStore;

var BeastIndex = React.createClass({

  handleClickOnBeast: function(){
    console.log("History Pushing the following beast Id " + this.props.beast.id);

    BrowserHistory.push("/beasts/"+this.props.beast.affinity_id+"/"+this.props.beast.id);
  },

  componentWillMount: function(){
    console.log("Component Will Mount [BeastIndex]");
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
    console.log("Receiving Props [BeastIndex]");
    var beastId = parseInt(this.props.params.id);
    var beast = BeastStore.find(nextProps.params.id);

    ReviewActions.resetReviewErrors();
    this.setState({
      currentBeast: beast,
      reviews: ReviewActions.fetchReviews({beast_id: nextProps.params.id})
    });
  },

  componentDidMount: function(){
    console.log("Component Did Mount [BeastIndex]");
    this.beastListener = BeastStore.addListener(this.getBeast);
    this.reviewListener = ReviewStore.addListener(this.getReviews);
    ReviewActions.fetchReviews({beast_id: this.props.params.id});
  },

  componentWillUnmount: function(){
    console.log("BeastIndex UNMOUNTED");
    this.beastListener.remove();
  },

  getReviews: function(){

    console.log("Get Reviews Callback triggered [BeastIndex]");
    this.setState({
      reviews: ReviewStore.allStored()
    });
  },

  getBeast: function(){
    console.log("Triggered getBeast callback [BeastIndex]");
    var currentBeast = BeastStore.currentBeast();

    if(currentBeast !== this.state.currentBeast) {
      this.setState({
        currentBeast: currentBeast,
      });
      console.log("The currentBeast has been stored [BeastIndex]" );
    }

    if(this.state.beasts !== BeastStore.allStored()){
      this.setState({
        beasts: BeastStore.allStored()
      });
      console.log("AllBeasts have been stored [BeastIndex]" );
    }

    console.log("But may not have triggered setting currentBeast or beasts : allStored");
    // console.log(this.state.beasts + " the beasts");
  },

  render: function(){
    var currentBeast = this.state.currentBeast;
    // debugger;
    console.log("Rendering BeastIndex now with current beast: " + currentBeast);
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
          <div className="BeastImage"><img src="http://res.cloudinary.com/flyingonclouds/image/upload/v1462355490/fea3c330780e39e372c5414b83671321_ehzru5.png"></img></div>
        </div>
        <div>
          <ReviewList reviews={this.state.reviews}/>
        </div>
      </div>
    );
  }
});

window.BeastIndex = BeastIndex;

module.exports = BeastIndex;
