import React, { useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
} from 'react-native';

export default function Splash({ navigation }) {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login');
        }, 2000);
    }, []);

    return (
        <View style={styles.body} >
            <Image
                style={styles.logo}
                source={require('../assets/images/logo2.png')}
            />
            <Text
                style={[
                    styles.text
                ]}
            >
                Movies Collections
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#89CFF0',
    },
    logo: {
        width: 200,
        height: 50,
        margin: 5,
    },
    text: {
        fontSize: 40,
        color: '#ffffff',
    },
})