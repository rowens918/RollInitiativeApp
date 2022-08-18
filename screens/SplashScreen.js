import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native';
import { Platform } from 'react-native';
import Logo from '../assets/images/logo';
import { SafeArea } from '../components/SafeArea';

const SplashScreen = () => {
  return ( 
    <SafeArea>
      <View style={styles.container}>
        <Text style={styles.title}>ROLL INITIATIVE</Text>
        <Logo />
        <StatusBar style="auto" />
      </View>
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 32,
    alignContent: 'center',
    paddingBottom: 36
  }
});

export default SplashScreen;
