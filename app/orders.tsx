import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const OrdersScreen = () => {
  const myOrders = [
    { id: 'Order #001', date: 'Oct 26, 2023', details: 'Floral Bloom (50ml)' },
    { id: 'Order #002', date: 'Oct 25, 2023', details: 'Midnight Musk (100ml)' },
    { id: 'Order #003', date: 'Oct 22, 2023', details: 'Ocean Mist (30ml)' },
  ];

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Recent Purchases</Text>

      <FlatList
        data={myOrders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.orderBox}>
            <Text style={styles.orderId}>{item.id}</Text>
            <Text style={styles.orderDate}>{item.date}</Text>
            <Text style={styles.orderDetails}>{item.details}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => Alert.alert('Action', 'Checking order status...')}
      >
        <Text style={styles.backText}>Check Status</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  orderBox: {
    backgroundColor: '#F9F9F9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#EEE',
  },
  orderId: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  orderDate: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  orderDetails: {
    fontSize: 14,
    color: '#444',
    marginTop: 8,
  },
  backButton: {
    backgroundColor: '#222',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 'auto', 
  },
  backText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default OrdersScreen;