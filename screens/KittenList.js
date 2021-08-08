import React, { useEffect, useState } from 'react';
import { View, Button, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import KittenListItem from '../components/KittenListItem';
import { getKittensOperation } from '../redux/kittensOperations';

export default function KittenList({ navigation }) {
  const dispatch = useDispatch();
  const kittens = useSelector(({ kittens }) => kittens.data);

  const [perPage, setperPage] = useState(10);

  useEffect(() => {
    dispatch(getKittensOperation(perPage));
  }, [perPage]);

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <View style={styles.filterBtnContainer}>
          <Button title="10" onPress={() => setperPage(10)} />
        </View>
        <View style={styles.filterBtnContainer}>
          <Button title="20" onPress={() => setperPage(20)} />
        </View>
        <View style={styles.filterBtnContainer}>
          <Button title="40" onPress={() => setperPage(10)} />
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={kittens}
          renderItem={({ item }) => (
            <KittenListItem item={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
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
