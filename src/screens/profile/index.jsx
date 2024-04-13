//import liraries
import React, {useContext} from 'react';
import {View, Text, ScrollView} from 'react-native';
import StoreContext from '../../context';
import UserInfo from '../../components/profile/userInfo';
import ProfileMenu from '../../components/profile/profileMenu';
import {screenStyle} from '../../styles/screenStyle';
import {Button} from '@ui-kitten/components';
import {LOGIN} from '../../utils/routes';

// create a component
const Profile = ({navigation}) => {
  const {isLogin} = useContext(StoreContext);
  return (
    <View style={screenStyle.container}>
      {isLogin ? (
        <ScrollView>
          <UserInfo />
          <ProfileMenu />
        </ScrollView>
      ) : (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 16, fontWeight: '500'}}>
              Kullanıcı bilgilerini görmek için lütfen giriş yapınız.
            </Text>
          </View>
          <Button
            size="large"
            onPress={() => navigation.navigate(LOGIN)}
            style={{marginVertical: 10}}
            status="info">
            Giriş Yap
          </Button>
        </View>
      )}
    </View>
  );
};
export default Profile;