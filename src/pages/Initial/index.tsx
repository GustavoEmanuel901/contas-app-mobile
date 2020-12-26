import React from 'react';

import { FlatList } from 'react-native';

import { Container } from './styles';

import Months from '../../utils/Months'
import Month from '../../components/Month';
import AddNewAccount from '../../components/AddNewAccount';

const Initial: React.FC = () => {
  return (
    <Container>
      <FlatList
          data={Months}
          keyExtractor={item => item.name}
          renderItem={({ item }) => {
            return (
              <Month
                name={item.name}
                Ikey={item.key}
                id={item.id}
              />
            )
          }}
      />

      <AddNewAccount/>
    </Container>
  );
};

export default Initial;
