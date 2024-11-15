import { StyleSheet, View } from 'react-native'

export const HomeWork09Screen = () => {
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
        top: 100
    },
    orangeBox: {
        backgroundColor: '#F0A23B',
        left: 100
    },
    blueBox: {
        backgroundColor: '#28c4d9',
    },
})
