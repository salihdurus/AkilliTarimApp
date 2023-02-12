export default function (state, action) {
    switch (action.type) {
        case "ADD_TOKEN":
            const { token } = action.payload;
            return { ...state, userToken: token };
        case "ADD_USERNAME":
            const { userName } = action.payload;
            return { ...state, userName };
        default:
            return { ...state };
    }
}