import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, ScrollView } from 'react-native';

const Kitten = ({ route }) => {
  const { largeImageURL } = route.params;
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    Image.getSize(largeImageURL, (width, height) => {
      setImageSize({ width, height });
    });
  }, []);

  return (
    <ScrollView style={styles.container} horizontal={true}>
      <Image
        source={{ uri: largeImageURL }}
        style={{ width: imageSize.width, height: imageSize.height }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
});

export default Kitten;
