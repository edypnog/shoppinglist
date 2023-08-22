/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, TextInput, Button, FlatList } from 'react-native';
import ShoppingItem from './ShoppingItem'; // Import the ShoppingItem component
import { ShoppingItem as ShoppingItemType } from '../types'; // Import the ShoppingItem type
import styles from '../stylesheet';

interface Props {}

interface State {
  items: ShoppingItemType[];
  newItemName: string;
  editItemId: number | null;
  editItemName: string;
}

class ShoppingMarket extends Component<Props, State> {
  state: State = {
    items: [
      { id: 1, name: 'apple', completed: false, editing: false},
      { id: 2, name: 'banana', completed: false, editing: false},
      { id: 3, name: 'grape', completed: false, editing: false},
    ],
    newItemName: '',
    editItemId: null,
    editItemName: '',
  };

  // Handle input change
  handleNewItemNameChange = (text: string): void => {
    this.setState({ newItemName: text });
  };

  // ... your methods
  addItem = () => {
    const { newItemName, items } = this.state;

    if (newItemName.trim() !== '') {
      const newItem: ShoppingItemType = {
        id: items.length + 1,
        name: newItemName,
        completed: false,
        editing: false,
      };

      this.setState(prevState => ({
        items: [...prevState.items, newItem],
        newItemName: '',
      }));
    }
  };

  deleteItem = (id: number): void => {
    this.setState(prevState => ({
      items: prevState.items.filter(item => item.id !== id),
    }));
  };

  editItem = (id: number, newName: string): void => {
    this.setState(prevState => ({
      items: prevState.items.map(item =>
        item.id === id ? { ...item, name: newName, editing: true } : item
      ),
    }));
  };

  startEditing = (id: number, name: string): void => {
    this.setState(prevState => ({
      items: prevState.items.map(item =>
        item.id === id ? { ...item, editing: true } : item
      ),
      editItemId: id,
      editItemName: name,
    }));
  };

  cancelEditing = (id: number): void => {
    this.setState(prevState => ({
      items: prevState.items.map(item =>
        item.id === id ? { ...item, editing: false } : item
      ),
      editItemId: null,
      editItemName: '',
    }));
  };

  saveEditing = (id: number): void => {
    this.setState(prevState => ({
      items: prevState.items.map(item =>
        item.id === id
          ? { ...item, name: prevState.editItemName, editing: false }
          : item
      ),
      editItemId: null,
      editItemName: '',
    }));
  };

  toggleCompletion = (id: number): void => {
    this.setState(prevState => ({
      items: prevState.items.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      ),
    }));
  };

  renderItem = ({ item }: { item: ShoppingItemType }) => {
    return (
      <ShoppingItem
        item={item}
        onToggleCompletion={this.toggleCompletion}
        onDeleteItem={this.deleteItem}
        onStartEditing={this.startEditing}
        onCancelEditing={this.cancelEditing}
        onSaveEditing={this.saveEditing}
        editItemName={item.name}
      />
    );
  };

  render() {
    const { items, newItemName } = this.state;

    return (
        <View style={styles.container}>
            <FlatList
            data={items}
            renderItem={this.renderItem}
            keyExtractor={item => item.id.toString()}
            />
            <TextInput
            style={styles.input}
            placeholder="Enter new item"
            value={newItemName}
            onChangeText={this.handleNewItemNameChange}
            />
            <Button title="Add Item" onPress={this.addItem} />
        </View>
    );
  }
}

export default ShoppingMarket;
