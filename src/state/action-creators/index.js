export const setNav = (navItem) => {
    return (dispatch) => {
        dispatch({
            type:"select",
            payload: navItem
        })
    }
}

export const selectPort = (portItem) => {
    return dispatch => {
        dispatch({
            type: "selectPortfolioItem",
            payload: portItem
        })
    }
}
