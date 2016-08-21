'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight
} from 'react-native';

class splitBill extends Component{
  render() {
    return (
      <NavigatorIOS
        style={{flex: 1, backgroundColor: '#f3ffff'}}
        initialRoute={{
          title: 'first',
          component: Home
        }} />
    );
  }
}

class Home extends Component {
  constructor(props) {
    super(props);
  }

  onPress() {
    console.log(this);
    this.props.navigator.push({
      title: 'Add Items',
      component: AddItems
    })
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fc0', paddingTop: 100}}>

        <Tab/>

        <TouchableHighlight onPress={() => this.onPress()}>
            <Text>Click me!!!</Text>
        </TouchableHighlight>

      </View>
    )
  }
}

class AddItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#0cf'}}></View>
    )
  }
}


class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: '1'
    }
  }

  selectTab(number) {
    console.log(this);
    this.setState({
      selectedTab: number
    })
    console.log(this);
  }

  render() {
    return (
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      <TouchableHighlight onPress={() => this.selectTab('1')} style={{height: 30, width: 30}}>
        <View style={{backgroundColor: this.state.selectedTab == 1 ? '#0cf' : '#f3ffff', flex: 1}}>
          <Text>2</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => this.selectTab('2')} style={{height: 30, width: 30}}>
        <View style={{backgroundColor: this.state.selectedTab == 2 ? '#0cf' : '#f3ffff', flex: 1}}>
          <Text>3</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => this.selectTab('3')} style={{height: 30, width: 30}}>
        <View style={{backgroundColor: this.state.selectedTab == 3 ? '#0cf' : '#f3ffff', flex: 1}}>
          <Text>4</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => this.selectTab('4')} style={{height: 30, width: 30}}>
        <View style={{backgroundColor: this.state.selectedTab == 4 ? '#0cf' : '#f3ffff', flex: 1}}>
          <Text>5</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => this.selectTab('5')} style={{height: 30, width: 30}}>
        <View style={{backgroundColor: this.state.selectedTab == 5 ? '#0cf' : '#f3ffff', flex: 1}}>
          <Text>6</Text>
        </View>
      </TouchableHighlight>
    </View>
    )
  }
}

class TabItem extends Component {
  constructor(props) {
    super(props);

  }

  onPress() {
    console.log(this);
    this.props.selectTab();
  }

  render() {
    return (
      <TouchableHighlight onPress={() => this.onPress()} style={{height: 30, width: 30, backgroundColor: '#f3ffff'}}>
        <Text>{this.props.selectedTab}</Text>
      </TouchableHighlight>
    )
  }
}

AppRegistry.registerComponent('splitBill', () => splitBill);












// class First extends Component{
//
//   navSecond(){
//     console.log(this);
//     this.props.navigator.push({
//         title: 'second',
//         component: Second
//     })
//
//   }
//   render() {
//     return (
//       <View style={{paddingTop: 100}}>
//         <TouchableHighlight onPress={() => this.navSecond()}>
//           <Text>Navigate to second sjcreen</Text>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }
//   class Second extends Component{
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>
//           Second screen
//         </Text>
//       </View>
//     );
//   }
// };
//
// const styles = {
//   container: {
//     flex: 1,
//     backgroundColor: 'red'
//   }
// }
