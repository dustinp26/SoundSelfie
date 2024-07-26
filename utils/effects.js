const effects = [
    { id: 1, name: 'Effect 1' },
    { id: 2, name: 'Effect 2' },
    { id: 3, name: 'Effect 3' },
  ];
  
export const getEffects = () => {
  return new Promise((resolve, reject) => {
    resolve(effects); // Resolve with the effects array
  });
};
  
export const applyEffect = (audio, selectedEffect) => {
  console.log(`Applying effect: ${selectedEffect.name}`);
};