import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, ActivityIndicator} from 'react-native'
import React, { useState } from 'react'
import { containerFull, goback, logo1 } from '../../../CommonCss/pagecss'
import { Ionicons } from '@expo/vector-icons';
import logo from '../../../../assets/Logo.png'
import { formbtn, formHead2, formInput } from '../../../CommonCss/formcss';

const Signup_EnterInformation = ({navigation}) => {
    const [email,setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const handleEmail = () => {
        setLoading(true)
        if(email == ''){
            alert('Porfavor ingresar email')
        }
        else{
            setLoading(true)
            fetch('http://10.0.2.2:3000/verify', {
                method: 'post',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    email: email
                })
            })
            .then(res => res.json()).then(
                data => {
                    if (data.error === 'Credenciales invalidas')
                    alert('Credenciales invalidas')
                    setLoading(false)
                }
            )
        }

        //navigation.navigate('Signup_AccountCreated')

    }
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
            <TextInput placeholder="Ingresa tus Nombres" style={formInput} 
            />
            <TextInput placeholder="Ingresa tus Apellidos" style={formInput} />
            <TextInput placeholder="Ingresa tu Nombre de Usuario" style={formInput} />
            <TextInput placeholder="Ingresa tu Email" style={formInput} 
            onChangeText={(text) =>{
                setEmail(text)
            }}
            />
            <TextInput placeholder="Ingresa tu Biografia" style={formInput} />  
            <TextInput placeholder="Ingresa tu Password" style={formInput} secureTextEntry={true} />
            <TextInput placeholder="Confirmar Password" style={formInput} secureTextEntry={true} />

            {
                loading ?
                <ActivityIndicator size="large" color="white"/>
                :
                <Text style={formbtn}
            onPress={() => handleEmail()}>
                Siguiente
                </Text> 
            }


        </View>
    )
}

export default Signup_EnterInformation

const styles = StyleSheet.create({})