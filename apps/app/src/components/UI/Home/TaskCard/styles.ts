import { StyleSheet } from "react-native";
import { colors } from "../../../../utils/colors";

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.secondColor,
        height: 300,
        width: 280,
        borderRadius: 10,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: "65%"
    },
    info: {
        padding:10
    }
});

export default styles;