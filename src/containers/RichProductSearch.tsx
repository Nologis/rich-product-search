import * as React from 'react';

import { Logger } from '@nologis/utils';
import { Autocomplete, UniqueItem } from '@nologis/ui-components';
import NologisAPI from '../api/NologisAPI';

export interface IProps {
  apiKey: string;
}

const dataset: UniqueItem[] = [
  { uuid: '1', label: 'uno' },
  { uuid: '2', label: 'dos' },
  { uuid: '3', label: 'tres' },
  { uuid: '4', label: 'cuatro' }
];

function itemClick(item: UniqueItem) {
  Logger.trace('Click over', item);
}

export default class RichProductSearch extends React.Component<IProps, {}> {
  nologisAPI: NologisAPI;

  constructor(props: IProps) {
    super(props);

    this.nologisAPI = new NologisAPI(props.apiKey);
    this.searchFunction = this.searchFunction.bind(this);
  }

  searchFunction(inputValue: string): Promise<UniqueItem[]> {
    return this.nologisAPI.autoCompleteSearch(inputValue);
  }


  render() {
    const { apiKey } = this.props;
    if (!apiKey) {
      return <h1>API Key not found!</h1>;
    }
    return <Autocomplete placeholder="Search ddd"
                         dataset={dataset}
                         filterFunction={this.searchFunction}
                         onItemClick={itemClick}/>;
  }
}
