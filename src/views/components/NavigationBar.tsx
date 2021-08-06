import React from 'react';
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import {styles} from './componentStyles';

export interface NavigationBarProps {
  title: string;
  name: string;
  image: ImageSourcePropType;
}

const NavigationBar = ({title, name, image}: NavigationBarProps) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity>
        <Image source={image} style={styles.avatar} />
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textName}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavigationBar;
