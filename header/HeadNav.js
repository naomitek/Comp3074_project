import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

const HeadNav = ({ navigation }) => {
  return (
    <View style={styles.header}>
      {/* Home Icon */}
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <FontAwesome name="home" size={24} color="#333" style={styles.icon} />
      </TouchableOpacity>

      {/* Navigation Text */}
      <View style={styles.navOptions}>
        <TouchableOpacity onPress={() => navigation.navigate('ItemList', { category: 'SELL' })}>
          <Text style={styles.navText}>SELL</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ItemList', { category: 'LEND' })}>
          <Text style={styles.navText}>LEND</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ItemList', { category: 'TRADE' })}>
          <Text style={styles.navText}>TRADE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ItemList', { category: 'FOUND' })}>
          <Text style={styles.navText}>FOUND</Text>
        </TouchableOpacity>
      </View>

      {/* Right Icons */}
      <View style={styles.rightIcons}>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Ionicons name="search" size={24} color="#333" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CreatePost')}>
          <MaterialIcons name="add-box" size={24} color="#FF4081" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ProfilePage')}>
          <Ionicons name="person-circle" size={24} color="#8A2BE2" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
      flexDirection: 'row', 
      alignItems: 'center',
      justifyContent: 'space-between', 
      backgroundColor: '#FFFFFF',
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: '#DDDDDD',
    },
    navItem: {
      paddingHorizontal: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    navOptions: {
      flexDirection: 'row',
      justifyContent: 'space-between', 
      flex: 1,
      marginHorizontal: 16, 
    },
    navOption: {
      marginHorizontal: 8, 
    },
    navText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
    },
    rightIcons: {
      flexDirection: 'row', 
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });

export default HeadNav;
