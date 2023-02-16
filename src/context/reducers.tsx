export default function (state: any, action: any) {
    switch (action.type) {
        case "ADD_TOKEN":
            const { token } = action.payload;
            return { ...state, userToken: token };
        case "ADD_USERNAME":
            const { userName } = action.payload;
            return { ...state, userName };
        case "ADD_GARDEN":
            const { gardenId, gardenName } = action.payload;
            return { ...state, gardenId, gardenName }
        default:
            return { ...state };
    }
}