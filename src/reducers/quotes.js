export default (state = [], action) => {

  switch(action.type){
    case "ADD_QUOTE":
      return  [...state, action.quote]
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId);
    case "UPVOTE_QUOTE":
      let upVoteQuote = state.find(quote => quote.id === action.quoteId);
      let upVoteIndex = state.findIndex(quote => quote.id === action.quoteId);
      debugger;
      upVoteQuote = { ...upVoteQuote, votes: upVoteQuote.votes + 1};
      let upVoteFirstHalfCopy = state.slice(0, upVoteIndex);
      let upVoteLastHalfCopy = state.slice(upVoteIndex+1);

      return [...upVoteFirstHalfCopy, upVoteQuote, ...upVoteLastHalfCopy];
    case "DOWNVOTE_QUOTE":
      let downVoteQuote = state.find(quote => quote.id === action.quoteId);
      let downVoteIndex = state.findIndex(quote => quote.id === action.quoteId);
      debugger;
      downVoteQuote = { ...downVoteQuote, votes: downVoteQuote.votes===0 ? downVoteQuote.votes : downVoteQuote.votes - 1};
      let downVoteFirstHalfCopy = state.slice(0, downVoteIndex);
      let downVoteLastHalfCopy = state.slice(downVoteIndex+1);

      return [...downVoteFirstHalfCopy, downVoteQuote, ...downVoteLastHalfCopy];
    default:
      return state;
  }
}


//when we add quotes it should be in this format:
/**
[
  {
    id: '23423424242-42342423424242-fafdb',
    content: 'One Awesome Quote',
    author: 'Luke Ghenco'
  }
]
 */