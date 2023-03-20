import { StyleSheet, Text, View, Image, TextInput} from 'react-native'
import React from 'react'
import Logo from '../../../../assets/Logo.png'
import { containerFull, hr80, logo1 } from '../../../CommonCss/pagecss'
import { formbtn, formHead, formInput, formTextLinkCenter } from '../../../CommonCss/formcss'

const Login = ({ navigation }) => {
    return(
        <View style={containerFull}>
            <Text style={formHead}>Bienvenido a Twisgram</Text>
            <Image source={Logo} style={logo1} />
            <Text style={formHead}>Login</Text>
            <TextInput placeholder="Ingresa tu Email" style={formInput} />
            <TextInput placeholder="Ingresa tu Password" style={formInput} secureTextEntry={true}/>
            <Text style={formbtn} onPress={() => navigation.navigate('MainPage')}>Ingresar</Text>
            <View style={hr80}></View>
            <Text style={formTextLinkCenter}>
                No tienes una cuenta? <Text style={{ color: 'white' }}
                onPress={() => navigation.navigate('Signup_EnterInformation')}>
                    Registrate
                </Text>
            </Text>

            
        </View>
    )
}

export default Login

const styles = StyleSheet.create({})