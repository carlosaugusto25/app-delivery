import { Image, Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons'
import colors from "tailwindcss/colors";

interface PropsHeader {
    title: string;
    quantityItensCart?: number;
}

export function Header({ title, quantityItensCart = 0 }: PropsHeader) {

    return (
        <View className="flex-row items-center justify-between border-b border-slate-700 pb-5 mx-5">
            <Image source={require('@/assets/logo.png')} className="w-16 h-14" />
            <Text className="text-white text-xl font-heading mt-2">{title}</Text>
            {
                quantityItensCart > 0 ?
                    <TouchableOpacity className="relative">
                        <View className="bg-red-default h-4 w-4 rounded-full items-center justify-center
                    top-2 z-10 -right-3.5">
                            <Text className="text-default font-bold text-xs">{quantityItensCart}</Text>
                        </View>
                        <Feather name='shopping-bag' color={colors.white} size={26} />
                    </TouchableOpacity>
                    :
                    <View className="bg-default w-14 h-14" />
            }

        </View>
    )
}

//flex-row = flex-direction: row
//items-center= align-items: center
//border-b = border-bottom: 1px
//border-slate-700 = border-color: slate-700
//pb-5 = padding-bottom: 20px
//mx-5 = margin-horizontal: 20px