import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Header extends Component{
    render(){
        const { header, headerText } = styles;
        return(
            <View style={styles.header}>
              <Text style={styles.headerText}>Simple Calculator</Text>
            </View>
        )
    }
}
export default Header;

const styles = StyleSheet.create({
    header:{
        // flex: 1,
        height: 60,
        // paddingTop: 0,
        shadowColor: 'red',
        shadowOffset: { 
          width: 0, 
          height: 2 
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.5,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
      },
      headerText:{
        fontSize: 25,
        color: '#75589B',
        textAlign: 'center'
      }
});