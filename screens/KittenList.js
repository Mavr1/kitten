import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { useSelector } from 'react-redux';
import { useNetInfo } from '@react-native-community/netinfo';

import KittenListItem from '../components/KittenListItem';

export default function KittenList({ navigation }) {
  const { data, isLoading } = useSelector(({ kittens }) => kittens) || [];
  const netInfo = useNetInfo();

  const [perPage, setperPage] = useState(10);
  const isConnected = !!netInfo.isConnected;
  return (
    <View style={styles.container}>
      {!isConnected && <Text>No internet connection</Text>}
      {isConnected && isLoading && (
        <View style={styles.indicatorContainer}>
          <ActivityIndicator color="#4444ff" size="large" />
        </View>
      )}
      {isConnected && !isLoading && (
        <>
          <View style={styles.filterContainer}>
            <View style={styles.filterBtnContainer}>
              <Button title="10" onPress={() => setperPage(10)} />
            </View>
            <View style={styles.filterBtnContainer}>
              <Button title="20" onPress={() => setperPage(20)} />
            </View>
            <View style={styles.filterBtnContainer}>
              <Button title="40" onPress={() => setperPage(40)} />
            </View>
          </View>
          <View style={styles.listContainer}>
            <FlatList
              data={data.filter((k, idx) => idx < perPage)}
              renderItem={({ item }) => (
                <KittenListItem item={item} navigation={navigation} />
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },

  indicatorContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  filterContainer: {
    flex: 0.08,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },

  filterBtnContainer: { width: '30%' },

  listContainer: { flex: 1 },
});
