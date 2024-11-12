import { StyleSheet, View } from 'react-native'

export const HomeWork01Screen = () => {
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
        flexDirection: 'column'
    },
    box: {
        width: 100,
        height: 100,
        borderWidth: 5,
        borderColor: 'white'
    },
    purpleBox: {
        backgroundColor: '#5856D6',
    },
    orangeBox: {
        flex: 1,
        backgroundColor: '#F0A23B',
        alignItems: 'stretch',

    },
    blueBox: {
        backgroundColor: '#28c4d9',
    },
})
