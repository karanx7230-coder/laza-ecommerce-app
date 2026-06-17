import { Image, View } from 'react-native';
const Objects = () => {
    return (
        <View style={{ justifyContent: "center", }}>
            <Image
                source={require('../../assets/images/Object.png')}
                resizeMode='contain'
                style={{ height: 250, width: "80%", alignSelf: "center", }}
            />
        </View>
    );
}
export default Objects;