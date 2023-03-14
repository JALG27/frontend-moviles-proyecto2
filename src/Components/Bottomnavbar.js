import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { icon1 } from '../CommonCss/pagecss';

const Bottomnavbar = ({navigation, page}) => {
    console.log(page)
    return(
        <View style={styles.container}>
            {
                page === 'MainPage' ?
                <Entypo name="home" size={24} color="black" style={styles.activeicon1}
            

            onPress={() => navigation.navigate('MainPage')}
            />
                :
                <Entypo name="home" size={24} color="black" style={icon1}
            

            onPress={() => navigation.navigate('MainPage')}
            />
            }
        {
                page === 'SearchUserPage' ?
                <FontAwesome name="search" size={24} color="black" style={styles.activeicon1}
            
            onPress={() => navigation.navigate('SearchUserPage')}
            />
            :
            <FontAwesome name="search" size={24} color="black" style={icon1}
            
            onPress={() => navigation.navigate('SearchUserPage')}
            />
        }
        {
            page === 'LikesPage' ?
            <AntDesign name="heart" size={24} color="black" style={styles.activeicon1}
            
            onPress={() => navigation.navigate('LikesPage')}
            />
            :
            <AntDesign name="heart" size={24} color="black" style={icon1}
            
            onPress={() => navigation.navigate('LikesPage')}
            />
        }
        {
                page === 'My_UserPorfile' ?
                <FontAwesome name="user" size={24} color="black" style={styles.activeicon1}
            
            onPress={() => navigation.navigate('My_UserProfile')}
            />
            :
            <FontAwesome name="user" size={24} color="black" style={icon1}
            
            onPress={() => navigation.navigate('My_UserProfile')}
            />
        }
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
        alignItems: 'center',
    },
    activeicon1: {
        backgroundColor: 'white',
        borderRadius: 50,
        fontSize: 30,
        padding: 10,
    }
})