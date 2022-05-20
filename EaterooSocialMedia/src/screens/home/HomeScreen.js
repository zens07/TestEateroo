import React, {useEffect} from 'react';
import {
  Alert,
  BackHandler,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Avatar, Button, Card, TextInput} from 'react-native-paper';
import {StylesMainAuth} from '../../Styles/AuthenticationStyle';

export default function HomeScreen(props) {
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to close app?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  const arrayData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  return (
    <ScrollView contentContainerStyle={HomeStyles.container}>
      <Text>Feed</Text>
      <View style={{maxHeight: 80, marginTop: 10}}>
        <ScrollView
          nestedScrollEnabled={true}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <Avatar.Image
            style={HomeStyles.statusReal}
            size={60}
            source={require('../../assets/images/logo.png')}
          />
          <Avatar.Image
            style={HomeStyles.statusReal}
            size={60}
            source={require('../../assets/images/logo.png')}
          />
          <Avatar.Image
            style={HomeStyles.statusReal}
            size={60}
            source={require('../../assets/images/logo.png')}
          />
          <Avatar.Image
            style={HomeStyles.statusReal}
            size={60}
            source={require('../../assets/images/logo.png')}
          />
          <Avatar.Image
            style={HomeStyles.statusReal}
            size={60}
            source={require('../../assets/images/logo.png')}
          />
          <Avatar.Image
            style={HomeStyles.statusReal}
            size={60}
            source={require('../../assets/images/logo.png')}
          />
          <Avatar.Image
            style={HomeStyles.statusReal}
            size={60}
            source={require('../../assets/images/logo.png')}
          />
          <Avatar.Image
            style={HomeStyles.statusReal}
            size={60}
            source={require('../../assets/images/logo.png')}
          />
        </ScrollView>
      </View>
      {arrayData.map((value, index) => (
        <View
          key={index}
          style={{
            width: '100%',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            marginBottom: 20,
            backgroundColor: 'white',
          }}>
          <ImageBackground
            source={{uri: 'https://picsum.photos/700'}}
            imageStyle={HomeStyles.cardContainer}
            resizeMode="cover">
            <View style={HomeStyles.cardContent}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 10,
                }}>
                <View style={HomeStyles.photoProfile}>
                  <Avatar.Image
                    size={45}
                    source={require('../../assets/images/logo.png')}
                  />
                </View>
                <View style={HomeStyles.info}>
                  <Text>Name Profile</Text>
                  <Text>Time Post</Text>
                </View>
              </View>
              <View style={HomeStyles.bottomContent}>
                <Button icon="heart" style={HomeStyles.button}>
                  5.23 K
                </Button>
                <Button icon="comment" style={HomeStyles.button}>
                  5.23 K
                </Button>
                <Button icon="bookmark" style={HomeStyles.button}>
                  5.23 K
                </Button>
              </View>
            </View>
          </ImageBackground>
          <View style={{padding: 10}}>
            <View>
              <Text>Caption</Text>
            </View>
            <Text>Comment</Text>
          </View>
          <TextInput
            style={{
              backgroundColor: 'transparent',
              borderColor: '#E5E5E5',
              borderWidth: 1,
            }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const HomeStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  statusReal: {
    marginHorizontal: 5,
  },
  photoProfile: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 25,
  },
  cardContainer: {
    height: 300,
    borderRadius: 10,
    padding: 20,
  },
  cardContent: {
    height: 300,
    justifyContent: 'space-between',
    paddingBottom: 20,
    paddingTop: 10,
  },
  bottomContent: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    width: 90,
    borderRadius: 27,
    backgroundColor: '#FFFFFF',
  },
  info: {
    marginLeft: 10,
  },
});
