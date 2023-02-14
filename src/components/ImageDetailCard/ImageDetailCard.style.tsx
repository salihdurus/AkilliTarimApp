import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get("screen").width
const screenHeight = Dimensions.get("screen").height
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#9E8A7F",
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 25,
        padding: 10,
    },
    headerText: {
        fontSize: 25,
        color: "white",
        textAlign: "center",

    },
    descriptionText: {
        margin: 10,
        fontSize: 20,
        color: "white",
        textAlign: 'left',
        marginLeft: 5
    },
    image: {
        flex: 1,
        width: screenWidth / 1.1,
        height: screenHeight/2,
        resizeMode: 'stretch',
        borderRadius: 25,
        alignSelf: "center"
    }
})