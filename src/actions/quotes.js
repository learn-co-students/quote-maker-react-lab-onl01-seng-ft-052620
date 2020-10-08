// TODO: Create action creators as defined in tests

export const addQuote = (quote) => {
    return { type: "ADD_QUOTE", quote }
}

export const removeQuote = (id) => {
    return { type: "REMOVE_QUOTE", quoteId: id }
}
/// Both of these formats work; if the arugument passed in isn't identical to the key you
/// want, then you need to supply key and value.

export const upvoteQuote = (quoteId) => {
    return { type: "UPVOTE_QUOTE", quoteId }
}

export const downvoteQuote = (quoteId) => {
    return { type: "DOWNVOTE_QUOTE", quoteId }
}