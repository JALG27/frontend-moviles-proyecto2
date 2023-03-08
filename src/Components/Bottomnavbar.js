import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { icon1 } from '../CommonCss/pagecss';

const Bottomnavbar = () => {
    return(
        <View style={styles.container}>
            <Entypo name="home" size={24} color="black" style={icon1}/>
            <FontAwesome name="search" size={24} color="black" style={icon1}/>
            <AntDesign name="heart" size={24} color="black" style={icon1}/>
            <FontAwesome name="user-circle" size={24} color="black" style={icon1}/>
        </View>
    )
}

export default Bottomnavbar

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'black',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        zIndex: 100,
        borderTopWidth: 1,
        paddingVertical: 10,
    }
})