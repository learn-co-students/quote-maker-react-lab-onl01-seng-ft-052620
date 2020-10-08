export default (state = [], action) => {
  let index, newQuote;
  switch (action.type) {
    case "ADD_QUOTE":
      return state.concat(action.quote);
      break;
    case "REMOVE_QUOTE":
      let newQuotes = state.filter((quote) => quote.id !== action.quoteId);
      return [...newQuotes];
      break;
    case "UPVOTE_QUOTE":
      index = state.findIndex((quote) => quote.id === action.quoteId);
      if (index || index == 0) {
        newQuote = { ...state[index], votes: state[index].votes + 1 };
        return [...state.slice(0, index), newQuote, ...state.slice(index + 1)];
      } else {
        throw action;
      }
      break;
    case "DOWNVOTE_QUOTE":
      index = state.findIndex((quote) => quote.id === action.quoteId);
      if (index || index == 0) {
        newQuote = {
          ...state[index],
          votes: state[index].votes === 0 ? 0 : state[index].votes - 1,
        };
        return [...state.slice(0, index), newQuote, ...state.slice(index + 1)];
      } else {
        throw action;
      }
      break;

    default:
      return state;
      break;
  }
};
