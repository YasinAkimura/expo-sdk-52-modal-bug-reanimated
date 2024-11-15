import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { router, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { Button, View, Text } from 'react-native';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen 
            name="modalNoExitNoHeader" 
            options={{ 
                headerShown: true,
                presentation: 'modal', 
            }} 
        />
        <Stack.Screen 
            name="modalWithExitNoHeader" 
            options={{ 
                headerShown: true,
                presentation: 'modal', 
            }} 
        />
        <Stack.Screen 
            name="modalWithExitAndHeader" 
            options={{ 
                headerShown: true,
                header: CustomHeader,
                presentation: 'modal', 
            }} 
        />
      </Stack>
    </ThemeProvider>
  );
}

const CustomHeader = (props: any) => {
    const { options } = props; 
    return (
        <View>
        <Text>Header..</Text>
        <Button title="NO BUG ON BACK" onPress={router.back}></Button>
        </View>
    );
}
