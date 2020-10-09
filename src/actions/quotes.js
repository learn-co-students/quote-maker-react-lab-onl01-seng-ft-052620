
export const addQuote = (quote) => {
    return {type: "ADD_QUOTE", quote}
}

export const removeQuote = (id) => {
    return {type: "REMOVE_QUOTE", quoteId: id}
}

export const upvoteQuote = quoteId => {
    return {
        type: "UPVOTE_QUOTE",
        quoteId
    }
}

export const downvoteQuote = quoteId => {
    return {
        type: "DOWNVOTE_QUOTE",
        quoteId
    }
}
