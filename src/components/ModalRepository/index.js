import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Modal, Text, TouchableOpacity, View, TextInput, ActivityIndicator,
} from 'react-native';
import styles from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ModalCreators } from '~/store/ducks/modal';
import { Creators as RepositoriesCreators } from '~/store/ducks/repositories';

class ModalRepository extends Component {
  static propTypes = {
    error: PropTypes.oneOf([null, PropTypes.string]),
    success: PropTypes.oneOf([null, PropTypes.string]),
    closeModal: PropTypes.func.isRequired,
    addRepositoryRequest: PropTypes.func.isRequired,
    modal: PropTypes.shape({
      visible: PropTypes.bool,
    }).isRequired,
  };

  state = {
    loading: false,
    repoNameInput: 'angular/angular',
  };

  addRepository = () => {
    const { repoNameInput } = this.state;

    const { addRepositoryRequest } = this.props;

    this.setState({ loading: true });

    addRepositoryRequest(repoNameInput);

    this.setState({ loading: false, repoNameInput: '' });
  };

  hideModal = () => {
    const { closeModal } = this.props;

    this.setState({ loading: false, repoNameInput: '' });

    closeModal();
  };

  render() {
    const { modal, error, success } = this.props;
    const { loading, repoNameInput } = this.state;

    return (
      <View>
        {modal.visible && (
          <Modal
            transparent
            visible={modal.visible}
            onRequestClose={() => {}}
            animationType="slide"
          >
            <View style={styles.container}>
              <View style={styles.form}>
                <Text style={styles.title}>Adicionar novo local</Text>
                <TextInput
                  style={styles.input}
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="usuáriono no Github"
                  underlineColorAndroid="transparent"
                  value={repoNameInput}
                  onChangeText={text => this.setState({ repoNameInput: text })}
                />

                <View style={styles.actions}>
                  <TouchableOpacity
                    style={styles.buttonCancel}
                    onPress={() => this.hideModal()}
                    activeOpacity={0.6}
                  >
                    <Text style={styles.buttonCancelText}>Cancelar</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.buttonSuccess}
                    onPress={() => this.addRepository()}
                    activeOpacity={0.6}
                  >
                    {loading ? (
                      <ActivityIndicator />
                    ) : (
                      <Text style={styles.buttonSuccessText}>Salvar</Text>
                    )}
                  </TouchableOpacity>
                </View>

                <View style={styles.outputContainer}>
                  {!!error && <Text style={styles.outputTextError}>{error}</Text>}
                  {!!success && <Text style={styles.outputTextSuccess}>{success}</Text>}
                </View>
              </View>
            </View>
          </Modal>
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
  error: state.repositories.error,
  success: state.repositories.success,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ModalCreators, ...RepositoriesCreators }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalRepository);
