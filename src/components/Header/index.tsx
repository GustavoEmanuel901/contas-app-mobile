import React from 'react'
import { View } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

import { Container, Title } from './styles'

interface HeaderProps {
    title: string;
    showCancel?: boolean,
}

export default function Header({ title, showCancel = true }: HeaderProps) {
    const navigation = useNavigation()

    return (
        <Container>
            <BorderlessButton onPress={navigation.goBack}>
                <Icon name='arrow-left' size={24} color='#15b6d6'/>
            </BorderlessButton>

            <Title>{title}</Title>

            {showCancel ? (
                <BorderlessButton onPress={navigation.goBack}>
                    <Icon name='x' size={24} color='#ff669d'/>
                </BorderlessButton>
            ) : (
                <View/>
            )}
        </Container>
    )
}

