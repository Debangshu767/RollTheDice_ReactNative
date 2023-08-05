import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import React, { useState, useEffect } from 'react';
import DiceOne from './src/assets/one.svg';
import DiceTwo from './src/assets/two.svg';
import DiceThree from './src/assets/three.svg';
import DiceFour from './src/assets/four.svg';
import DiceFive from './src/assets/five.svg';
import DiceSix from './src/assets/six.svg';

const App = () => {
  const diceOptions = [
    <DiceOne height={'250px'} />,
    <DiceTwo height={'250px'} />,
    <DiceThree height={'250px'} />,
    <DiceFour height={'250px'} />,
    <DiceFive height={'250px'} />,
    <DiceSix height={'250px'} />,
  ];

  const [diceImage, setDiceImage] = useState(diceOptions[0]);
  const [rolling, setRolling] = useState(false);

  const handlePress = () => {
    
    if (!rolling) {
      setRolling(true);
    }
  };

  useEffect(() => {
    let rollInterval: NodeJS.Timeout;
    if (rolling) {
      let rollCount = 0;
      rollInterval = setInterval(() => {
        let val = Math.floor(Math.random() * 6);
        setDiceImage(diceOptions[val]);
        rollCount++;
        if (rollCount === 10) {
          setRolling(false);
        }
      }, 50); 
    }
    return () => clearInterval(rollInterval);
  }, [rolling]);

  return (
    <>
      <StatusBar backgroundColor={'rgb(226 232 240)'} />

      <View className="h-full bg-slate-200 flex justify-center items-center">
        {diceImage}
        <TouchableOpacity onPress={handlePress}>
          <Text className="text-3xl bg-white shadow-lg shadow-fuchsia-900 mt-4 text-red-600 uppercase rounded-lg p-2 font-black">
            Roll
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;
