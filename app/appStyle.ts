import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        height: "80%",
    },
    listContainer: {
        alignItems: "center",
        justifyContent: "center",
        padding: 5
    },
    profileContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    textContainer: {
        flex: 1,
        alignItems: "center"
    },
    item: {
        marginBottom: 8
    },
    button: {
        marginTop: 20
    },
    card: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
        width: 325,
        gap: 8
    },
    cardContent: {
        flex: 1,
        justifyContent: "center"
    },
    avatar: {
        width: 75,
        height: 75,
        borderRadius: 999
    },
    boldText: {
        fontWeight: "bold",
    },
    position: {
        width: "90%",
        alignSelf: "center",
        marginBottom: 12,
        marginTop: 12
    },
    positionEmail: {
        width: "100%"
    }
});

export default styles;