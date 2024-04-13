//import liraries
import React, {Component, useContext} from 'react';
import {View, Text, FlatList} from 'react-native';
import {AppColors} from '../../theme/colors';
import {screenStyle} from '../../styles/screenStyle';
import StoreContext from '../../context';
import FavoriteCard from '../../components/favorites/favoriteCard';
import ListEmptyComponent from '../../components/uı/listEmptyComponent';

// create a component
const Favorites = () => {
  const {favorites} = useContext(StoreContext);
  return (
    <View style={screenStyle.container}>
      <FlatList
        ListEmptyComponent={() => <ListEmptyComponent />}
        showsVerticalScrollIndicator={false}
        data={favorites}
        renderItem={({item}) => <FavoriteCard item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default Favorites;