import { StyleSheet, Text, View } from "react-native"
// import { Dimensions } from 'react-native';
import { useWindowDimensions } from 'react-native';

// const { width, height } = Dimensions.get('window')

export const DimensionScreen = () => {

    const { width, height } = useWindowDimensions();

    return (
        <View>
            <View style={styles.container} >
                <View style={{
                    ...styles.purpleBox,
                    width: width * 0.6
                }}></View>
            </View>
            <Text style={styles.title}>w: {width}, h: {height} No se actualiza
            </Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: 400,
        height: 300,
        backgroundColor: 'pink',
    },
    title: {
        fontSize: 30,

    },
    purpleBox: {
        height: '50%',
        width: '50%',
        backgroundColor: '#5856D6',
    }
})