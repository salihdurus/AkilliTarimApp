export type stateParams = {
    token: String,
    name: String
}

const reducer = (state: stateParams, action: any) => {
    switch (action.type) {
        case "SAVE": return state.token = action.token
        default:
            return state;
    }
}
export default reducer;