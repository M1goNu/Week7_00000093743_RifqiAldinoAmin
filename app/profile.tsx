import { Link, useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { Avatar, Button, Text } from "react-native-paper";
import styles from "./appStyle";

export default function home() {
    const { userName, userEmail, userAvatar } = useLocalSearchParams();
    return (
        <View style={styles.profileContainer}>
            <Avatar.Image size={100} source={{ uri: userAvatar as string }} style={{ marginVertical: 10 }} />
            <Text variant="titleLarge">{userName}&apos;s Profile</Text>
            <Text variant="titleMedium" style={{ marginVertical: 10 }}>{userEmail}</Text>
            <Link href="/" push asChild>
                <Button icon="home" >
                    Go to Home Screen
                </Button>
            </Link>
        </View>
    )
}