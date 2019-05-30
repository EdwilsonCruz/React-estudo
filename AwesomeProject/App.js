import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView } from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
			<Text style={styles.primeiro}>Primeiro passo com React! </Text>
		</View>		
		<View>
			<Text style={styles.segundo}>Segundo passo com React! </Text>
		</View>	
		 <View>
			<Text style={styles.terceiro}>Terceiro passo com React! </Text>
		</View>
		<View>
			<Text style={styles.primeiro}>Primeiro passo com React! </Text>
		</View>	
		<View>
			<Text style={styles.segundo}>Segundo passo com React! </Text>
		</View>	
		 <View>
			<Text style={styles.terceiro}>Terceiro passo com React! </Text>
		</View>
		<View>
			<Text style={styles.primeiro}>Primeiro passo com React! </Text>
		</View>	
		<View>
			<Text style={styles.segundo}>Segundo passo com React! </Text>
		</View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#333',
  },
  primeiro: {
    fontSize: 30,    
    margin: 10,
	borderRadius: 5,
	//borderColor: '#FFF',
	color: '#000',
	backgroundColor :'#FFF',
  },
  segundo: {
    fontSize: 20,    
    margin: 10,
	borderRadius: 5,
	borderColor: '#000',
	color: '#000',
	backgroundColor:'yellow',
  },
  terceiro: {
    fontSize: 20,    
    margin: 10,
	borderRadius: 5,
	borderColor: '#000',
	color: '#000',
	backgroundColor:'green',
  },
});
