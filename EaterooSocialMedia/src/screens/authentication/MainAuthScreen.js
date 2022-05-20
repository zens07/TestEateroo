import React, {useState} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import {Card} from 'react-native-paper';
import {StylesMainAuth} from '../../Styles/AuthenticationStyle';

export default function MainAuthScreen(props) {
  const {children, route} = props;
  return (
    <View style={StylesMainAuth.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={StylesMainAuth.image}
      />
      <Card
        style={[
          StylesMainAuth.cardContainer,
          route.name === 'Login' ? {maxHeight: 400} : {},
        ]}>
        <Text style={StylesMainAuth.screenLabel}>{route.name}</Text>
        <Card.Content style={{flex: 1}}>{children}</Card.Content>
      </Card>
    </View>
  );
}
