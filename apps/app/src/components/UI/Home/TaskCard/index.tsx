import { Image, View } from 'react-native';
import React from 'react';
import styles from './styles';
import { Text } from '../../..';
import { ProgressBar } from '../../../Layout';

const TaskCard = () => {
  return (
    <View style={styles.card} >
      <Image source={{
        uri: "https://i.ibb.co/8cvpx9c/w-D1-LRb9-Oe-Eo-2048x1536.jpg"
      }} style={styles.image} />

      <View style={ styles.info }>
        <Text>Add Final OKR and KPI</Text>
        <Text>performance Management</Text>

        <View>
          <ProgressBar percentage={32} />
          {/* Usuarios */}
        </View>
      </View>


    </View>
  )
}

export default TaskCard