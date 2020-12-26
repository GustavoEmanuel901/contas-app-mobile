import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 6px;
    border: 0.5px solid #333;
    background-color: #1E1E24;
`;

export const Content = styled.View`
    flex-direction: row;
`;

export const Date = styled.View`
    align-items: center;
`;

export const DateItem = styled.Text`
    font-size: 12px;
    color: #f5f5f5;
`

export const Infos = styled.View`
    align-items: flex-start;
    margin-left: 20px;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #f5f5f5;
`;

export const Value = styled.Text`
    margin-top: 5px;
    font-size: 14px;
    color: #f5f5f5;
`;

export const TextValue = styled.Text`
    color: #ff0000;
`;

export const DeleteView = styled.View``;

export const DeleteButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background-color: #02c3bd;
    align-items: center;
    justify-content: center;
`;

export const Wrapper = styled.View`
    align-items: center;
    justify-content: center;
`;

export const Paid = styled.Text`
    font-size: 14px;
    color: #f5f5f5;
`;
