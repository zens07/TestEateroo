import {StyleSheet} from 'react-native';
import {windowSize} from '../utils/Global/windowSize';

export const StylesMainAuth = StyleSheet.create({
  container: {
    width: windowSize.width,
    height: windowSize.height,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#EB5353',
  },
  cardContainer: {
    width: '100%',
    flex: 1,
    maxHeight: 460,
    borderRadius: 10,
    marginTop: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 20,
  },
  screenLabel: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 10,
  },
});
