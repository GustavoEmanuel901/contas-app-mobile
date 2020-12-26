import React, { useState } from 'react';

import { Switch, ToastAndroid } from 'react-native'

import { Container, Content, Date, DateItem, Infos, Title, DeleteView, DeleteButton, TextValue, Wrapper, Paid } from './styles';

import Icon from 'react-native-vector-icons/Feather'
import api from '../../services/api';


interface IProps {
  id: string;
  title: string;
  value: string;
  pay_day: number,
  payment_month: string;
  year: number
  paid: boolean
}

const Account: React.FC<IProps> = ({ id, title, value, pay_day, payment_month, paid, year}) => {
  const [itPaid, setItPaid] = useState(paid)
  const [visible, setVisible] = useState(true)

  async function OnChangePaid(idAccount: string) {
    try {
      await api.put(`accounts/${idAccount}`)

      setItPaid(!itPaid)
    } catch (error) {
      ToastAndroid.show('Erro ao Atualizar, Verifique sua conexão!', ToastAndroid.LONG)
    }
  }

  async function handleDelete(idAccount: string) {
    try {
      await api.delete(`accounts/${idAccount}`)

      setVisible(false)

      ToastAndroid.show('Deletado com Sucesso', ToastAndroid.SHORT)
    } catch (error) {
      ToastAndroid.show('Erro ao Deletar, Verifique sua conexão!', ToastAndroid.LONG)
    }
  }

  return (
    <Container style={{ display: visible ? 'flex' : 'none'}}>
      <Content>
        <Date>
          <DateItem>{pay_day}</DateItem>
          <DateItem>{payment_month}</DateItem>
          <DateItem>{year}</DateItem>
        </Date>

        <Infos>
          <Title>{title}</Title>
          <TextValue>R$ {parseFloat(value).toFixed(2)}</TextValue>
        </Infos>
      </Content>

      <Wrapper>
        {itPaid ? <Paid>Pago</Paid> : <Paid>Não Pago</Paid>}
        <Switch
         thumbColor="#fff" 
         trackColor={{ false: '#ccc', true: '#39CC83' }}
         value={itPaid}
         onValueChange={() => OnChangePaid(id)}
      />
      </Wrapper>

      <DeleteView>
        <DeleteButton onLongPress={() => handleDelete(id)}>
          <Icon name='trash' color='#fff' size={20}/>
        </DeleteButton>
      </DeleteView>

    </Container>
  );
};

export default Account;
