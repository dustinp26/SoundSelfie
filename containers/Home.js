import React from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header';
import EffectsSelection from './EffectsSelection';

const Home = () => {
  return (
    <View>
      <Header />
      <EffectsSelection />
    </View>
  );
};

export default Home;