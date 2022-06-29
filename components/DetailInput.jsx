import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import COLORS from "../colors/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const DetailInput = ({
  error,
  inputType,
  inputFields,
  setInputFields,
  onFocus = () => {},
  ...props
}) => {
  const [whenFocused, setWhenFocused] = React.useState(false);
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    console.log("Changed");
    setInput(e);
    // setInputFields((prevState) => {
    //   return {
    //     ...prevState,
    //     [inputType]: e,
    //   };
    // });
  };

  return (
    <View style={{ marginBottom: 10 }}>
      <Text style={styles.label}>{label}</Text>
      {/* check for error N FOCUS with bordercolor if statement */}
      <View
        style={
          (styles.inputContainer,
          {
            borderColor: error
              ? COLORS.red
              : whenFocused
              ? COLORS.darkBlue
              : COLORS.light,
          })
        }
      >
        <MaterialCommunityIcons
          name={iconName}
          size={22}
          color={COLORS.darkBlue}
          marginRight={10}
        />
        <TextInput
          autoCorrect={false}
          value={input}
          onChangeText={handleChange}
          onFocus={() => {
            onFocus();
            setWhenFocused(true);
          }}
          onBlur={() => {
            setWhenFocused(false);
          }}
          //  onBlur prop when the textinput loses focus the color changes
          style={{ color: COLORS.darkBlue, flex: 1 }}
          {...props}
        />
      </View>
      {error && (
        <Text style={{ color: COLORS.red, fontSize: 12, marginTop: 7 }}>
          {error}
        </Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.grey,
  },
  inputContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    flexDirection: "row",
    marginHorizontal: 15,
    borderWidth: 0.5,
    alignItems: "center",
  },
});

export default DetailInput;
