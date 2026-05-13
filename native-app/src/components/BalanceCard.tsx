import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../ThemeContext';
export default function BalanceCard({ balance }: any) {
  const { c } = useTheme();
  return (
    <View style={{ padding: 24, borderRadius: 24, backgroundColor: c.card, borderWidth: 1, borderColor: c.border }}>
      <Text style={{ color: c.mutedForeground }}>AVAILABLE BALANCE</Text>
      <Text style={{ color: c.foreground, fontSize: 36, fontWeight: 'bold' }}>${balance}</Text>
    </View>
  );
}