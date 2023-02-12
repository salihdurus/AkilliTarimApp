import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get("window").width;

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
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 5,
        marginLeft: 10,
    },

    headerText: {
        textAlign: "center",
        fontSize: 23,
        color: "white"
    },
    bodyText: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    },
    content: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    changeText: {
        fontSize: 17,
        color: "#006FFF",
    },
    change: {
        position: "absolute",
        right: 0,
    },
    slotsContainer: {
        borderWidth: 1,
        borderColor: "blue",
        borderRadius:15,
        padding: 15,
        paddingTop: 10,
        margin: 20,
        marginHorizontal:15,
    },
    slotsContent: {
        flexDirection: "row",
        justifyContent:"space-around"
    },
    buttonContainer: {
        marginHorizontal:15,
        marginTop: 0,
        marginBottom: 3,
    },
    divisionText:{
        marginTop:10,
        fontSize:15,
        color:"white"
    }
});