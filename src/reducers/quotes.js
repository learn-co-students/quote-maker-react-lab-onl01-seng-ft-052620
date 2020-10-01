export default (state = [], action) => {
  let quoteIdx
  if (action.quoteId){
    quoteIdx = state.findIndex(quote => quote.id === action.quoteId)
  }
  switch(action.type){
    case "ADD_QUOTE":
      return [...state, action.quote]
    case "REMOVE_QUOTE":
      return [...state.slice(0,quoteIdx), ...state.slice(quoteIdx + 1)]
    case "UPVOTE_QUOTE":
      const upvotedQuote = {
        ...state[quoteIdx],
        votes: state[quoteIdx].votes + 1
      }
      return [...state.slice(0,quoteIdx), upvotedQuote, ...state.slice(quoteIdx + 1)]
    case "DOWNVOTE_QUOTE":
      if (state[quoteIdx].votes > 0){
        const downvotedQuote = {
          ...state[quoteIdx],
          votes: state[quoteIdx].votes - 1
        }
        return [...state.slice(0,quoteIdx), downvotedQuote, ...state.slice(quoteIdx + 1)]
      } else {
        return state
      }
    default:
      return state;
  }
}
