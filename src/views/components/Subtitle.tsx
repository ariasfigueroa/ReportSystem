import React from 'react';
import {Text} from 'react-native';
import {styles} from './componentStyles';

export interface SubtitleProps {
  subtitle: string;
}

const Subtitle = ({subtitle}: SubtitleProps) => {
  return <Text style={styles.subtitleText}>{subtitle}</Text>;
};

export default Subtitle;
