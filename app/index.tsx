import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, Image, ScrollView, 
  FlatList, TouchableOpacity, Modal, Button, 
  Alert, KeyboardAvoidingView, Platform 
} from 'react-native';
import { useRouter } from 'expo-router';
import SearchBar from '../components/SearchBar';

export default function HomeScreen() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  const myPerfumes = [
    { id: '1', name: 'Floral Bloom', price: '₱1,200' },
    { id: '2', name: 'Ocean Mist', price: '₱950' },
    { id: '3', name: 'Midnight Musk', price: '₱1,500' },
    { id: '4', name: 'Vanilla Dream', price: '₱1,350' },
  ];

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.headerTitle}>Luxe Fragrance</Text>

        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500' }} 
          style={styles.banner} 
        />

        <View style={styles.navArea}>
          <TouchableOpacity 
            style={styles.orderBtn} 
            onPress={() => router.push('/orders')}
          >
            <Text style={{color: 'white', fontWeight: 'bold'}}>Go to Orders</Text>
          </TouchableOpacity>
        </View>

        <SearchBar />

        <Text style={styles.sectionLabel}>Available Fragrances</Text>

        <FlatList 
          data={myPerfumes}
          numColumns={2} 
          keyExtractor={item => item.id}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.pName}>{item.name}</Text>
              <Text style={styles.pPrice}>{item.price}</Text>
            </View>
          )}
          columnWrapperStyle={styles.row}
          contentContainerStyle={{ paddingHorizontal: 10 }}
        />

        <View style={styles.footer}>
          <Button 
            title="Show Modal" 
            onPress={() => setModalVisible(true)} 
            color="#D4AF37"
          />
        </View>

        <Modal visible={modalVisible} transparent={true} animationType="fade">
          <View style={styles.overlay}>
            <View style={styles.modalBox}>
              <Text style={styles.modalText}>This is a modal</Text>
              <Button 
                title="Close" 
                onPress={() => {
                  setModalVisible(false);
                  Alert.alert("Notice", "Modal is now closed!");
                }} 
              />
            </View>
          </View>
        </Modal>

        <View style={{height: 40}} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF', paddingTop: 40 },
  headerTitle: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginTop: 20, 
    marginBottom: 20 
  },
  banner: { 
    width: '90%', 
    height: 180, 
    alignSelf: 'center', 
    borderRadius: 15 
  },
  navArea: { 
    paddingHorizontal: 20, 
    marginTop: 30, 
    marginBottom: 10 
  },
  orderBtn: { 
    backgroundColor: '#000', 
    padding: 15, 
    borderRadius: 10, 
    alignItems: 'center' 
  },
  sectionLabel: { 
    fontSize: 18, 
    fontWeight: '600', 
    marginLeft: 20, 
    marginTop: 15,
    marginBottom: 10 
  },
  row: { 
    justifyContent: 'space-between', 
    paddingHorizontal: 10 
  },
  card: { 
    backgroundColor: '#F9F9F9', 
    width: '46%', 
    paddingVertical: 35, 
    marginVertical: 10, 
    borderRadius: 12, 
    borderWidth: 1, 
    borderColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pName: { 
    fontSize: 15, 
    fontWeight: 'bold', 
    textAlign: 'center' 
  },
  pPrice: { 
    fontSize: 14, 
    color: '#D4AF37', 
    marginTop: 5 
  },
  footer: { 
    padding: 20,
    marginTop: 10 
  },
  overlay: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'rgba(0,0,0,0.5)' 
  },
  modalBox: { 
    backgroundColor: 'white', 
    padding: 30, 
    borderRadius: 15, 
    alignItems: 'center', 
    width: '70%' 
  },
  modalText: { 
    fontSize: 18, 
    marginBottom: 20 
  }
});