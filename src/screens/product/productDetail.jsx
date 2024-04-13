//import liraries
import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import {screenStyle} from '../../styles/screenStyle';
import {height, width} from '../../utils/constans';
import {AppColors} from '../../theme/colors';
import Button from '../../components/uı/button';
import Counter from '../../components/uı/counter';
import {getRequest} from '../../service/verbs';
import {PRODUCTS_URL} from '../../service/urls';
import Spinner from '../../components/uı/spinner';
import {Heart, HeartAdd, Star} from 'iconsax-react-native';
import StoreContext from '../../context';
import { LOGIN } from '../../utils/routes';

// create a component
const ProductDetail = ({route,navigation}) => {
  const [product, setProduct] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const {addCart, addToFavorites,isLogin} = useContext(StoreContext);
  const {item} = route?.params;
  const checkIsLogin = () => {
    if (isLogin) {
      addToFavorites(item);
    } else {
      Alert.alert(
        'Giriş Yap',
        'Ürünleri favorilere eklemek için giriş yapmanız gerekmektedir.',
        [
          {
            text: 'Vazgeç',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'Giriş Yap', onPress: () => navigation.navigate(LOGIN)},
        ],
      );
    }
  };
  const getProductDetail = () => {
    setLoading(true);
    getRequest(PRODUCTS_URL + `/${item.id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      {isLoading ? (
        <Spinner />
      ) : (
        <View style={screenStyle.container}>
          <ScrollView>
            <View>
              <Image
                source={{
                  uri: product?.image,
                }}
                style={{
                  width: width,
                  height: width * 0.55,
                  resizeMode: 'contain',
                }}
              />
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 3, marginVertical: 20}}>
                  <Text
                    numberOfLines={2}
                    style={{fontWeight: '700', fontSize: 20}}>
                    {product?.title}
                  </Text>
                  <Text
                    numberOfLines={2}
                    style={{
                      fontWeight: '500',
                      fontSize: 14,
                      marginVertical: 20,
                      color: AppColors.GRAY,
                    }}>
                    {product?.category.toUpperCase()}
                  </Text>
                  <Text
                    numberOfLines={2}
                    style={{
                      fontWeight: '700',
                      fontSize: 20,
                      marginVertical: 5,
                    }}>
                    ${product?.price}
                  </Text>
                  <View
                    style={{
                      marginVertical: 10,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Star color={AppColors.PRIMARY} variant="Bold" size={25} />
                    <Text
                      style={{
                        fontWeight: '700',
                        fontSize: 18,
                        marginHorizontal: 5,
                      }}>
                      {product?.rating?.rate} / {product?.rating?.count}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    padding: 5,
                  }}>
                  <TouchableOpacity
                    onPress={() => checkIsLogin()}
                    style={{
                      backgroundColor: AppColors.SOFTGRAY,
                      padding: 5,
                      borderRadius: 1000,
                    }}>
                    {item.favorite ? (
                      <Heart size={28} color={AppColors.RED} variant="Bold" />
                    ) : (
                      <HeartAdd
                        size={28}
                        color={AppColors.BLACK}
                        variant="Outline"
                      />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    marginVertical: 5,
                    color: AppColors.BLACK,
                  }}>
                  {product?.description}
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      )}

      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 15,
          backgroundColor: AppColors.WHITE,
          flexDirection: 'row',
          borderTopWidth: 1,
          borderColor: AppColors.SOFTGRAY,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Counter onChange={value => console.warn(value)} />
        </View>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <Button onPress={() => addCart(item)} title={'Sepete Ekle'} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;