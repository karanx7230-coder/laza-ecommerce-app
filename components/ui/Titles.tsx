import { Text,  View, Switch } from 'react-native';
import { Titlesstyles } from"@/src/Styles/Titlestyles";

type TitleProps = {
    title: string;
};

export const Title = ({ title }: TitleProps) => {
    return <Text style={Titlesstyles.title}>{title}</Text>;
};
export const Title2 = ({ title }: TitleProps) => {
    return <View style={Titlesstyles.line}>
        <Text numberOfLines={2} style={Titlesstyles.text1}>{title}</Text>
    </View>
};
type RememberProps = {
    value: boolean;
    change: () => void;
};
export const Remember = ({ value, change }: RememberProps) => {

    return (
        <View style={Titlesstyles.row}>
            <Text style={Titlesstyles.inputtitle}>Remember me </Text>
            <Switch
                trackColor={{ false: "grey", true: "blue" }}
                thumbColor="white"
                value={value}
                onValueChange={change}
            />
        </View>)
}
