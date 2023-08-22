/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 16,
    },
    input: {
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      padding: 8,
      marginBottom: 8,
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      paddingVertical: 10,
    },
    item: {
      flex: 1,
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
    },
    completedItem: {
      backgroundColor: '#e0e0e0',
    },
    itemText: {
      fontSize: 16,
    },
    buttonsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    // Style for the container of the edit mode
    editContainer: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'row', // Arrange items vertically
    },

    // Style for the original item name
    originalItemName: {
      marginBottom: 5, // Add some space between the original name and the input
    },

    // Style for the container of the edit buttons
    editButtonContainer: {
      flexDirection: 'row', // Arrange items horizontally
      justifyContent: 'space-between', // Space evenly between items
      gap: 10,
      marginTop: 5, // Add some space between the input and the buttons
    },
    editInput: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      padding: 4,
      marginRight: 8,
      marginTop: 8,
    },
  });
export default styles;
