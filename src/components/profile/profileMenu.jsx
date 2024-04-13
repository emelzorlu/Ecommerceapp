//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';
import {ArrowRight2, Book, Cards, Heart, Location, Notification, UserEdit} from 'iconsax-react-native';

// create a component
const ProfileMenu = () => {
  const buttons = [
    {
      title: 'Edit Profile',
      icon: <UserEdit size="25" color={AppColors.GRAY} variant="Bold" />,
      route: '',
    },
    {
      title: 'Shopping Adress',
      icon: <Location size="25" color={AppColors.GRAY} variant="Bold" />,
      route: '',
    },
    {
        title: 'Wishlist',
        icon: <Heart size="25" color={AppColors.GRAY} variant="Bold" />,
        route: '',
      },
      {
        title: 'Order History',
        icon: <Book size="25" color={AppColors.GRAY} variant="Bold" />,
        route: '',
      },
      {
        title: 'Notification',
        icon: <Notification size="25" color={AppColors.GRAY} variant="Bold" />,
        route: '',
      },
      {
        title: 'Cards',
        icon: <Cards size="25" color={AppColors.GRAY} variant="Bold" />,
        route: '',
      },
  ];
  return (
    <View style={styles.container}>
      {buttons.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 5,
            marginVertical: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {item.icon}
            <Text style={{fontSize: 18, marginLeft: 15, fontWeight: '600'}}>
              {item.title}
            </Text>
          </View>
          <ArrowRight2 size={25} color={AppColors.GRAY} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default ProfileMenu;