import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: "#C28B52",
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 20,
        flex: 1,
        borderRadius: 25,
        alignItems: "center",
        flexDirection: "row"
    },
    text: {
        color: "white",
        fontSize: 20,
        textAlign: "center",
    },
    body: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    icon:{
        position:"absolute",
        left:20,
        color:"white"
    }
})