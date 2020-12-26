import React from 'react';

import { Button, Container } from './styles';
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'

const AddNewAccount: React.FC = () => {

  const navigation = useNavigation()

  function goRegister() {
    navigation.navigate('Register')
  }

  return (
    <Container>
      <Button onPress={goRegister}>
        <Icon name='plus' size={15} color='#f5f5f5'/>
      </Button>
    </Container>
  );
};

export default AddNewAccount;
