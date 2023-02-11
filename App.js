import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
// import { TailwindProvider }  from 'tailwindcss-react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white" >
      <Text>your app by ayoub!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

