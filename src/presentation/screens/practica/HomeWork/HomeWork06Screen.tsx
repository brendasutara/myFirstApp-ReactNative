import { StyleSheet, View } from 'react-native'

export const HomeWork06Screen = () => {
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
    },
    box: {
        width: '100%',
        height: 100,
        borderWidth: 5,
        borderColor: 'white'
    },
    purpleBox: {
        flex: 1,
        backgroundColor: '#5856D6',
    },
    orangeBox: {
        flex: 2,
        backgroundColor: '#F0A23B',
    },
    blueBox: {
        flex: 3,
        backgroundColor: '#28c4d9',
    },
})
