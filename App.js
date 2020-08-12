import React, {Component} from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      input1:'',
      input2: '',
      result: 0
    }
  }
  sum(){
    const number1 = parseFloat(this.state.input1);
    const number2 = parseFloat(this.state.input2);
    let sum = number1 + number2;
    this.setState({
      result: sum
    })
  }
  sub(){
    const number1 = parseFloat(this.state.input1);
    const number2 = parseFloat(this.state.input2);
    let sum = number1 - number2;
    this.setState({
      result: sum
    })
  }
  multiplaction(){
    const number1 = parseFloat(this.state.input1);
    const number2 = parseFloat(this.state.input2);
    let sum = number1 * number2;
    this.setState({
      result: sum
    })
  }
  division(){
    const number1 = parseFloat(this.state.input1);
    const number2 = parseFloat(this.state.input2);
    let sum = number1 / number2;
    this.setState({
      result: sum
    })
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

          <View style={styles.buttonWrapper}>
            <Button title="+" color='#841584' onPress={this.sum.bind(this)}/>
            <Button title="-" color='black' onPress={this.sub.bind(this)}/>
            <Button title="*" color='#841584' onPress={this.multiplaction.bind(this)}/>
            <Button title="/" color='black' onPress={this.division.bind(this)}/>
          </View>

          <TextInput style={styles.input}
                      onChangeText={(text) => {
                        this.setState({
                          input2: text
                        });
                      }}
                      value={this.state.input2}
                      placeholder='Ikinci Sayıyı Giriniz'
          />
            
          <Text style={styles.sampleText}> Result: {this.state.result}</Text>
          
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
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  input:{
    height:40
  },
  sampleText:{
    height: 30,
    fontSize: 14
  },
  buttonWrapper:{
    // height: 50,
    // width: 300,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
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
