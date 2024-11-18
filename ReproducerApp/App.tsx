import React, { useEffect, useMemo, useState } from 'react'
import { View, Text } from 'react-native'

const p = () => new Promise(r => {
  setTimeout(() => {
    r(undefined)
  }, 3000)
})

function RNTesterApp() {
  const [arr, setArr] = useState([])

  const getTabData = async () => {
    try {
      const val = await p()
      setArr(val)
    } catch (err) {
      console.log('render error', err)
    }
  }

  useEffect(() => {
    getTabData()
  }, [])

  const val = useMemo(() => arr.length - 10000, [arr])

  return (
    <View>
      <Text>{val}</Text>
    </View>
  )
}
export default RNTesterApp