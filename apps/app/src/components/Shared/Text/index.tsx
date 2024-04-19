import { Text as DefaultText } from 'react-native'
import React, { ReactNode } from 'react'
import styles from "./styles"

const Text = ({ children }: { children: ReactNode }) => {
  return (
      <DefaultText style={styles.text} >
        {children}
      </DefaultText>
  )
}

export default Text