import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, ScrollView, View, Text } from 'react-native';

const Kitten = ({ route }) => {
  const { name, tags, largeImageURL, user } = route.params;
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    Image.getSize(largeImageURL, (width, height) => {
      setImageSize({ width, height });
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <ScrollView style={styles.imageWrapper} horizontal={true}>
        <Image
          source={{ uri: largeImageURL }}
          style={{ width: imageSize.width, height: imageSize.height }}
        />
      </ScrollView>
      <View style={styles.descriptionContainer}>
        <Text style={styles.text}>{'Tags: ' + tags}</Text>
        <Text style={styles.text}>
          This amazing photo was posted by{' '}
          <Text style={{ fontWeight: 'bold' }}>{user}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
  },

  imageWrapper: { flex: 1, marginBottom: 20 },

  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  text: { fontSize: 16, marginBottom: 10 },

  descriptionContainer: { paddingHorizontal: 16 },
});

export default Kitten;
