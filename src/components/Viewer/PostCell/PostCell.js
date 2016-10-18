import React, {
  Component,
  PropTypes,
} from 'react';
import ReactNative, {
  View,
  Text,
  ListView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

const PostCell = ({ title, preview, author }) => {
  return (
    <TouchableOpacity style={{ paddingLeft: 5 }}>
      <View style={styles.container}>
      {preview &&
        <Image source={{uri: preview.images[0].source.url}} style={styles.avatars} />
      }
        <View style={styles.textContainer}>
          <Text style={styles.baseText && styles.name}>{title}</Text>
          <Text style={styles.baseText && styles.agency}>{author}</Text>
          <Text style={styles.baseText && styles.department}></Text>
        </View>
      </View>
    </TouchableOpacity>);
};

PostCell.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  preview: PropTypes.shape({
    images: PropTypes.arrayOf(
      PropTypes.shape({
        source: PropTypes.shape({
          url: PropTypes.string.isRequired,
          width: PropTypes.number,
          height: PropTypes.number,
        }),
        resolutions: PropTypes.arrayOf(PropTypes.shape({
          url: PropTypes.string.isRequired,
          width: PropTypes.number,
          height: PropTypes.number,
        })),
      }),
    ),
  }),
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    flex: 1,
    flexDirection: 'row',
  },
  avatars: {
    marginTop: 5,
    width: 50,
    height: 50,
    borderRadius: 25, // Must be half the size of the image to obtain the 'circle' effect of images
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  name: {
    fontWeight: 'bold',
  },
  textContainer: {
      flex: 1,
      marginLeft: 10,
  },
});

export default PostCell;
