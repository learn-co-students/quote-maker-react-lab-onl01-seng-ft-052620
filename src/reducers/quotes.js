export default (state = [], action) => {
  let quote;
  let index;
  if (action.quoteId){
    quote = state.find(quote => quote.id == action.quoteId)
    index = state.indexOf(quote);
  }
  switch (action.type){
    case 'ADD_QUOTE':
      return [...state, action.quote];
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);
    case 'UPVOTE_QUOTE':
      quote = {...quote, votes: quote.votes + 1}
      return [...state.slice(0, index), quote, ...state.slice(index + 1)];
    case 'DOWNVOTE_QUOTE':
      if (quote.votes > 0){
        quote = {...quote, votes: quote.votes - 1}
        return [...state.slice(0, index), quote, ...state.slice(index + 1)];
      }
      else return state;
    default:
      return state;
  }
}
