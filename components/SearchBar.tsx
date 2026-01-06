import { icons } from '@/constants/icons';
import React from 'react';
import { Image, TextInput, View } from 'react-native';

interface Props {
    placeholder: string;
    onPress?: () => void;
}


const SearchBar = ({placeholder, onPress}: Props) => {
  return (
    <View
        className=' 
            flex-row 
            items-center 
            bg-dark-200 
            rounded-full 
            px-5 
            py-4
        '
    >
      
      <Image
        className="size-5"
        tintColor="#ab8bff" 
        resizeMode="contain"
        source={icons.search}
      />

      <TextInput
        onPress={onPress}
        placeholder= {placeholder}
        value=""
        onChangeText={() => {}} 
        placeholderTextColor="#ab8bff" 
        className="flex-1 ml-2 text-white" 

      />
    </View>
  )
}

export default SearchBar