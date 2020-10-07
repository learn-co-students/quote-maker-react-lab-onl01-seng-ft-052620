export default (state = [], action) => {
  switch(action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]
    case "REMOVE_QUOTE":
      return state.filter( quote => quote.id !== action.quoteId)
    case "UPVOTE_QUOTE":
      let upvotedQuote = state.find( quote => quote.id === action.quoteId)
      let indexOfUpvote = state.indexOf(upvotedQuote);
      upvotedQuote = {...upvotedQuote, votes: upvotedQuote.votes + 1} 
      let firstHalfCopy =  state.slice(0, indexOfUpvote - 1)
      let lastHalfCopy = state.slice(indexOfUpvote, state.length - 1)
      return [...firstHalfCopy, upvotedQuote, ...lastHalfCopy]
    case "DOWNVOTE_QUOTE":
      let downvotedQuote = state.find( quote => quote.id === action.quoteId)
      let indexOfDownvote = state.indexOf(downvotedQuote);
      if (downvotedQuote.votes > 0) {
        downvotedQuote = {...downvotedQuote, votes: downvotedQuote.votes - 1}
      }
      let firstHalf =  state.slice(0, indexOfDownvote - 1)
      let lastHalf = state.slice(indexOfDownvote, state.length - 1)
      return [...firstHalf, downvotedQuote, ...lastHalf]
    default: 
      return state
  }
}
