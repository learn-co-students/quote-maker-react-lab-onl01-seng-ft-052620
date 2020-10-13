import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import QuoteForm from '../components/QuoteForm';
import {addQuote, removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes'
class Quotes extends Component {

  render() {
    const quotes = this.props.quotes.map((quote, i) => <QuoteCard key={i} quote={quote} addQuote={this.props.addQuote} removeQuote={this.props.removeQuote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote}/>)

    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
            {quotes}
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps= ({quotes}) => ({quotes})

// const mapDispatchToProps = dispatch => {
//   // addQuote = content => dispatch({type: 'ADD_QUOTE', content}),
//   removeQuote = content => dispatch({type: 'REMOVE_QUOTE', content}),
//   upVoteQuote = content => dispatch({type: 'UPVOTE_QUOTE', content}),
//   downVoteQuote = content => dispatch({type: 'DOWNVOTE_QUOTE', content})

// }

//add arguments to connect as needed
export default connect(mapStateToProps,{addQuote, removeQuote, upvoteQuote, downvoteQuote})(Quotes);
