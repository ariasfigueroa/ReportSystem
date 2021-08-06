import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ticketsStyles} from './componentStyles';

export interface TicketsProps {
  id: string;
  status: string;
  reportType: string;
  referenceType: string;
  createdOn: string;
  message?: string;
  onBlockPress: (id: string) => void;
  onResolvePress: (id: string) => void;
}

const Tickets = ({
  id,
  status,
  reportType,
  referenceType,
  createdOn,
  message,
  onBlockPress,
  onResolvePress,
}: TicketsProps) => {
  const fontColorResolve = status === 'RESOLVE' ? '#b8bece' : '#546bfb';
  const fontColorBlock = status === 'BLOCK' ? '#b8bece' : '#546bfb';
  return (
    <View style={ticketsStyles.container}>
      <View style={ticketsStyles.cover}>
        <Text style={ticketsStyles.title}>STATUS</Text>
        <Text style={ticketsStyles.caption}>{status}</Text>
        <Text style={ticketsStyles.title}>REPORT TYPE</Text>
        <Text style={ticketsStyles.caption}>{reportType}</Text>
        <Text style={ticketsStyles.title}>REFERENCE TYPE</Text>
        <Text style={ticketsStyles.caption}>{referenceType}</Text>
        <Text style={ticketsStyles.title}>CREATED ON</Text>
        <Text style={ticketsStyles.caption}>{createdOn}</Text>
        <Text style={ticketsStyles.title}>MESSAGE</Text>
        <Text style={ticketsStyles.caption}>{message}</Text>
      </View>
      <View style={ticketsStyles.content}>
        <TouchableOpacity
          onPress={() => onBlockPress(id)}
          disabled={status === 'BLOCK' ? true : false}>
          <Text style={{color: fontColorBlock}}>BLOCK</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onResolvePress(id)}
          disabled={status === 'RESOLVE' ? true : false}>
          <Text style={{color: fontColorResolve}}>RESOLVE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tickets;
