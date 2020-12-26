import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: column;
    background-color: #1E1E24;
    flex: 1;
`;

export const InputBlock = styled.View`
    flex-direction: column;
    align-items: flex-start;
    padding: 5px 10px;
    justify-content: center;
`;

export const Label = styled.Text`
    color: #f5f5f5;
    margin-top: 10px;
    margin-bottom: 8px;
`;

export const Input = styled.TextInput`
    background-color: #fff;
    border: 1px #d3e2e6;
    border-radius: 4px;
    padding: 0 10px;
    width: 100%;
    height: 50px;
`;

export const ShowDataPicker = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    background-color: #fff;
    align-items: center;
    padding-left: 10px;
    justify-content: flex-start;
    flex-direction: row;
    border-radius: 4px;
    /* margin-top: 15px; */
`;

export const SwitchContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    padding: 5px 10px;
    background-color: #fff;
    margin-top: 15px;
    border-radius: 4px;
`;

export const RegisterButton = styled.TouchableOpacity`
    background-color: #02c3bd;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    height: 56px;
    margin-top: 15px;
    width: 100%;
`;