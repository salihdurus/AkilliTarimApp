import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: "#9E8A7F",
        borderRadius: 15,
        marginTop: 15,
        borderColor: "#707070"
    },
    body: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 20,
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 5,
    },
    headerText: {
        textAlign: "center",
        color: "white",
        // flex: 1,
        fontSize: 25,
        fontWeight: "bold"
    },
    descriptionText: {
        textAlign: "center",
        marginTop:8,
        color: "white",
        fontSize: 18,
    },
    content: {
        flex: 1,
        margin:15,
    }
});