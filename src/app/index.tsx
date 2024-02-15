import { CategoryButton } from '@/components/Category-Button'
import { Header } from '@/components/Header'
import { View, Platform, FlatList, SectionList, Text } from 'react-native'
import { CATEGORIES, MENU } from '@/utils/data/products'
import { useState, useRef } from 'react'
import { Product } from '@/components/Product'
import { Link } from 'expo-router'

export default function Home() {

    const [category, setCategory] = useState(CATEGORIES[0]);

    const sectionListRef = useRef<SectionList>(null)

    function handleCategorySelect(categorySelected:string){
        setCategory(categorySelected)

        const sectionIndex = CATEGORIES.findIndex((cat)=>cat===categorySelected)

        if(sectionListRef.current){
            sectionListRef.current.scrollToLocation({
                animated: true,
                sectionIndex,
                itemIndex: 0
            })
        }
    }

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
                        onPress={() => handleCategorySelect(item)}
                    />
                )}
                horizontal
                className='max-h-10 mt-5 mb-5'
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
            />

            <SectionList 
                ref={sectionListRef}
                sections={MENU}
                keyExtractor={(item)=> item.id}
                stickySectionHeadersEnabled={false}
                renderItem={({item})=>(
                    <Link href={`/product/${item.id}`} asChild>
                        <Product data={item} />
                    </Link>
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