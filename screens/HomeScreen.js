import {View, Text, StyleSheet, Button, TouchableOpacity, Image, Dimensions  } from "react-native";



export default function HomeScreen({navigation}){

return(

<View style={styles.container}>



  <Image 
          
          style={styles.header}
          source={require('../assets/footer.png')}
         />
<Text style={styles.headerText}>Welcome</Text>


 


<Text style={styles.text}>Contacts List</Text>
<TouchableOpacity 
           
            onPress={() => navigation.navigate("Contact")}
            style={styles.addButton}>
           <Text style={styles.addButtonText}> 
            Goto
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
        marginTop: 0,
        alignItems: "center",
        justifyContent: "center",
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
      marginBottom: 10, 
      width: '45%' 
    }, 
    addButtonText: { 
      color: "white", 
      fontWeight: "bold", 
      textAlign: "center", 
      fontSize: 14, 
      
    }, 
    header: {

      position: 'absolute', 
      left: 0, 
      right: 0, 
      top: 0,
      height: 40,
      width:40,
      width:'100%'
    },
    headerText: {

      position: 'absolute', 
      justifyContent: "center",
      top: 10,
  
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
      alignItems: "center",
    },
    Footer: {
      position: 'absolute', 
      left: 0, 
      right: 0, 
      bottom: 0,
      height: 40,
      width:'100%'
  },
  });