import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {},
  input: {
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 20,
    height: 40,
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  container: {
  },
});

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
    };
  }

  handleChangeText(text) {
    const { onChange } = this.props;

    this.setState({
      text,
    }, () => {
      onChange(text);
    });
  }

  render() {
    const { text } = this.state;

    return (
      <View stlye={styles.container}>
        <Text stlye={styles.text}>You can search here:</Text>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={text => this.handleChangeText(text)}
        />
      </View>
    );
  }
}
