import React from 'react'
import { StyleSheet, Text } from 'react-native'
const Txt = () => {

  return (
    <Text style={styles.txt}>Đây là đoạn text từ component</Text>
  )
}
const styles = StyleSheet.create({
  txt: {
    color: 'red',
    fontSize: 20
  }
})


export default Txt