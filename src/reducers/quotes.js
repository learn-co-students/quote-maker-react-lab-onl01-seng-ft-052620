export default (state = [], action) => {
  switch(action.type) {
    case "ADD_QUOTE":
      return [ ...state, action.quote]
    case "REMOVE_QUOTE":
      return state.filter( quote => quote.id !== action.quoteId);
    case "UPVOTE_QUOTE":
      let upvotedQuote = state.find(quote => quote.id === action.quoteId);
      let indexOfUpvotedQuote = state.indexOf(upvotedQuote);
      upvotedQuote = { ...upvotedQuote, votes: upvotedQuote.votes + 1}
      let firstHalfCopy = state.slice(0, indexOfUpvotedQuote - 1)
      let lastHalfCopy = state.slice(indexOfUpvotedQuote, state.length - 1)
      return [...firstHalfCopy, upvotedQuote, ...lastHalfCopy];
    case "DOWNVOTE_QUOTE":
      let downvotedQuote = state.find(quote => quote.id === action.quoteId);
      let indexOfDownvotedQuote = state.indexOf(downvotedQuote);
      if(downvotedQuote.votes > 0) {
        downvotedQuote = { ...downvotedQuote, votes: downvotedQuote.votes - 1}
      }
      let _firstHalfCopy = state.slice(0, indexOfDownvotedQuote - 1)
      let _lastHalfCopy = state.slice(indexOfDownvotedQuote, state.length - 1)
      return [..._firstHalfCopy, downvotedQuote, ..._lastHalfCopy];
    default:
      return state;
  }



}
