import { Link, router } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import "react-native-reanimated"

import { StatusBar } from "expo-status-bar"
import { Image, ScrollView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { images } from "@/constants"
import CustomButton from "@/components/UI/CustomButton"

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <StatusBar style={"light"} backgroundColor="#161622" />
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            className="w-[130px] h-[84px]"
            source={images.logo}
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="w-full h-[300px] max-w-[380px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilites with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm text-gray-100 font-pregular mt-7 text-center">
            Where creativity meats innovatiion: embark on a journey of limitless
            exploration with Aora
          </Text>
          <CustomButton
            title={"Continue with Email"}
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-10"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
