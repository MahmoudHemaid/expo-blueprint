import "react-native-gesture-handler";
import * as React from "react";
import useCachedResources from "./src/hooks/useCachedResources";
import AppContainer from "./src/navigation/AppContainer";

console.ignoredYellowBox = [];
console.disableYellowBox = true;

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return <AppContainer />;
  }
}
