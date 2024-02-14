import { CategoryButton } from '@/components/Category-Button'
import { Header } from '@/components/Header'
import { View, Platform, FlatList, SectionList, Text } from 'react-native'
import { CATEGORIES, MENU } from '@/utils/data/products'
import { useState } from 'react'
import { Product } from '@/components/Product'

export default function Home() {

    const [category, setCategory] = useState(CATEGORIES[0])

    return (
        <View className={Platform.OS === 'android' ? 'flex-1 pt-8' : 'flex-1'}>
            <Header title='Cadápio' />

            <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <CategoryButton
                        title={item}
                        isSelected={item === category}
                        onPress={() => setCategory(item)}
                    />
                )}
                horizontal
                className='max-h-10 mt-5 mb-5'
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
            />

            <SectionList 
                sections={MENU}
                keyExtractor={(item)=> item.id}
                stickySectionHeadersEnabled={false}
                renderItem={({item})=>(
                    <Product data={item} />
                )}
                renderSectionHeader={({section: {title}})=>(
                    <Text className='text-white text-xl font-heading mt-8 mb-3'>{title}</Text>
                )}
                className='flex-1 px-5'
                contentContainerStyle={{paddingBottom:100}}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}