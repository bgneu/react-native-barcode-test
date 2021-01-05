import React, { Component } from 'react'
import { Text, View, StyleSheet, Alert, TouchableOpacity, Image } from 'react-native'

import { RNCamera as Camera } from 'react-native-camera'

export default class barcodeScanner extends Component {
  constructor(props) {
    super(props);
    this.handleTourch = this.handleTourch.bind(this);
    this.state = {
      vin: '',
      type: '',
      torchOn: false
    }
  }

  handleTourch(value) {
    if (value === true) {
        this.setState({ torchOn: false });
    } else {
        this.setState({ torchOn: true });
    }
  }

  onBarCodeRead = (e) => {
    if (this.state.vin != e.data || this.state.type != e.type) {
      this.setState({ vin: e.data, type: e.type })
      Alert.alert("Barcode value is " + e.data ,"Barcode type is "+ e.type);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          barCodeTypes={[
            Camera.Constants.BarCodeType.code39,
            Camera.Constants.BarCodeType.code128,
            Camera.Constants.BarCodeType.qr,
            Camera.Constants.BarCodeType.datamatrix
          ]}
          style={styles.preview}
          torchMode={this.state.torchOn ? Camera.Constants.FlashMode.torch : Camera.Constants.FlashMode.off}
          onBarCodeRead={this.onBarCodeRead}
          ref={cam => this.camera = cam}
        >
          <Text style={{ backgroundColor: 'white' }}>BARCODE SCANNER</Text>
        </Camera>
        <View style={styles.bottomOverlay}>
          <TouchableOpacity onPress={() => this.handleTourch(this.state.torchOn)}>
            <View
              style={[styles.cameraIcon], { backgroundColor: this.state.torchOn ? 'green' : 'red'} }
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
 }

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cameraIcon: {
      margin: 5,
      height: 40,
      width: 40
    },
  bottomOverlay: {
      position: "absolute",
      width: "100%",
      flex: 20,
      flexDirection: "row",
      justifyContent: "space-between"
    },
 })

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;
