//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AddCircle, MinusCirlce} from 'iconsax-react-native';
import {AppColors} from '../../theme/colors';
// create a component
const Counter = ({onChange,size=35}) => {
  const [count, setCount] = useState(0);

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
      onChange(count - 1);
    }
  };
  const increase = () => {
    if (count < 5) {
      setCount(count + 1);
      onChange(count + 1);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={decrease} style={styles.button}>
        <MinusCirlce size={size} variant="Outline" color={AppColors.BLACK} />
      </TouchableOpacity>
      <Text
        style={{fontSize: 18, fontWeight: '500', flex: 1, textAlign: 'center'}}>
        {count}
      </Text>
      <TouchableOpacity onPress={increase} style={styles.button}>
        <AddCircle size={size} variant="Bold" color={AppColors.BLACK} />
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: AppColors.SOFTGRAY,
    padding: 3,
    borderRadius: 100,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default Counter;