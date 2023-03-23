import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, ActivityIndicator} from 'react-native'
import React, { useState } from 'react'
import { containerFull, goback, logo1 } from '../../../CommonCss/pagecss'
import { Ionicons } from '@expo/vector-icons';
import logo from '../../../../assets/Logo.png'
import { formbtn, formHead2, formHead3, formInput } from '../../../CommonCss/formcss';

const Signup_ChooseUsername = ({navigation}) => {
    return (
        <View style={containerFull}>
            <TouchableOpacity onPress={() => navigation.navigate("Login")} style={goback}>
            <Ionicons name="arrow-back" size={28} color="gray" />
                <Text style={{
                    color: 'gray',
                    fontSize: 16,
                    marginLeft: 5,
                    fontWeight: 'bold'
                }}>
                    Atras
                </Text>
            </TouchableOpacity>
            
            <Image source={logo} style={logo1} />
            <Text style={formHead2}>Ingresa tu Username</Text>
            <TextInput placeholder="Ingresa tu Username" style={formInput} />
            <Text style ={formbtn}
            onPress={() => navigation.navigate
                ('Signup_ChoosePassword')}
                >
                    Siguiente
                </Text>
        </View>
    )
}

export default Signup_ChooseUsername

const styles = StyleSheet.create({})