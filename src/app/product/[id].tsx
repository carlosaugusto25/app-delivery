import { Image, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { PRODUCTS } from "@/utils/data/products";
import { FormatCurrency } from "@/utils/functions/format-currency";
import { Button } from "@/components/Button";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import { LinkButton } from "@/components/LinkButton";

export default function Product() {

    const { id } = useLocalSearchParams()

    const product = PRODUCTS.filter(item => item.id === id)[0]

    return (
        <View className="flex-1">
            <Image source={product.cover} className="w-full h-52" resizeMode="cover" />

            <View className="p-5 mt-4 flex-1">
                <Text className="text-red-default text-2xl font-heading my-2">
                    {FormatCurrency(product.price)}
                </Text>
                <Text className="text-slate-400 font-body text-base leading-6 mb-6">
                    {product.description}
                </Text>
                {
                    product.ingredients.map((ingredient, index) => (
                        <View key={index} className="flex-row items-center">
                            <Text className="text-slate-400 font-body text-base leading-6">
                                {"\u2022"}
                            </Text>
                            <Text className="text-slate-400 font-body text-base leading-6 ml-2">
                                {ingredient}
                            </Text>
                        </View>
                    ))
                }
            </View>
            <View className="p-5 pb-8 gap-5">
                <Button>
                    <Button.Icon>
                        <Feather name='plus-circle' size={20} color={colors.white} />
                    </Button.Icon>
                    <Button.Text>
                        Adicionar ao pedido
                    </Button.Text>
                </Button>

                <LinkButton title="Voltar ao cardápio" href="/" />
            </View>
        </View>
    )
}