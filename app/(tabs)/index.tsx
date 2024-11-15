import { router } from "expo-router";
import { Button, View, Text } from "react-native";

export default function Screen() {
    return (
        <View>
        <Text>This causes the bug</Text>
        <Button title="Open modal with header and exiting animation" onPress={()=>router.navigate('/modalWithExitAndHeader')}></Button>
        <Text>This causes nothing</Text>
        <Button title="Open modal without header but exiting animation" onPress={()=>router.navigate('/modalWithExitNoHeader')}></Button>
        <Text>This causes nothing</Text>
        <Button title="Open modal without header and no exiting animation" onPress={()=>router.navigate('/modalNoExitNoHeader')}></Button>
        </View>
    );
}