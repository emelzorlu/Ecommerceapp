//import liraries
import React, {Component} from 'react';
import {CATEGORIES, FAVORITES, HOME, PROFILE} from '../../utils/routes';
import {
  Home2,
  Category,
  NotificationFavorite,
  Profile,
} from 'iconsax-react-native';

// create a component
const TabIcon = ({name, size, color}) => {
  if (name == HOME) {
    return <Home2 size={size} color={color} variant="Bold" />;
  } else if (name == CATEGORIES) {
    return <Category size={size} color={color} variant="Bold" />;
  } else if (name == FAVORITES) {
    return <NotificationFavorite size={size} color={color} variant="Bold" />;
  } else if (name == PROFILE) {
    return <Profile size={size} color={color} variant="Bold" />;
  }
};

export default TabIcon;