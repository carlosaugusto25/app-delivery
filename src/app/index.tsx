import { CategoryButton } from '@/components/Category-Button'
import { Header } from '@/components/Header'
import { View, Platform, FlatList } from 'react-native'
import { CATEGORIES } from '@/utils/data/products'
import { useState } from 'react'

export default function Home() {
    
    const [category, setCategory] = useState(CATEGORIES[0])
    
    return (
        <View className={Platform.OS === 'android' ? 'flex-1 pt-8' : 'flex-1'}>
            <Header title='Cadápio' />

           <FlatList 
            data={CATEGORIES}
            keyExtractor={(item)=> item}
            renderItem={({item})=>(
                <CategoryButton 
                    title={item} 
                    isSelected={item === category} 
                    onPress={()=>setCategory(item)} 
                />
            )}
            horizontal
            className='max-h-10 mt-5'
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{gap:12,paddingHorizontal:20}}
           />
        </View>
    )
}