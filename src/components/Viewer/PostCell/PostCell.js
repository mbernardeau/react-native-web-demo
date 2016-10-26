import React, {
  Component,
  PropTypes,
} from 'react';
import ReactNative, {
  View,
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import moment from 'moment';

const PostCell = ({ title, preview, author, created_utc, subreddit, num_comments, score, goToPost }) => {
  return (
    <TouchableOpacity style={styles.mainContainer} /* onPress={goToPost} */>
      <View style={styles.container}>
        {preview &&
          <Image source={{uri: preview.images[0].source.url}} style={styles.avatars} />
        }
        <View style={styles.textContainer}>
          <Text style={styles.baseText && styles.author}>r/{subreddit} • {moment(created_utc, 'X').from()} • u/{author}</Text>
          <Text style={styles.baseText && styles.title}>{title}</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.baseText && styles.date}>{num_comments || 'No'} comment{num_comments > 1 ? 's' : ''}</Text>
        <Text style={styles.baseText}>{score} ⬆ • ⬇</Text>
      </View>
    </TouchableOpacity>);
};

PostCell.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  created_utc: PropTypes.number.isRequired,
  subreddit: PropTypes.string.isRequired,
  num_comments: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
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
  goToPost: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    height: 70,
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
    fontSize: 12,
    fontFamily: 'helvetica',
  },
  title: {
    flex: 3,
    fontSize: Platform.select({
      web: 14,
      ios: 11,
      android: 11,
    }),
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  author: {
    flex: 2,
    fontSize: 13,
  },
  date: {
    flex: 2,
    fontSize: 10,
    color: 'darkgray',
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...Platform.select({
      ios: {
        height: 22,
      },
      android: {
        height: 22,
      },
    }),
  },
  mainContainer: {
    paddingLeft: 5,
  },
});

export default PostCell;
