import React, { Component } from "react";
import { downvoteQuote, removeQuote, upvoteQuote } from "../actions/quotes";
import { connect } from "react-redux";
import QuoteCard from "../components/QuoteCard";

class Quotes extends Component {
  renderQuotes = () => {
    return this.props.quotes.map((quote, index) => (
      <QuoteCard
        quote={quote}
        id={index}
        removeQuote={this.props.removeQuote}
        upvoteQuote={this.props.upvoteQuote}
        downvoteQuote={this.props.downvoteQuote}
      />
    ));
  };

  render() {
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
              {this.renderQuotes()}
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

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeQuote: (quoteID) => dispatch(removeQuote(quoteID)),
//     upvoteQuote: (quoteID) => dispatch(upvoteQuote(quoteID)),
//     downvoteQuote: (quoteID) => dispatch(downvoteQuote(quoteID)),
//   };
// };

//add arguments to connect as needed
export default connect(mapStateToProps, {
  downvoteQuote,
  removeQuote,
  upvoteQuote,
})(Quotes);
