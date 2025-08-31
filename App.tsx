import { StyleSheet, Text, TouchableOpacity, View , Image} from 'react-native'
import React , {useState} from 'react'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const App = () => {
  const [isPressed , setIsPressed] = useState(false)
  const[isLoggedin , setIsLoggedIn] = useState(0)
 // const vibration = ()=> ReactNativeHapticFeedback.trigger("impactLight");
  const shuffle : Function = ()=>{

    const images : Record<any,any> = {
      '1' : require('./assets/images/1.png'),
     '2' : require('./assets/images/2.png'),
     '3' : require('./assets/images/3.png'),
     '4' : require('./assets/images/4.png'),
      '5' :require('./assets/images/5.png'),
     '6' : require('./assets/images/6.png'),
      
    }
    let index  = (Math.floor(Math.random()*6 + 1))
    let element = (images[index.toString()])
    const defaultImg = (images['1'])
    switch (index) {
      case 0:
        return element
        
      case 1:
        return element
      case 2:
        return element
      case 3:
        return element
      case 4:
        return element
      case 5:
        return element
       
    
      default:
        return defaultImg
       
    }
    
  }

  return (
    <View style={styles.container}>
      {isLoggedin == 0 ? (
        <TouchableOpacity onPress={()=>{ ReactNativeHapticFeedback.trigger("impactLight",options);setIsLoggedIn(1);}}>
        <Image style={styles.dice} source={require('./assets/images/1.png')}/>
      </TouchableOpacity>

      ) : !isPressed && isLoggedin == 1 ? (
                <TouchableOpacity onPress={()=>{ ReactNativeHapticFeedback.trigger("impactLight",options);setIsPressed(true);setIsLoggedIn(1)}}>
          <Image style={styles.dice} source={shuffle()}/>
        </TouchableOpacity>
      ) : isPressed && isLoggedin == 1 ? (
                <TouchableOpacity onPress={()=>{ ReactNativeHapticFeedback.trigger("impactLight",options);setIsPressed(false);setIsLoggedIn(1)}}>
          <Image style={styles.dice} source={shuffle()}/>
        </TouchableOpacity>) : null

      
      }
<Text style = {{fontSize : 30 , marginTop: 40, fontFamily : 'PixelifySans-Bold'}}>Tap to Roll!</Text>

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container : {
    backgroundColor : '#FFFFFF',
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
  },
  dice : {
    width : 180,
    height : 180,

  },

})