export const addQuote = (quote) => {
    return {
        type: "ADD_QUOTE",
        quote
    }
}

export const removeQuote = (quoteId) => {
    return {
        type: "REMOVE_QUOTE",
        quoteId
    }
}

export const upvoteQuote = (integer) => {
    return {
        type: "UPVOTE_QUOTE",
        quoteId: integer
    }
}

export const downvoteQuote = (quoteId) => {
    return {
        type: "DOWNVOTE_QUOTE",
        quoteId
    }
}  