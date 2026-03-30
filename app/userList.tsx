import { Link } from "expo-router";
import { ScrollView, TouchableOpacity } from "react-native";
import { Avatar, Card } from "react-native-paper";
import Animated, { FadeInDown } from "react-native-reanimated";
import styles from "./appStyle";
import userData from "./data.json";

export default function userlist() {
    return (
        <ScrollView contentContainerStyle={styles.listContainer}>
          
        {userData.map((users, index) => (
        <Animated.View key={index} entering={FadeInDown.delay(index * 100)} style={styles.position}>
          <Card
            key={index}
            mode="outlined"
          >
            <Link href={{
              pathname: "/profile",
              params: { userName: users.name, userEmail: users.email, userAvatar: users.avatar }
            }} push asChild>
              <TouchableOpacity>
                <Card.Title
                  title={users.name}
                  subtitle={users.email}
                  left={(props) => (
                    <Avatar.Image
                      {...props}
                      size={40}
                      source={{ uri: users.avatar }}
                    />
                  )}
                />
              </TouchableOpacity>
            </Link>
          </Card>
        </Animated.View>
        ))}
      </ScrollView>
    )
}