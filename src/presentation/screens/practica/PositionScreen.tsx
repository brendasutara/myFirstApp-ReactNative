import { View, Text, StyleSheet } from 'react-native'

export const PositionScreen = () => {
    return (
        <View style={styles.container} >
            <View style={styles.pinkBox} />
            <View style={styles.purpleBox} />
            <View style={styles.orangeBox} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    title: {
        fontSize: 30,
        borderWidth: 10,
        paddingHorizontal: 30,
        paddingVertical: 10,
    },
    purpleBox: {
        height: 100,
        width: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0
    },
    orangeBox: {
        height: 100,
        width: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: 0,
        right: 0
    },
    pinkBox: {
        // height: 100,
        // width: 100,
        backgroundColor: 'pink',
        borderWidth: 10,
        borderColor: 'white',
        // position: 'absolute',
        // bottom: 0,
        // right: 0,
        // left: 0,
        // top: 0,
        ...StyleSheet.absoluteFillObject
    },
})