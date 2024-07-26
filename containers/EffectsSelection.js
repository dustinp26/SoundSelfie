import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import EffectTile from '../components/EffectTile';
import { getEffects, applyEffect } from '../utils/effects';

const EffectsSelection = ({ audio, effects }) => {
  const [selectedEffect, setSelectedEffect] = useState(null);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    return () => {
      setMounted(false);
    };
  }, []);

  useEffect(() => {
    if (selectedEffect && mounted) {
      applyEffect(audio, selectedEffect);
    }
  }, [selectedEffect, audio, mounted]);

  return (
    <View style={{ flex: 0, justifyContent: 'center', alignItems: 'center' }}>
      {effects.map((effect) => (
        <EffectTile key={effect.id} effect={effect} setSelectedEffect={setSelectedEffect} />
      ))}
      {selectedEffect && (
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
          Selected effect: {selectedEffect.name}
        </Text>
      )}
    </View>
  );
};

export default EffectsSelection;