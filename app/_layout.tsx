import { Stack } from "expo-router";
import { MD3LightTheme, PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    surface: "#ffffff",
  },
};

export default function Layout() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
          <Stack
            screenOptions={{
              headerShown: true,
            }}
          />
      </PaperProvider>
    </SafeAreaProvider>
  );
}