import * as React from 'react';
import * as css from './DotWaveSpinner.css';
import { Style } from './Spinner';

export interface IProps {
  style: Style;
}

export interface IState {
  dotStyle?: Style;
}

export default class DotWaveSpinner extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      dotStyle: {
        backgroundColor: props.style.color
      }
    };
  }

  render() {
    const { dotStyle } = this.state;
    return <div className={css.spinner}>
      <div className={css.dots}>
        <div className={css.dot1} style={dotStyle}/>
        <div className={css.dot2} style={dotStyle}/>
        <div className={css.dot3} style={dotStyle}/>
        <div className={css.dot4} style={dotStyle}/>
        <div className={css.dot5} style={dotStyle}/>
      </div>
    </div>;
  }
}
