import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, ActivityIndicator} from 'react-native'
import React, { useState } from 'react'
import { containerFull, goback, logo1 } from '../../../CommonCss/pagecss'
import { Ionicons } from '@expo/vector-icons';
import logo from '../../../../assets/Logo.png'
import { formbtn, formHead2, formHead3, formInput } from '../../../CommonCss/formcss';

const Signup_EnterVerificationCode = ({navigation}) => {
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
            <Text style={formHead3}>El codigo de verificacion fue enviado a tu Email</Text>
            <TextInput placeholder="Ingresa el codigo de 6 digitos" style={formInput} />
            <Text style ={formbtn}
            onPress={() => navigation.navigate
                ('Signup_ChooseUsername')}
                >
                    Siguiente
                </Text>
        </View>
    )
}

export default Signup_EnterVerificationCode

const styles = StyleSheet.create({})