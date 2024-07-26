import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Header from './components/Header';
import EffectsSelection from './containers/EffectsSelection';

const App = () => {
  const [audio, setAudio] = useState(null);
  const [effects, setEffects] = useState([]);

  useEffect(() => {
    // Initialize audio recording and effects engine
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Header />
      <EffectsSelection audio={audio} effects={effects} />
    </View>
  );
};

export default App;

import { AppRegistry } from 'react-native';
AppRegistry.registerComponent('SoundSelfie', () => App);