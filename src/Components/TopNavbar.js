import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import logo from '../../assets/Logo.png'
import { icon1, logo2 } from '../CommonCss/pagecss'
import { AntDesign } from '@expo/vector-icons';

const TopNavbar = () => {
    return(
        <View style={styles.container}>
            <Image source={logo} style={logo2} />
            <AntDesign name="pluscircleo" size={24} color="black" style={icon1} />
            
        </View>
    )
}

export default TopNavbar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
        position: 'absolute',
        top: 0,
        zIndex: 100,
        backgroundColor: "black"
    },
})