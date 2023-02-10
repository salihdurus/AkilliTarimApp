import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
    container: {
        backgroundColor: "#9E8A7F",
        borderRadius: 15,
        marginTop: 15,
        borderWidth: 1,
        borderColor: "#707070",
        marginBottom:30,
    },
    body: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 10,
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 5,
        marginLeft: 25,
        marginRight: 25,
        borderBottomColor: "white",
        borderBottomWidth: 1,
    },

    descriptionText: {
        // textAlign: "center",
        marginTop: 3,
        color: "white",
        fontSize: 18,
    },
    content: {
        flex: 1,
        margin: 8,
        marginLeft: windowWidth / 10,
    }
});