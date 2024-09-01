import { View, Text, Image, ImageProps } from "react-native"
import React from "react"
import { Tabs } from "expo-router"
import { icons } from "@/constants"

const TabIcon = ({
  icon,
  color,
  name,
  focused,
}: {
  icon: ImageProps
  color: string
  name: string
  focused: boolean
}) => {
  return (
    <View className="flex-1 items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color }}
      >
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 84,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              name="Home"
              color={color}
              focused={focused}
              icon={icons.home}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: "Bookmark",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              name="Bookmark"
              color={color}
              focused={focused}
              icon={icons.bookmark}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              name="Create"
              color={color}
              focused={focused}
              icon={icons.plus}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              name="Profile"
              color={color}
              focused={focused}
              icon={icons.home}
            />
          ),
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
