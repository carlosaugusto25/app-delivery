import { Header } from '@/components/Header'
import { View, Text, Platform } from 'react-native'

export default function Home(){
    return(
        <View className={Platform.OS === 'android' ? 'flex-1 pt-8' : 'flex-1'}>
            <Header title='Cadápio' />
        </View>
    )
}