
import React, { useState } from "react"; 
import { 
  View, 
  Text,
  Image, 
  TextInput, 
  TouchableOpacity, 
  FlatList, 
  StyleSheet,
  Alert, 
} from "react-native"; 


export default function ContactScreen(){

 
  //const ContactsList = ({}) => { 
    const [contact, setContact] = useState(""); 
    const [contact2, setContact2] = useState("");
    const [contact3, setContact3] = useState(""); 
    const [contact4, setContact4] = useState("");  
    const [contacts, setTasks] = useState([
      "John Smith \nPH: 02 9988 2211 \n1 Code Lane Javaville NSW 0100 \nDEPT: Information Communications Technology ", 
      "Sue White  \nPH: 03 8899 2255 \n16 Bit Way Byte Cove QLD 1101 \nDEPT: Finance ", 
      "Bob O’Bits  \nPH: 05 7788 2255 \n8 Silicon Road Cloud Hills VIC 1001 \nDEPT: Marketing",
      "Mary Blue  \nPH: 06 4455 9988 \n4 Processor Boulevard Appletson NT 1010 \nDEPT: Finance "
    ]); 
    const [editIndex, setEditIndex] = useState(-1); 
  
    const handleAddContact = () => { 
      if (contact) { 
        if (editIndex !== -1) { 
          // Edit existing task 
          const updatedTasks = [...contacts]; 
          updatedTasks[editIndex] = contact; 
          setTasks(updatedTasks); 
          setEditIndex(-1); 
        } else { 
          // Add new task 
          setTasks([...contacts, contact + "\n" + "PH: " + contact2 + "\n" + contact3 + "\n" + "DEPT: " + contact4]); 
        } 
        setContact(""); 
        setContact2(""); 
        setContact3(""); 
        setContact4(""); 
      } 
    }; 
  
    const handleEditContact = (index) => { 
      const taskToEdit = contacts[index]; 
      setContact(taskToEdit); 
      setEditIndex(index); 
    }; 
  
    const handleDeleteContact = (index) => { 
  
      return Alert.alert(
        'Are you sure?',
        'Are you sure you want to remove this task?',
        [
          // The "No" button
          {
          text: 'No',
          },
          // The "Yes" button
          {
          text: 'Yes',
          onPress: () => {
            const updatedTasks = [...contacts];
            updatedTasks.splice(index, 1); 
            setTasks(updatedTasks); 
          },
          },
        ]
        );
      };
  
    const renderItem =  ({ item, index }) => ( 
      <View style={styles.task}> 
        <Text 
          style={styles.itemList}>{item}</Text> 
        <View 
          style={styles.taskButtons}> 
          <TouchableOpacity 
            onPress={() => handleEditContact(index)}> 
            <Image 
            style={styles.Icon}
            source={require('../assets/edit_icon.png')}
             />
           
             
          </TouchableOpacity> 
          <TouchableOpacity 
            onPress={() => handleDeleteContact(index)}>
            <Image 
            style={styles.Icon}
            source={require('../assets/bin_icon.png')}
            /> 
            
          </TouchableOpacity> 
        </View> 
      </View> 
    ); 
  
    return ( 
      <View style={styles.container}> 
        
        <Image 
        style={styles.Logo}
        source={require('../assets/roi_logo.png')}
         />
      
        <Text style={styles.title}>Contacts</Text> 
        <TextInput 
          style={styles.input} 
          placeholder="Name"
          value={contact} 
          onChangeText={(text) => setContact(text)} 
        /> 
        <TextInput 
          style={styles.input} 
          placeholder="Phone"
          value={contact2} 
          onChangeText={(text) => setContact2(text)} 
        /> 
        <TextInput 
          style={styles.input} 
          placeholder="Address"
          value={contact3} 
          onChangeText={(text) => setContact3(text)} 
        /> 
        <TextInput 
          style={styles.input} 
          placeholder="Department"
          value={contact4} 
          onChangeText={(text) => setContact4(text)} 
        /> 
        <TouchableOpacity 
          style={styles.addButton} 
          onPress={handleAddContact}> 
          <Text style={styles.addButtonText}> 
            {editIndex !== -1 ? "Update Contact" : "Add Contact"} 
          </Text> 
        </TouchableOpacity> 
        <FlatList 
          data={contacts} 
          renderItem={renderItem} 
          keyExtractor={(item, index) => index.toString()} 
        /> 
      </View> 
    ); 
  }; 
  
  const styles = StyleSheet.create({ 
    container: { 
      flex: 1, 
      padding: 20, 
      marginTop: 0,
      margin: '4%',
      
      
    }, 
    title: { 
      fontSize: 22, 
      fontWeight: "bold", 
      marginBottom: 20,
      color: "#262626",
      
    }, 
    heading: { 
      fontSize: 30, 
      fontWeight: "bold", 
      marginBottom: 7, 
      color: "#941a1d",
      
    }, 
    input: { 
      borderWidth: 1, 
      borderColor: "#ccc", 
      padding: 5, 
      marginBottom: 5, 
      borderRadius: 5, 
      fontSize: 14, 
      height: 30,
    }, 
    addButton: { 
      backgroundColor: "#941a1d", 
      padding: 10, 
      borderRadius: 5, 
      marginBottom: 10, 
    }, 
    addButtonText: { 
      color: "white", 
      fontWeight: "bold", 
      textAlign: "center", 
      fontSize: 18, 
    }, 
    task: { 
      flexDirection: "row", 
      justifyContent: "space-between", 
      alignItems: "center", 
      marginBottom: 15, 
      fontSize: 18, 
      
    }, 
    itemList: { 
      fontSize: 14, 
    }, 
    taskButtons: { 
      flexDirection: "row", 
    }, 
    editButton: { 
      marginRight: 10, 
      color: "green", 
      fontWeight: "bold", 
      fontSize: 18, 
    }, 
    deleteButton: { 
      color:  "#cb6d4f" , 
      fontWeight: "bold", 
      fontSize: 18, 
    }, 
    Logo: {
      width: 100,
      height: 50,
      },
    Icon: {
      width: 25,
      height: 25,
      },
      
  }); 