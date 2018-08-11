import React from 'react';
import { CheckBox } from 'native-base'


export default class TaskChecker extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        checked: false,
      };
    }

    onPress = () => {
        const checked = !this.state.checked
        this.setState({ checked })
        this.props.onChanged(checked)
    }
  
    render() {
      const state = this.state;
      return (
        <CheckBox
          checked={state.checked}
          onPress={() => this.onPress()}
        />
      );
    }
  }