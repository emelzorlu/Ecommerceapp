//import liraries
import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import widgets from '../../widgets';
import {screenStyle} from '../../styles/screenStyle';

// create a component
const Home = () => {
  const renderItem = ({item}) => {
    return <View>{item.isShow && item.component}</View>;
  };
  return (
    <View style={screenStyle.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={widgets}
        renderItem={renderItem}
      />
    </View>
  );
};
export default Home;