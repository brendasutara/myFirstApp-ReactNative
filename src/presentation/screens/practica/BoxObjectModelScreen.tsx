import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>BoxObjectModelScreen</Text> */}
            <View style={styles.purpleBox}>
                <Text style={{ color: 'white' }} > Hola mundo</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
    },
    title: {
        fontSize: 30,
        borderWidth: 10,
        paddingHorizontal: 30,
        paddingVertical: 10,
    },
    purpleBox: {
        height: 30,
        backgroundColor: 'purple',
        marginHorizontal: 20,
        marginVertical: 50,
        padding: 5
    }
})