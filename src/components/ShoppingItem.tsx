/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native';
import { ShoppingItem as ShoppingItemType } from '../types'; // Import the ShoppingItem type
import styles from '../stylesheet'; // Import your styles

interface Props {
  item: ShoppingItemType;
  onToggleCompletion: (id: number) => void;
  onDeleteItem: (id: number) => void;
  onStartEditing: (id: number, name: string) => void;
  onCancelEditing: (id: number) => void;
  onSaveEditing: (id: number) => void;
  editItemName: string;
}

class ShoppingItem extends React.Component<Props> {
  render() {
    const {
      item,
      onToggleCompletion,
      onDeleteItem,
      onStartEditing,
      onCancelEditing,
      onSaveEditing,
    } = this.props;

    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={() => onToggleCompletion(item.id)}>
          <View style={[styles.item, item.completed && styles.completedItem]}>
            {!item.editing && <Text style={styles.itemText}>{item.name}</Text>}
          </View>
        </TouchableOpacity>
        {/* Render edit or action buttons */}
        {item.editing ? (
          <View style={styles.editContainer}>
            {/* <Text style={styles.originalItemName}>{item.name}</Text> */}
            <TextInput
              style={styles.editInput}
              // value={ item.name }
             onChangeText={text => onStartEditing(item.id, text)}
            />
            <View style={styles.editButtonContainer}>
                <Button title="Save" onPress={() => onSaveEditing(item.id)} />
                <Button title="Cancel" onPress={() => onCancelEditing(item.id)} />
            </View>
          </View>
        ) : (
          <View style={styles.buttonsContainer}>
            <Button title="Edit" onPress={() => onStartEditing(item.id, item.name)} />
            <Button title="Delete" onPress={() => onDeleteItem(item.id)} />
          </View>
        )}
      </View>
    );
  }
}

export default ShoppingItem;
