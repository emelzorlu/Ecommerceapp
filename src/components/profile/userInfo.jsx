//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {height, width} from '../../utils/constans';
import { AppColors } from '../../theme/colors';

// create a component
const UserInfo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/user.jpeg')}
        style={{
          width: width * 0.35,
          height: width * 0.35,
          resizeMode: 'contain',
          alignSelf: 'center',
          borderRadius:1000
        }}
      />
      <Text style={{fontWeight:"800",fontSize:20,marginVertical:10}}>Emel Zorlu</Text>
      <Text style={{fontWeight:"500",fontSize:14,color:AppColors.GRAY}}>Mobile Developer</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    minHeight: height / 3,
    justifyContent:"center",
    alignItems:"center"
  },
});

//make this component available to the app
export default UserInfo;