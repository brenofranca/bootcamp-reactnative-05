import React, { Component, Fragment } from 'react';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import PropTypes from 'prop-types';

import { View, Image } from 'react-native';

import styles from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as RepositoriesCreators } from '~/store/ducks/repositories';

import ModalAddDeveloper from '~/components/ModalRepository';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiYnJlbm9mcmFuY2EiLCJhIjoiY2pyMDkxdzIwMDdyODRibzl4cGt2ZzhxaiJ9.GHIUR6nDK_UejjIf6y3YWw',
);

class Map extends Component {
  state = {
    coordinates: {
      longitude: -38.5912083,
      latitude: -3.806182,
    },
  };

  static propTypes = {
    modalhandle: PropTypes.func.isRequired,
    repositories: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          coordinates: PropTypes.shape({
            longitude: PropTypes.number.isRequired,
            latitude: PropTypes.number.isRequired,
          }).isRequired,
        }),
      ).isRequired,
    }).isRequired,
  };

  onHandleAddRepository = () => {
    console.tron.log('@onHandleAddRepository');
  };

  renderAnnotations() {
    const { repositories } = this.props;

    return repositories.data.map(repository => (
      <MapboxGL.PointAnnotation
        id={String(repository.id)}
        coordinate={[repository.coordinates.longitude, repository.coordinates.latitude]}
      >
        <View style={styles.annotationContainer}>
          <Image style={styles.annotationFill} source={{ uri: repository.avatar_url }} />
        </View>
        <MapboxGL.Callout title={repository.login} />
      </MapboxGL.PointAnnotation>
    ));
  }

  render() {
    const { coordinates } = this.state;
    const { modalhandle } = this.props;

    return (
      <Fragment>
        <MapboxGL.MapView
          centerCoordinate={[coordinates.longitude, coordinates.latitude]}
          style={styles.container}
          showUserLocation
          styleURL={MapboxGL.StyleURL.Dark}
          onLongPress={item => modalhandle(item)}
        >
          {this.renderAnnotations()}
        </MapboxGL.MapView>

        <ModalAddDeveloper />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  repositories: state.repositories,
});

const mapDispatchToProps = dispatch => bindActionCreators(RepositoriesCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
