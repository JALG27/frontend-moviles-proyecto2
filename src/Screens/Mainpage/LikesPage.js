import { StyleSheet, Text, View, StatusBar} from 'react-native'
import Bottomnavbar from '../../Components/Bottomnavbar'
import TopNavbar from '../../Components/TopNavbar'
import FollowersRandomPost from '../../Components/FollowersRandomPost'
import { formHead } from '../../CommonCss/formcss'


const LikesPage = ({navigation}) => {
    return(
        <View style={styles.container}>
            <StatusBar />
            <TopNavbar navigation={navigation} />
            <Bottomnavbar navigation={navigation} page={"LikesPage"} />
            <Text style={formHead}>Tus Likes</Text>
        </View>
    )
}

export default LikesPage

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        paddingVertical: 50,
        
    }
})