//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';
import {height} from '../../utils/constans';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTLIST} from '../../utils/routes';
import {ArrowRight2} from 'iconsax-react-native';

// create a component
const CategoryCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(PRODUCTLIST, {category: item, title: item})
      }
      style={styles.container}>
      <Text
        style={{fontSize: 24, fontWeight: '600', textTransform: 'capitalize'}}>
        {item}
      </Text>
      <ArrowRight2 size={30} color="black" />
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.SOFTGRAY,
    padding: 10,
    minHeight: height / 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    flexDirection: 'row',
  },
});

//make this component available to the app
export default CategoryCard;