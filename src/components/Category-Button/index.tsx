import clsx from "clsx";
import { Text, Pressable, PressableProps } from "react-native";

interface PropsCategory extends PressableProps {
    title: string;
    isSelected?: boolean;
}

export function CategoryButton({ title, isSelected, ...rest }: PropsCategory) {
    return (
        <Pressable className={clsx("bg-slate-700 px-4 justify-center rounded-md h-10",
        isSelected && "border-2 border-red-default")} {...rest}>
            <Text className="text-slate-100 font-subtitle text-sm">
                {title}
            </Text>
        </Pressable>
    )
}