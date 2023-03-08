import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput} from 'react-native'
import React from 'react'
import { containerFull, goback, logo1, row } from '../../../CommonCss/pagecss'
import { Ionicons } from '@expo/vector-icons';
import logo from '../../../../assets/Logo.png'
import { formbtn, formHead2, formInput } from '../../../CommonCss/formcss';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Signup_AccountCreated = ({navigation}) => {
    return(
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
            <View style={row}>
            <MaterialCommunityIcons name="check-decagram" size={34} color="white" />
            <Text style={formHead2}> Cuenta creada con exito!</Text>

            </View>
            <Text style={formbtn}
            onPress={() => navigation.navigate('Login')}>
                Terminado
            </Text>
        </View>
    )
}

export default Signup_AccountCreated

const styles = StyleSheet.create({})