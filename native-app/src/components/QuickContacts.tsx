import React from 'react';
import { ScrollView, View, Text } from 'react-native';
export default function QuickContacts() {
  return (
    <ScrollView horizontal>
      <Text style={{ margin: 10 }}>Sarah</Text>
      <Text style={{ margin: 10 }}>Alex</Text>
      <Text style={{ margin: 10 }}>Maya</Text>
    </ScrollView>
  );
}