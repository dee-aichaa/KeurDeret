import {
  StyleSheet,
  Text,
  StatusBar,
  SafeAreaView,
  View,
  Platform,
  Image,
} from "react-native";
import { Feather, AntDesign, Fontisto, Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

function DashBoard() {

  const currentUser = useSelector((state) => state.user);

  return (

    
    <SafeAreaView style={styles.container}>
      <View style={styles.TopIcons}>
        <Text style={{ fontSize: 15, marginRight: 190, fontWeight: "bold" }}>
          Dashboard
        </Text>
        <Feather
          name="bell"
          size={30}
          color="#b5bcc6"
          style={{ marginRight: 15 }}
        />
        <AntDesign name="user" size={30} color="#b5bcc6" />
      </View>
      {/* profile */}
      <View style={styles.profile}>
        <Image
          style={{ width: 70, height: 70, borderRadius: 50 }}
          source={{
            uri: currentUser.photo,
          }}
        />
        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontWeight: "400", fontSize: 20 }}>{currentUser.firstName} {currentUser.lastName}</Text>
          <Text style={{ fontSize: 15 }}>{currentUser.address}</Text>
        </View>
      </View>
      {/* table */}
      <View style={styles.content}>
        <View
          style={{ marginLeft: 34, borderRightWidth: 0.2, paddingRight: 65 }}
        >
          <Fontisto
            name="blood-drop"
            size={30}
            color="#b5bcc6"
            style={{ paddingBottom: 10 }}
          />
          <Text style={{ textAlign: "center" }}>Donation</Text>
          <Text style={{ paddingBottom: 35 }}>45</Text>
        </View>

        <View style={{ marginRight: 60 }}>
          <AntDesign
            name="heart"
            size={30}
            color="#b5bcc6"
            style={{ paddingBottom: 10 }}
          />
          <Text>Safe Lives</Text>
          <Text>15</Text>
        </View>
        <View
          style={{
            marginTop: 150,
            flexDirection: "row",
            position: "absolute",
            paddingTop: 6,
          }}
        >
          <View
            style={{
              marginLeft: 30,
              paddingTop: 30,
              borderRightWidth: 0.2,
              paddingRight: 76,
            }}
          >
            <Fontisto
              name="blood"
              size={30}
              color="#b5bcc6"
              style={{ paddingBottom: 10 }}
            />
            <Text>Request</Text>
            <Text>5</Text>
          </View>

          <View style={{ marginLeft: 65, paddingTop: 30 }}>
            <Ionicons
              name="timer-outline"
              size={30}
              color="#b5bcc6"
              style={{ paddingBottom: 10 }}
            />
            <Text>Hanging request</Text>
            <Text>10</Text>
          </View>
        </View>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 20 : 0,
    marginHorizontal: 20,
  },
  TopIcons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingTop: 15,
  },
  profile: {
    flexDirection: "row",
    paddingTop: 30,
    marginLeft: 10,
    paddingBottom: 40,
  },
  content: {
    flexDirection: "row",
    paddingTop: 30,
    justifyContent: "space-between",
    borderBottomWidth: 0.2,
  },
});

export default DashBoard;
