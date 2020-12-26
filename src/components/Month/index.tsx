import React, { useContext } from 'react';

import { Container, Circle, Name } from './styles';
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import MonthContext from '../../context/MonthContext';

interface IMonthsProps {
  id: number;
  name: string;
  Ikey: string;
}

const Month: React.FC<IMonthsProps> = ({ id, name, Ikey }) => {
  const navigation = useNavigation()

  const { newMonth } = useContext(MonthContext)

  function goDashboard(Monthkey: string) {
    newMonth(name)

    navigation.navigate('Dashboard', { Monthkey })
  }

  return (
    <Container>
      <Name>{name}</Name>

      <Circle onPress={() => goDashboard(Ikey)}>
        <Icon name='chevron-right' size={20} color='#f5f5f5'/>
      </Circle>
    </Container>
  );
};

export default Month;
