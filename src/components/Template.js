import React from "react";
import { View, StyleSheet } from "react-native";
import { Layout, Styles, Fonts, Colors } from "../../constants";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  container: {},
});

export default function Template(props) {
  return <View style={styles.container}></View>;
}

// PropTypes.oneOf([true, false, undefined])
Template.propTypes = {};

Template.defaultProps = {};
