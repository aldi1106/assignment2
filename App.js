import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

const mapboxAccessToken =
  'pk.eyJ1IjoiYWxkaTExMDYiLCJhIjoiY2tpaXRsMnhhMDByYjJ5cnlvMTBzYjlhcCJ9.kO8-M_mF2sSMncn4rTdTEg';
MapboxGL.setAccessToken(mapboxAccessToken);

const App = () => {
  const jakarta = [106.865036, -6.17511];
  const medan = [98.672226, 3.595196];
  const kalimantan = [111.475288, -0.278781];
  const maluku = [130.145279, -3.238462];
  const papua = [138.080353, -4.269928];
  const startmedans = [
    jakarta,
    medan,
    kalimantan,
    maluku,
    papua,
  ];
 
  return (
    <View style={styles.container}>
      <MapboxGL.MapView style={styles.map}>
        <MapboxGL.Camera zoomLevel={2} centerCoordinate={kalimantan} />
        {startmedans.map((point, index) => (
          <MapboxGL.PointAnnotation
            key={`${index}-PointAnnotation`}
            id={`${index}-PointAnnotation`}
            coordinate={point}>
            <View style={styles.annotationContainer}>
              <View style={styles.annotationFill} />
            </View>
            <MapboxGL.Callout title="PIndonesia, Provinsi" />
          </MapboxGL.PointAnnotation>
        ))}
      </MapboxGL.MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  map: {
    flex: 1,
  },
});

export default App;
