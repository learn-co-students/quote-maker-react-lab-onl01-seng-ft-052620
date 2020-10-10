import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'

class Quotes extends Component {

  
  
  
  render() {
    const quoteCards = this.props.quotes.map(quote => <QuoteCard 
      quote={quote}
      remove={ () => this.props.removeQuote(quote.id)}
       upvote={() => this.props.upvoteQuote(quote.id)} 
       downvote={() => this.props.downvoteQuote(quote.id)}/>)
    //const quoteCards = this.props.quotes.map(quote => <QuoteCard content={quote.content} author={quote.author} remove={this.props.removeQuote} upvote={this.props.upvote} downvote={this.props.downvote}/>)
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
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */
               quoteCards
               }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>{
    return {
      quotes: state.quotes
    }
}



//add arguments to connect as needed
export default connect(mapStateToProps, {removeQuote, upvoteQuote, downvoteQuote})(Quotes);
