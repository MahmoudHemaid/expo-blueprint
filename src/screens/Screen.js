import React from "react";
import { StyleSheet, View, ViewPropTypes } from "react-native";
import { useSafeArea, SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../constants";
import PropTypes from "prop-types";

export default function Screen(props) {
  const insets = useSafeArea();
  const ViewComponent = props.fullscreen ? View : SafeAreaView;
  return (
    <ViewComponent {...props} style={[styles.container, props.style]}>
      {props.children}
    </ViewComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
Screen.propTypes = {
  style: ViewPropTypes.style,
  fullscreen: PropTypes.oneOf([true, false, undefined]),
};

Screen.defaultProps = {
  style: {},
  fullscreen: false,
};
