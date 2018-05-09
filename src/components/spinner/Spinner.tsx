import * as React from 'react';
import DotWaveSpinner from './DotWaveSpinner';

export interface Style {
  color?: string;
  backgroundColor?: string;
}

export enum SpinnerType {
  DOT_WAVE_SPINNER
}

export interface IProps {
  type: SpinnerType;
  color?: string
}

export interface IState {
  style?: Style;
}

export default class Spinner extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      style: {
        color: props.color || '#7c96b1'
      }
    };
  }

  renderSpinnerByType() {
    const { style } = this.state;
    switch (this.props.type) {
      case SpinnerType.DOT_WAVE_SPINNER:
        return <DotWaveSpinner style={style}/>;
      default:
        return <h1>{this.props.type}</h1>;
    }
  }

  render() {
    return this.renderSpinnerByType();
  }
}
