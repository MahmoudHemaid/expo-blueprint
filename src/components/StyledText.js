import React from "react";
import { Text, ViewPropTypes, TouchableOpacity } from "react-native";
import { Fonts, Colors } from "../constants";
import PropTypes from "prop-types";

const TextComponent = (props) => (
  <Text
    {...props}
    style={[
      {
        fontFamily: props.bold ? Fonts.bold : Fonts.regular,
        textAlign: props.center ? "center" : "auto",
        fontSize: props.size,
        color: props.color,
      },
      props.style,
    ]}
  />
);
export default function StyledText(props) {
  if (!props.touchable) {
    return <TextComponent {...props} />;
  }
  const { containerProps, containerStyle } = props;

  return (
    <TouchableOpacity {...containerProps} style={containerStyle}>
      <TextComponent {...props} />
    </TouchableOpacity>
  );
}

StyledText.propTypes = {
  bold: PropTypes.oneOf([true, false, undefined]),
  center: PropTypes.oneOf([true, false, undefined]),
  size: PropTypes.number,
  color: PropTypes.string,
  containerProps: PropTypes.object,
  touchable: PropTypes.oneOf([true, false, undefined]),
  containerStyle: ViewPropTypes.style,
  children: PropTypes.string,
};

StyledText.defaultProps = {
  bold: false,
  center: false,
  size: Fonts.size.regular,
  color: Colors.white,
  containerProps: {},
  touchable: false,
  containerStyle: {},
  children: "",
};
