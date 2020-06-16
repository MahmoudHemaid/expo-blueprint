import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import Screen from '../Screen';
import StyledText from '../../components/StyledText';
import Context from '../../navigation/Context';
import { Colors } from '../../constants';

export default function SignInScreen(props) {
  const context = useContext(Context);
  const onSignInPress = () => {
    context.signIn();
  };
  return (
    <Screen style={styles.container}>
      <StyledText center size={24} children={'This is auth/SignInScreen'} />
      <StyledText
        center
        touchable
        onPress={onSignInPress}
        children={'press to sign in'}
        color={Colors.primaryColor}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});
