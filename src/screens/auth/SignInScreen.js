import React, { useContext } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Screen from '../Screen';
import StyledText from '../../components/StyledText';
import Context from '../../navigation/Context';
import { Colors } from '../../constants';
import { t, changeLanguage } from '../../services/i18n';

export default function SignInScreen(props) {
  const context = useContext(Context);
  const onSignInPress = () => {
    context.signIn();
  };
  return (
    <Screen style={styles.container}>
      <StyledText center size={24} children={'This is auth/SignInScreen'} />
      <Button onPress={onSignInPress} title={'press to sign in'} color={Colors.secondaryColor} />
      <StyledText center size={24} children={t('common:changeLanguage')} />
      <Button onPress={() => changeLanguage('en')} title={'English'} color={Colors.primaryColor} />
      <Button onPress={() => changeLanguage('ar')} title={'عربي'} color={Colors.secondaryColor} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});
