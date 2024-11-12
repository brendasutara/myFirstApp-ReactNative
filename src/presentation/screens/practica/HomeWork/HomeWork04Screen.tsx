import { StyleSheet, View } from 'react-native'

export const HomeWork04Screen = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.box, styles.purpleBox]} />
            <View style={[styles.box, styles.orangeBox]} />
            <View style={[styles.box, styles.blueBox]} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425b',
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        width: 100,
        height: 100,
        borderWidth: 5,
        borderColor: 'white'
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        position: 'absolute',
        right: 0,
        top: 0
    },
    orangeBox: {
        backgroundColor: '#F0A23B',

    },
    blueBox: {
        backgroundColor: '#28c4d9',
        position: 'absolute',
        bottom: 0,
        left: 0
    },
})
