import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { formHead2 } from '../../CommonCss/formcss';

const NewTweet = ({navigation}) => {
    return(
        <ScrollView style={styles.container}>

        <Ionicons name="chevron-back-circle" size={24} color="white" style={styles.gohomeicon}
        onPress={() => navigation.navigate('MainPage')}
        />

        <View style={styles.c1}>
            <Text style={formHead2}>Prueba
            </Text>
            <TextInput style={styles.searchbar}
            placeholder="Buscar" />
        </View>
            
        </ScrollView>
    )
}

export default NewTweet

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',

    },
    gohomeicon:{
        position: 'absolute',
        top: 15,
        left: 20,
        zIndex: 100,
        color: 'white',
        fontSize: 30,

    },
})