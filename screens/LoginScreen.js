import {View, Text, StyleSheet, Button, TouchableOpacity, TextInput, Image,  } from "react-native";


const Separator = () => <View style={styles.separator} />;

export default function LoginScreen({navigation}){

return(

<View style={styles.container}>

<Separator />
<Image 
        //style={styles.Logo}
        //source={require('../assets/roi_logo.png')}
         />
<Text style={styles.text}>LOGIN</Text>
<Separator />
<TextInput 
           style={styles.input}
           placeholder="User Name"
        /> 
<TextInput 
           style={styles.input}
           placeholder="Password"
        /> 
<Separator />
<Separator />
<TouchableOpacity 
           
            onPress={() => navigation.navigate("Home")}
            style={styles.addButton}>
           <Text style={styles.addButtonText}> 
            Login
          </Text> 
          </TouchableOpacity> 


  <Image 
          style={styles.Footer}
          source={require('../assets/footer.png')}
         />
</View>

);

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 50,
      alignItems: "center",
      margin: '0%',
        
    },
    text: {
      color: '#941a1d',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'red',
    },
    addButton: { 
      backgroundColor: "#941a1d", 
      padding: 11, 
      borderRadius: 5, 
      marginBottom:10,
      width: '45%' 
    }, 
    addButtonText: { 
      color: "white", 
      fontWeight: "bold", 
      textAlign: "center", 
      fontSize: 18, 
      padding: 0, 
      justifyContent: 'space-between',
    }, 
    input: { 
      borderWidth: 1, 
      borderColor: "#ccc", 
      padding: 5, 
      marginBottom: 5, 
      borderRadius: 5, 
      fontSize: 24, 
      height: 40,
      width: '70%',
    }, 
    Logo: {
      width: 100,
      height: 50,
    },
      separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
 
    Footer: {
      position: 'absolute', 
      left: 0, 
      right: 0, 
      bottom: 0,
      height: 40,
      width:'100%'
  },

  Header: {
    position: 'absolute', 
    left: 0, 
    right: 0, 
    top: 0,
    bottom: 0,
    height: 40,
    width:'100%'
},
  });