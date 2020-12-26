import React, { useState } from 'react';

import { Container, Input, InputBlock, Label, RegisterButton, ShowDataPicker, SwitchContainer } from './styles';

import DateTimePicker from '@react-native-community/datetimepicker';
import { Alert, Switch, ToastAndroid } from 'react-native';
import api from '../../services/api';

const Register: React.FC = () => {

  const [title, setTitle] = useState('')
  const [value, setValue] = useState('')
  const [date, setDate] = useState(new Date())
  const [paid, setPaid] = useState(false)

  const [show, setShow] = useState(false)
  const [formatValue, setFormatValue] = useState<string | null>(null)

  const onChangeDate = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShow(false)
  };

  const handleRegister = async () => {
    try {
      const dateString = date.toDateString()
      const ArrayDate = dateString.split(' ')

      if(title === '' || value === '' ) return Alert.alert('Preencha Todos os campos')

      if(value.indexOf(',')) {
        const format = value.replace(',', '.')
        setFormatValue(format)
      }
      
      const data = {
        title,
        value: formatValue ? parseFloat(formatValue) : parseFloat(value),
        payment_month: ArrayDate[1].toUpperCase(),
        pay_day: Number(ArrayDate[2]),
        year: Number(ArrayDate[3]),
        paid
      }

      await api.post('accounts', data)

      ToastAndroid.show('Cadastrado com Sucesso', ToastAndroid.SHORT)

      setTitle('')
      setValue('')
      setDate(new Date())
      setPaid(false)
    } catch (error) {
      ToastAndroid.show('Falha ao Cadastrar, Verifique a Conexão!', ToastAndroid.LONG)
    }
  }

  return (
    <Container>

      <InputBlock>
        <Label>Nome da Conta</Label>
        <Input
          value={title}
          onChangeText={setTitle}
        />
    
        <Label>Valor a Pagar</Label>
        <Input
          keyboardType='decimal-pad'
          value={value}
          onChangeText={setValue}
        />
  
        <Label>Selecione uma Data</Label>
        <ShowDataPicker onPress={() => setShow(!show)}>
          <Label style={{ color: '#000' }}>{date.toString()}</Label>
        </ShowDataPicker>
      

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode='date'
            is24Hour={true}
            display="default"
            onChange={onChangeDate}
          />
        )}

      <SwitchContainer>
        <Label style={{color: '#000'}}>Está pago?</Label>

        <Switch
          thumbColor="#fff" 
          trackColor={{ false: '#ccc', true: '#39CC83' }}
          value={paid}
          onValueChange={setPaid}
        />
      </SwitchContainer>

      <RegisterButton onPress={handleRegister}>
        <Label style={{ color: '#fff', fontWeight: 'bold' }}>Cadastrar</Label>
      </RegisterButton>

      </InputBlock>
    </Container>
  );
};

export default Register;
