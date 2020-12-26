import { useRoute } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';

import { FlatList } from 'react-native';

import Account from '../../components/Account';
import AddNewAccount from '../../components/AddNewAccount';
import Header from '../../components/Header';
import MonthContext from '../../context/MonthContext';
import api from '../../services/api';
import Icon from 'react-native-vector-icons/Feather'

import { Container, EmptyText, Loading, Wrapper } from './styles';

interface AccountRouteParams {
  Monthkey: string
}

interface AccountsProps {
  id: string
  title: string
  value: string
  pay_day: number
  payment_month: string
  year: number
  paid: boolean
}

const Empty = () => (
  <Wrapper>
    <Icon name='alert-circle' size={20} color='#fff'/>
    <EmptyText>Esse mês está sem contas para pagar</EmptyText>
  </Wrapper>
)


const Dashboard: React.FC = () => {
  const { currentMonth } = useContext(MonthContext)

  const route = useRoute()

  const params = route.params as AccountRouteParams

  const [accounts, setAccounts] = useState<AccountsProps[]>([])

  useEffect(() => {
    api.get(`accounts/${params.Monthkey}`).then(res => {
      setAccounts(res.data)
    })
  }, [accounts])

  if(!accounts) {
    return <Loading>Carregando...</Loading>
  }
  
  return (
    <Container>
      <Header title={currentMonth} showCancel={false}/>
      <FlatList
        data={accounts}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Empty/>}
        renderItem={({ item }) => {
          return (
            <Account
              id={item.id}
              title={item.title}
              value={item.value}
              pay_day={item.pay_day}
              payment_month={item.payment_month}
              paid={item.paid}
              year={item.year}
            />
          )
        }}
      />

      <AddNewAccount/>
    </Container>
  );
};

export default Dashboard;
