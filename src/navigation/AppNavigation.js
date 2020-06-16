import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Context from "./Context";
import { RootStackNavigator } from "./stacks";

export default (props) => {
  const [isLogged, setIsLogged] = useState(props.isSignedIn);

  const context = {
    signIn: () => {
      setIsLogged(true);
    },
    signOut: () => {
      setIsLogged(false);
    },
  };
  return (
    <Context.Provider value={context}>
      <NavigationContainer>
        <RootStackNavigator isLogged={isLogged} />
      </NavigationContainer>
    </Context.Provider>
  );
};
