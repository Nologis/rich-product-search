import * as React from 'react';

export interface IProps {
  apiKey: string;
}

export default class RichProductSearch extends React.Component<IProps, {}> {
  render() {
    const { apiKey } = this.props;
    if (!apiKey) {
      return <h1>API Key not found!</h1>;
    }
    return <h1>RichProductSearch</h1>;
  }
}
