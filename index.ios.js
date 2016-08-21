'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  Animated,
  Easing,
  ScrollView,
  ListView,
  TouchableHighlight
} from 'react-native';

class splitBill extends Component{
  render() {
    return (
      <NavigatorIOS
        style={{flex: 1, backgroundColor: '#f3ffff'}}
        initialRoute={{
          title: 'Add Items',
          component: AddItems
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
      component: AddItems,
      rightButtonTitle: 'Add',
      onRightButtonPress: () => this._handleAdd(),

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
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    console.log(ds);


    this.state = {
      receiptValue: '',
      newData: ['new array!', 'another entry', 'sdfdf'],
      dataSource: ds.cloneWithRows(['1','dfs'])
    }
  }




  _handleAdd() {

    // console.log(this.state.dataSource);
    // this.state.dataSource.concat(['lala']);
    console.log(this.state.dataSource);



    this.setState({
      newData: this.state.newData.concat(['lalala']),
      dataSource: this.state.dataSource.cloneWithRows(this.state.newData),

    })
  }

  appendNumber(value) {
    if (this.state.receiptValue.length >= 6) {
      value = ''
    }

    this.setState({
      receiptValue: this.state.receiptValue + value
    })
  }

  removeLastNumber() {
    this.setState({
      receiptValue: this.state.receiptValue.slice(0, -1)
    })
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#0cf', paddingTop: 64}}>
        <View style={{height: 80, backgroundColor: '#494D4D', paddingBottom: 5, paddingRight: 5, paddingLeft: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
            <Text style={{fontSize: 12, color: '#7C8282'}}>Total amount</Text>
            <Text style={{fontSize: 24, color: '#F3FFFF'}}>{String(this.state.receiptValue)}</Text>
        </View>

        <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
        <TouchableHighlight onPress={() => this._handleAdd()}>
            <Text>Click me!!!</Text>
        </TouchableHighlight>

        <View style={{flex: 1}}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                  <NumPadKey text="1" appendNumber={() => this.appendNumber('1')}/>
                  <NumPadKey text="2" appendNumber={() => this.appendNumber('2')}/>
                  <NumPadKey text="3" appendNumber={() => this.appendNumber('3')}/>
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                  <NumPadKey text="4" appendNumber={() => this.appendNumber('4')}/>
                  <NumPadKey text="5" appendNumber={() => this.appendNumber('5')}/>
                  <NumPadKey text="6" appendNumber={() => this.appendNumber('6')}/>
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                  <NumPadKey text="7" appendNumber={() => this.appendNumber('7')}/>
                  <NumPadKey text="8" appendNumber={() => this.appendNumber('8')}/>
                  <NumPadKey text="9" appendNumber={() => this.appendNumber('9')}/>
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                  <NumPadKey text="." appendNumber={() => this.appendNumber('.')}/>
                  <NumPadKey text="0" appendNumber={() => this.appendNumber('0')}/>
                  <NumPadKey text="Backsp" appendNumber={() => this.removeLastNumber()}/>
              </View>
            </View>

      </View>
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

class NumPadKey extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontSize: 14,
      fontPos: new Animated.Value(0),
      fontSizeAnim: new Animated.Value(14)
    }

  }

onPress() {
  this.props.appendNumber();
}

onPressIn() {

  Animated.timing(          // Uses easing functions
     this.state.fontSizeAnim,    // The value to drive
     {
        toValue: 28,
        duration: 200,
        easing: Easing.elastic(1)
   }).start();

   Animated.timing(          // Uses easing functions
      this.state.fontPos,    // The value to drive
      {
         toValue: 20,
         duration: 200,
         easing: Easing.elastic(1)
    }).start();
   }

onPressOut() {
  Animated.timing(          // Uses easing functions
     this.state.fontSizeAnim,    // The value to drive
     {toValue: 14,
       duration: 200,
       easing: Easing.elastic(2)
     }            // Configuration
   ).start();

   Animated.timing(          // Uses easing functions
      this.state.fontPos,    // The value to drive
      {
         toValue: 0,
         duration: 200,
         easing: Easing.elastic(2)
    }).start();
}


  render() {
    return (
      <TouchableHighlight
          style={{flex:1}}
          onPress={() => this.props.appendNumber()}
          onShowUnderlay={() => this.onPressIn()}
          onHideUnderlay={() => this.onPressOut()}
          underlayColor="transparent">
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <Animated.Text style={{fontSize: this.state.fontSizeAnim, position: 'relative', bottom: this.state.fontPos}}>
            {this.props.text}
          </Animated.Text>
        </View>
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
