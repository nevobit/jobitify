import { View } from 'react-native'
import React from 'react'
import { colors } from '../../../utils/colors';
import { Text } from '../..';

interface Props{
    percentage: number;
}

const ProgressBar = ({ percentage }: Props) => {
  return (
    <View  >
        <View style={{
            backgroundColor: "#fff",
            height: 15,
            borderRadius: 40,
            overflow: "hidden",
            width: 140
        }} >
            <View style={{
                backgroundColor: colors.blue,
                width: `${percentage}%`,
                height: "100%"
            }} />
        </View>
        <Text>{percentage}%</Text>
    </View>
  )
}

export default ProgressBar