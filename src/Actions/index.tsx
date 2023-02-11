export function saveToken(token:String) {
    return {
        type: "SAVE",
        token
    }
}