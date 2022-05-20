import * as React from 'react';
import {Appbar} from 'react-native-paper';

const MainHeader = ({route}) => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header>
      {route.name !== 'Home' && <Appbar.BackAction onPress={_goBack} />}
      <Appbar.Content title={route.name} style={{alignItems: 'center'}} />
      <Appbar.Action icon="bell" onPress={_handleMore} />
      {/* <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
    </Appbar.Header>
  );
};

export default MainHeader;
