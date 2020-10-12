export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote)
    case 'REMOVE_QUOTE':
      let newState = state.filter(quote => action.quoteId !== quote.id)
      return newState;
    case 'UPVOTE_QUOTE':
      let quote = state.find(quote => action.quoteId === quote.id)
      quote.votes++
      return state;
    case 'DOWNVOTE_QUOTE':
      let downQ = state.find(quote => action.quoteId === quote.id)
      if (downQ.votes > 0){
        downQ.votes--
      }
      return state;
    default:
      return state;
  }
}
