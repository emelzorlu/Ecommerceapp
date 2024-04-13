//import liraries
import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {width} from '../../utils/constans';
import {AppColors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTDETAIL} from '../../utils/routes';

// create a component
const FavoriteCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(PRODUCTDETAIL, {item: item})}
      style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={{
            uri: item.image,
          }}
          style={{
            width: width * 0.14,
            height: width * 0.14,
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
        />
      </View>
      <View style={{flex: 4, paddingHorizontal: 8}}>
        <Text
          numberOfLines={2}
          style={{
            fontWeight: '700',
            marginVertical: 5,
            fontSize: 14,
            color: AppColors.BLACK,
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            marginVertical: 5,
            fontSize: 14,
            color: AppColors.GRAY,
            textTransform: 'capitalize',
          }}>
          {item.category}
        </Text>
        <Text
          style={{
            fontWeight: '700',
            marginVertical: 5,
            fontSize: 14,
            color: AppColors.BLACK,
          }}>
          ${item.price}
        </Text>
      </View>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
  },
});

//make this component available to the app
export default FavoriteCard;