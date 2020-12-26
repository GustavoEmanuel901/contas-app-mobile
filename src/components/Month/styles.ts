import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #1E1E24;
    border: 1px solid #333;
`;

export const Name = styled.Text`
    font-size: 16px;
    color: #f5f5f5;
`;

export const Circle = styled.TouchableOpacity`
    height: 50px;
    width: 50px;
    border-radius: 25px;
    background-color: #333;
    align-items: center;
    justify-content: center;
`;