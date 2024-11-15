import { Text, View } from "@/components/Themed";
import { router } from "expo-router";
import { Button, StyleSheet } from "react-native";
import Animated, { FadeOutRight } from "react-native-reanimated";

/*
 * Bug happens when exiting a screen that is a modal.
 */
export default function Screen() {
    return (
        <View>
        <Text>Screen X Modal</Text>
        <Button title="NO BUG ON BACK" onPress={router.back}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'red',
        height: 100,
        width: 100,
    }
})