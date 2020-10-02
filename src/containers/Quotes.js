import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote,upvoteQuote,downvoteQuote } from '../actions/quotes'

class Quotes extends Component {

  genQuotes = () => {
    return this.props.quotes.map( (quote,i) => 
      <QuoteCard 
        key={i} 
        quote={quote}
        removeQuote={() => this.props.removeQuote(quote.id)} 
        upvoteQuote={() => this.props.upvoteQuote(quote.id)}
        downvoteQuote={() => this.props.downvoteQuote(quote.id)}
      /> )
  }

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
              { this.genQuotes() }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
}

export default connect(mapStateToProps,{ removeQuote,upvoteQuote,downvoteQuote })(Quotes);
