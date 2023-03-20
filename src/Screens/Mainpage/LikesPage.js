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
            <View style={styles.c1}>
                <View style={styles.notification}>
                    <Text>Notificacion</Text>
                </View>
                <View style={styles.notification}>
                    <Text>Notificacion</Text>
                </View>
                <View style={styles.notification}>
                    <Text>Notificacion</Text>
                </View>
                <View style={styles.notification}>
                    <Text>Notificacion</Text>
                </View>
            </View>
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
        
    },
    c1: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    notification: {
        width: '100%',
        height: 50,
        backgroundColor: '#111111',
        marginTop: 10,

    }
})