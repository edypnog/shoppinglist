/* eslint-disable prettier/prettier */
const axios = require('axios');

const BASE_URL = 'http://127.0.0.1:5000/api';

export const fetchItems = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/get_items`);
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    return [];
  }
};

export const addItem = async (text: string) => {
  try {
    await axios.post(`${BASE_URL}/add_item`, { text });
    console.log('Item added successfully');
  } catch (error) {
    console.error('Error adding item:', error);
  }
};

export const updateItem = async (itemId: number, newText: string) => {
  try {
    await axios.put(`${BASE_URL}/update_item/${itemId}`, { text: newText });
    console.log('Item edited successfully');
  } catch (error) {
    console.error('Error editing item:', error);
  }
};

export const deleteItem = async (itemId: number) => {
  try {
    await axios.delete(`${BASE_URL}/delete_item/${itemId}`);
    console.log('Item deleted successfully');
  } catch (error) {
    console.error('Error deleting item:', error);
  }
};
