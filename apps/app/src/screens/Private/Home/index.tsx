import { Image, ScrollView, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Text } from '../../../components'
import { TaskCard } from '../../../components/UI'
import { colors } from '../../../utils/colors'

const Home = () => {
  return (
    <View style={{
        backgroundColor: colors.mainColor,
        height: "100%",
    }} >

        <View>
            <View>
                {/* <Image source={{

                }} /> */}
                <View>
                    <Text>  Aurelie Faux </Text>
                    <Text>  Product Designer Lead </Text>
                </View>
            </View>
            <View>
                {/* Iconos */}
            </View>
        </View>

        <View>
            <View>
            <Text> My Task </Text>
            <TouchableOpacity>
                <Text> View all </Text>
            </TouchableOpacity>
            </View>
           
           <ScrollView contentContainerStyle={{
            gap: 20,
            paddingHorizontal: 15,
            marginTop: 20
           }} showsHorizontalScrollIndicator={false} horizontal >
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
           </ScrollView>
        </View>





      
    </View>
  )
}

export default Home