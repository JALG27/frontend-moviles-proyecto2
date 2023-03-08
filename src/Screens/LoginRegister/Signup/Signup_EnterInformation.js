import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput} from 'react-native'
import React from 'react'
import { containerFull, goback, logo1 } from '../../../CommonCss/pagecss'
import { Ionicons } from '@expo/vector-icons';
import logo from '../../../../assets/Logo.png'
import { formbtn, formHead2, formInput } from '../../../CommonCss/formcss';

const Signup_EnterInformation = ({navigation}) => {
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
            <Text style={formHead2}>Crea tu nueva cuenta</Text>
            <TextInput placeholder="Ingresa tu Nombre de Usuario" style={formInput} />
            <TextInput placeholder="Ingresa tu Email" style={formInput} />
            <TextInput placeholder="Ingresa tu Biografia" style={formInput} />
            <TextInput placeholder="Ingresa tu Password" style={formInput} secureTextEntry={true} />
            <TextInput placeholder="Confirmar Password" style={formInput} secureTextEntry={true} />

            <Text style={formbtn}
            onPress={() => navigation.navigate('Signup_AccountCreated')}>
                Siguiente
                </Text> 


        </View>
    )
}

export default Signup_EnterInformation

const styles = StyleSheet.create({})