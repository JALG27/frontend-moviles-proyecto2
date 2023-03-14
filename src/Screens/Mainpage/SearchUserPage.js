import { StyleSheet, Text, View, StatusBar, TextInput} from 'react-native'
import Bottomnavbar from '../../Components/Bottomnavbar'
import TopNavbar from '../../Components/TopNavbar'
import FollowersRandomPost from '../../Components/FollowersRandomPost'
import { formHead } from '../../CommonCss/formcss'
import { searchbar } from '../../CommonCss/pagecss'


const SearchUserPage = ({navigation}) => { 
    return(
        <View style={styles.container}>
            <StatusBar />
            <TopNavbar navigation={navigation} />
            <Bottomnavbar navigation={navigation} page={"SearchUserPage"}/>
            

            <TextInput placeholder="Buscar Usuario.." style={searchbar} />
        </View>
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

    }
})
