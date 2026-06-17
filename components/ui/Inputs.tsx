import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
interface InputProps extends TextInputProps {
    title: string;
}
export const Input = ({ title, ...props }: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View>
            <Text style={style.inputtitle}>{title}</Text>
            <View
                style={[
                    style.inputview,
                    { borderBottomColor: isFocused ? "blue" : "#8585856b" },
                ]}
            >
                <TextInput
                    style={style.input}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    {...props}
                />
            </View>
        </View>
    )
};
 const style = StyleSheet.create({
    inputview: {
        borderWidth: 2,
        borderColor: "white",
        height: 60,
        width: "95%",
        marginHorizontal: 10,
        backgroundColor: "#ffffff",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    inputtitle: {
        color: "#3b3b3b",
        fontSize: 15,
        marginLeft: 20,
        marginTop: 10,
    },
    input: {
        width: "90%",
    },
});