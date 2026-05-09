import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../ThemeContext';
export default function BalanceCard({ balance }: any) {
  const { c } = useTheme();
  return (
    <View style={{ padding: 24, borderRadius: 16, backgroundColor: c.primary }}>
      <Text style={{ color: '#fff' }}>AVAILABLE BALANCE</Text>
      <Text style={{ color: '#fff', fontSize: 36, fontWeight: 'bold' }}>${balance}</Text>
    </View>
  );
}