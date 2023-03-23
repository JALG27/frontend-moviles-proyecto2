import { StyleSheet, Text, View, StatusBar, TextInput, ScrollView} from 'react-native'
import React, { useState } from 'react'
import Bottomnavbar from '../../Components/Bottomnavbar'
import TopNavbar from '../../Components/TopNavbar'
import FollowersRandomPost from '../../Components/FollowersRandomPost'
import { Ionicons } from '@expo/vector-icons';
import { formHead, formHead2 } from '../../CommonCss/formcss'
import { searchbar } from '../../CommonCss/pagecss'
import UserCard from '../../Cards/UserCard';


const SearchUserPage = ({navigation}) => { 

    let data = [
        {
            username: "user1",
            profile_image: "https://picsum.photos/200/300"
        },
        {
            username: "Elon Musk",
            profile_image: "https://picsum.photos/200/300"
        },
        {
            username: "cocacola123",
            profile_image: "https://picsum.photos/200/300"
        },
        {
            username: "randompost123",
            profile_image: "https://picsum.photos/200/300"
        },
        {
            username: "postman123",
            profile_image: "https://picsum.photos/200/300"
        },
        {
            username: "pruebisima123",
            profile_image: "https://picsum.photos/200/300"
        },
        {
            username: "auser123",
            profile_image: "https://picsum.photos/200/300"
        },
        {
            username: "usuario123",
            profile_image: "https://picsum.photos/200/300"
        },
        {
            username: "superprueba123",
            profile_image: "https://picsum.photos/200/300"
        },
        

    ]

    const [keyword, setKeyword] = useState("")

    return(
    <ScrollView style={styles.container}>

    <Ionicons name="chevron-back-circle" size={24} color="white" style={styles.gohomeicon}
    onPress={() => navigation.navigate('MainPage')}
    />

    <View style={styles.c1}>
        <Text style={formHead2}>Buscar Usuario
        </Text>
        <TextInput style={styles.searchbar}
        placeholder="Buscar..."
        onChangeText={(text) => {
            setKeyword(text)

        }} />
        <ScrollView style={styles.userlists}>
            {
                data.filter(
                    (user) => {
                        if (keyword ==""){
                            return null
                        }
                        else if(user.username.toLowerCase().includes
                        (keyword.toLowerCase())) {
                            return user
                        }   
                    }
                ).map((item,index)=>{
                    return <UserCard key={item.username} user={item}/>
            })
        }
        </ScrollView>
    </View>       
    </ScrollView>
    )
}

export default SearchUserPage

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        paddingVertical: 50,
        
    },
    searchbar: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10,
        fontSize: 20,

    },
    c1: {
        width: '90%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 30,
        backgroundColor: 'black',
        alignSelf: 'center',
        borderRadius: 20,
        borderColor: 'gray',
        borderWidth: 1,
    },
    userlists: {
        width: '100%',
        marginTop: 20,
    }
})
