import ApplicationRoutes from './src/routes/routes';
import SplashScreen from "react-native-splash-screen";
import React from 'react';

const App = () => {

  //Hide Splash screen on app load.
  React.useEffect(() => {
    SplashScreen.hide();
  });


  return (
    ApplicationRoutes()
  );
};

export default App;

