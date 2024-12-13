import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending cars</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://w.wallhaven.cc/full/p8/wallhaven-p8999j.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Super Car</Text>
          <Text style={styles.carLabel}>Yellow Super Car</Text>
          <Text style={styles.carDescription}>
            A car, or an automobile, is a motor vehicle with wheels. Most
            definitions of cars state that they run primarily on roads, seat one
            to eight people, have four wheels, and mainly transport people over
            cargo. There are around one billion cars in use worldwide.
          </Text>
          <Text style={styles.carFooter}>5 km/l</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 360,
    height: 360,
    borderRadius: 6,
    marginHorizontal: 16,
    marginVertical: 12,
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {width: 1, height: 1},
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {flex: 1, flexGrow: 1, paddingHorizontal: 12},
  cardTitle: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  carLabel: {color: 'black', fontSize: 14, marginBottom: 6},
  carDescription: {
    color: '#242B2E',
    fontSize: 12,
    marginBottom: 12,
    flexShrink: 1,
    marginTop: 6,
  },
  carFooter: {color: 'black'},
});
