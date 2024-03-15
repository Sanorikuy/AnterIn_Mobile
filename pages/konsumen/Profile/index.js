import { StyleSheet, Text, View,Image,Button } from 'react-native'
import React from 'react'

export default function Profile() {
  return (
    <>
      <View style={{ alignItems: 'center', flexDirection: 'column' , ...StyleSheet.absoluteFillObject, backgroundColor: '#EDA01F' }}>
        <View style={styles.card}>

        {/* Profile */}
        <View style={{ alignItems: 'center', flexDirection: 'column' }}>
          <Image
            source={require('../../img/logo.png')}
            resizeMode="cover"
            style={{ width: 90, height: 90 }}
          />
          <Text style={{ fontWeight: 'bold' }}>Delia</Text>
          <Text style={{ fontWeight: 'bold' }}>0895335992932</Text>
        </View>

      {/* alamat + Edit Profile */}
        <View style={{alignItems:'center' ,marginBottom:8}}>
        <View style={styles.button}>
          <Text style={styles.text}>Edit Profile</Text>
        </View>
        <View style={styles.button2}>
          <Text style={styles.text}>Tambah Alamat</Text>
        </View>
        </View>

        <View style={{display:'flex', flexDirection:'row-reverse',justifyContent:'space-between' , marginTop:10}}>
          <Text style={styles.text2}>Minute</Text>
          <Text style={styles.text2}>5 Foto</Text>
          <Text style={styles.text2}> 25 Age</Text>
        </View>
        </View>
        <View style={{flexDirection:'column', alignItems:'stretch', flex:1 , marginTop:50}}>
        <View style={styles.button3}>
          <Text style={styles.text2}>Ubah Password</Text>
          </View>
          <View style={styles.button3}>
          <Text style={styles.text2}>Ubah Email</Text>
          </View>
          <View style={styles.button3}>
          <Text style={styles.text2}>Pusah Bantuan</Text>
          </View>
          <View style={{  backgroundColor: '#34CC43',
                          padding:10,
                          paddingLeft:100,
                          paddingRight:100,
                          // margin:20,
                          marginTop:5,
                          borderColor:'black',
                          borderWidth:1.3,
                          borderRadius:4,
    }}>
          <Text style={styles.text}>Keluar</Text>
          </View>
          
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({

  button:{
    backgroundColor: '#34CC43',
    padding:10,
    paddingLeft:78,
    paddingRight:78,
    // margin:20,
    borderRadius:50,
    marginTop:5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

 


  },
  button2:{
    backgroundColor: '#34CC43',
    padding:10,
    paddingLeft:60,
    paddingRight:60,
    // margin:20,
    borderRadius:50,
    marginTop:5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

 


  },

  button3:{
    backgroundColor: 'white',
    padding: 10,
    paddingRight: 190,
    marginTop: 5,
    borderColor: 'black',
    borderWidth: 1.3,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

 


  },

  text:{
    // alignContent:'flex-start',
    textAlign:'center',
    fontSize:16,
    color:'white',
    justifyContent:'center'
    
   
  },

  text2:{


    // textAlign:'center',
    fontSize:14,
    color:'black',
    // justifyContent:'center'
    
   
  },


  card: {
    width: 300,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginTop: 20,
  },
})