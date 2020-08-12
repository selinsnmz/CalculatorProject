import React, {Component} from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      input1:''
    }
  }
  render(){
    return(
      <View style={styles.contanier}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Simple Calculator</Text>
        </View>
        <View style={styles.contentWrapper}>
          <TextInput style={styles.input}
                      onChangeText={(text) => {
                        this.setState({
                          input1: text
                        });
                      }}
                      value={this.state.input1}
                      placeholder='Ilk Sayıyı Giriniz'
          />
            

                    <Text style={styles.sampleText}>İlk Sayı: {this.state.input1}</Text>
        </View>
        
      </View>
    )
  }
}

// export default App;

const styles = StyleSheet.create({
  contanier:{
    flex: 1,
    flexDirection: 'column'
  },
  contentWrapper:{

  },
  input:{
    height:40
  },
  sampleText:{
    height: 30,
    fontSize: 14
  },
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
