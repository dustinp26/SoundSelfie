import React from 'react';
import { View, Text } from 'react-native';

const EffectTile = ({ effect, setSelectedEffect }) => {
  return (
    <View>
      <Text>Effect Tile Component</Text>
      <Text onPress={() => setSelectedEffect(effect)}>{effect.name}</Text>
    </View>
  );
};