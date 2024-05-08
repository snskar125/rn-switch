import {
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import { useRef, useEffect, memo } from "react";
const Switch = memo((props) => {
  const {
    size,
    activeSwitchColor,
    inActiveSwitchColor,
    activeTrackColor,
    inActiveTrackColor,
    value,
    onPress,
    disabled,
    animate,
  } = props;
  const trackWidth = size * 1.6;
  const translation = size * 0.6;
  const translateX = useRef(
    new Animated.Value(value ? translation : 0)
  ).current;
  useEffect(() => {
    if (value)
      Animated.timing(translateX, {
        toValue: translation,
        duration: animate ? 150 : 0,
        useNativeDriver: true,
      }).start();
    else
      Animated.timing(translateX, {
        toValue: 0,
        duration: animate ? 150 : 0,
        useNativeDriver: true,
      }).start();
  }, [value, size]);
  const trackColor = value ? activeTrackColor : inActiveTrackColor;
  const switchColor = value ? activeSwitchColor : inActiveSwitchColor;
  return (
    <TouchableWithoutFeedback disabled={disabled} onPress={onPress}>
      <View
        style={{
          height: size,
          width: trackWidth,
          borderRadius: size,
          backgroundColor: trackColor,
          padding: 2,
        }}
      >
        <Animated.View
          style={[
            styles.shadow,
            {
              height: size - 4,
              width: size - 4,
              borderRadius: size,
              backgroundColor: switchColor,
              transform: [{ translateX }],
            },
          ]}
        />
      </View>
    </TouchableWithoutFeedback>
  );
});
const styles = StyleSheet.create({
  shadow: {
    elevation: 5,
    showdowColor: "#B3B3B3",
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowOffset: { width: 2, height: 2 },
  },
});
Switch.defaultProps = {
  size: 25,
  activeSwitchColor: "#FFF",
  inActiveSwitchColor: "#FFF",
  activeTrackColor: "#505050",
  inActiveTrackColor: "#B3B3B3",
  onPress: () => {},
  value: false,
  disabled: false,
  animate: true,
};
export default Switch;
