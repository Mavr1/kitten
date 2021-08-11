import React from 'react';
import { Dimensions, Text, TouchableOpacity } from 'react-native';
import { Image, StyleSheet, View } from 'react-native';

const KittenListItem = ({ item, navigation }) => {
  const imageWidth = Dimensions.get('window').width;
  const imageHeight = Dimensions.get('window').height;
  const { tags, webformatURL, likes, comments, largeImageURL, name, user } = item;

  const handleGoToDetails = () => {
    navigation.navigate('Kitten', { name, tags, largeImageURL, user });
  };

  return (
    <TouchableOpacity onPress={handleGoToDetails} activeOpacity={0.6}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: webformatURL }}
            style={styles.image}
            width={imageWidth * 0.8}
            height={imageHeight * 0.3}
          />
        </View>
        <View>
          <Text style={styles.text}>{'Name: ' + name}</Text>
          <Text style={styles.text}>{'Tags: ' + tags}</Text>
          <Text style={styles.text}>{'Likes: ' + likes}</Text>
          <Text style={styles.text}>{'Comments: ' + comments}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 20,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 6,
  },

  imageContainer: {
    flex: 1,
    height: '40%',
    alignItems: 'center',
    marginBottom: 15,
  },

  text: { fontSize: 16 },
});

export default KittenListItem;
