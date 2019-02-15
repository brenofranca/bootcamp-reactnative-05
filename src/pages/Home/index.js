import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Mapa from '~/components/Map';
import ModalRepository from '~/components/ModalRepository';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ModalCreators } from '~/store/ducks/modal';
import { Creators as RepositoriesCreators } from '~/store/ducks/repositories';

class Home extends Component {
  static propTypes = {
    openModal: PropTypes.func.isRequired,
    addRepositoryCoordinates: PropTypes.func.isRequired,
  };

  static navigationOptions = {
    header: null,
  };

  modalhandle = ({ geometry }) => {
    const [longitude, latitude] = geometry.coordinates;

    const { openModal, addRepositoryCoordinates } = this.props;

    addRepositoryCoordinates({ longitude, latitude });

    openModal(true);
  };

  render() {
    return (
      <Fragment>
        <Mapa modalhandle={this.modalhandle} />

        <ModalRepository />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
  repositories: state.repositories,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ModalCreators, ...RepositoriesCreators }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
