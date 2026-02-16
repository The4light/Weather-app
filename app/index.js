import { View, Text, TextInput, TouchableOpacity, BackHandler, ScrollView} from "react-native"
import {SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context"
import React, { useState } from "react"
import { StatusBar } from "expo-status-bar"
import {Image} from 'react-native'
import { theme } from "../theme/color"

//Heroicons
import {CalendarDaysIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import {MapPinIcon} from 'react-native-heroicons/solid'

export default function HomeScreen() {
   const [showSearch, toggleSearch] = useState(false);
   const [locations, setLocations] = useState([1,2,3]);

   const handleLocation = (loc) =>{
    console.log('location', loc);
   }


    return(
          <>
        <View className = "flex-1"> 
            <StatusBar style="light"/>
            <Image 
                blurRadius={70}
                source={require("../assets/images/weather-background (1).jpg")}
                className="absolute h-full w-full"
            />
            <SafeAreaView className="flex-1">
            {/* Search section */}
            <View style={{height: "7%"}} className="mx-4 relative z-50"> 

                {/* Text input view */}
                <View
                 className="flex-row justify-end items-center rounded-full overflow-hidden"
                 style={{backgroundColor: showSearch? theme.bgWhite(0.2): 'transparent',
                    height: 50
                 }}
                >   
                    {/* Toggling search */}
                        {
                            showSearch? (
                                <TextInput                                     
                                    placeholder="search city"
                                    placeholderTextColor={"lightgray"}
                                    className="flex-1 px-6 py-3 text-base text-black"
                                />
                            ): null
                        }

                    {/* Magnifying glass search icon  */}
                    <TouchableOpacity
                        onPress={() => toggleSearch(!showSearch)}
                        style={{backgroundColor: theme.bgWhite(0.3)}}
                        className="rounded-full p-3 m-1"
                    >
                        <MagnifyingGlassIcon size={25} color="black"/>
                    </TouchableOpacity>
                </View>
                {
                    locations.length>0 && showSearch?(
                        <View className="absolute w-full bg-gray-300 top-16 rounded-3xl overflow-hidden">
                         {   
                            locations.map((loc, index) => {
                                let showBorder = index + 1 !== locations.length; 
                                
                                return(
                                 <TouchableOpacity 
                                 onPress={(loc) => handleLocation}
                                 key={index}
                                 className={"flex-row items-center p-3 px-4 mb-1 " + (showBorder ? "border-b-2 border-b-gray-400" : "")}
                                 >
                                    <MapPinIcon size={24} color="gray" />
                                    <Text className="text-black text-lg ml-2"> London, United Kingdom</Text>
                                </TouchableOpacity>     
                                )                               
                            })                        
                        }
                        </View>
                    ):null
                }
            </View>

            {/* Forecast Section */}
            <View className="mx-4 flex justify-around flex-1 mb-2"> 
                    {/*Location */}
                    <Text className="text-white text-center text-2xl font-bold flex">
                        London,
                         <Text className="text-lg font-semibold text-gray-300">
                            United Kingdom
                         </Text>
                    </Text>
                    {/* Weather image  */}
                    <View className="flex-row justify-center">
                        <Image 
                            source={require("../assets/images/partly-cloudy.png")}
                            className="w-52 h-52"
                        />
                    </View>
                    {/* Degree Celsius */}
                    <View className="space-y-2"> 
                        <Text 
                        className="text-center font-bold text-white text-6xl ml-5">
                            23°
                        </Text>
                        <Text 
                        className="text-center text-white text-xl ml-5 tracking-widest">
                            Partly cloudy
                        </Text>
                    </View>

                    {/*other stats*/}
                    <View className="flex-row justify-between mx-4">
                        <View className="flex-row space-x-2 item-center">
                            <Image 
                                source={require('../assets/images/wind (1).png')}
                                className="h-6 w-6"
                            />
                            <Text className="text-white font-semibold text-base"> 
                                22KM
                            </Text>
                        </View>
                                                <View className="flex-row space-x-2 item-center">
                            <Image 
                                source={require('../assets/images/drop.png')}
                                className="h-6 w-6"
                            />
                            {/* humidity */}
                            <Text className="text-white font-semibold text-base"> 
                                22%
                            </Text>
                        </View>

                        {/*sunrise time*/}
                        <View className="flex-row space-x-2 item-center">
                            <Image 
                                source={require('../assets/images/contrast.png')}
                                className="h-6 w-6"
                            />
                            <Text className="text-white font-semibold text-base"> 
                                6:05 AM
                            </Text>
                        </View>
                    </View>
                
                {/* Forecast for next days */}
                <View className="mb-2 space-y-3">
                    <View className="flex-row items-center mx-5 space-x-2"> 
                        <CalendarDaysIcon size={22} color="white"/>
                        <Text className="text-white text-base"> Daily Forecast </Text>
                    </View>
                    <ScrollView
                        horizontal
                        contentContainerStyle={{paddingHorizontal: 15}}
                        showsHorizontalScrollIndicator={false}                    
                    >
                        <View>
                            
                        </View>
                    </ScrollView>
                </View>
                   
            </View>
         </SafeAreaView> 
        </View>
    </>    
    )
}
