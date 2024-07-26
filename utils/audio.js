import { Audio } from 'react-native-audio';

const audio = new Audio();

export const startRecording = async () => {
  try {
    await audio.startRecording();
  } catch (error) {
    console.error(error);
  }
};

export const stopRecording = async () => {
  try {
    await audio.stopRecording();
  } catch (error) {
    console.error(error);
  }
};

export const playAudio = async (uri) => {
  try {
    await audio.play(uri);
  } catch (error) {
    console.error(error);
  }
};