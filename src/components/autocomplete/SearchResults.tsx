import * as React from 'react';
import * as style from './SearchResults.css';
import { UniqueItem } from '../../types/UniqueItem';
import SearchResultItem from './SearchResultItem';

export interface IProps {
  results: UniqueItem[];
  onSelect?: (item: UniqueItem) => void;
}

export default class SearchResults extends React.Component<IProps, {}> {

  constructor(props: IProps) {
    super(props);

    this.handleOnSelect = this.handleOnSelect.bind(this);
  }

  handleOnSelect(item: UniqueItem) {
    if (this.props.onSelect) {
      this.props.onSelect(item);
    }
  }

  render() {
    const { results } = this.props;
    return <div className={style.container}>
      {results.map(result => <SearchResultItem key={result.uuid} value={result} onSelect={this.handleOnSelect}/>)}
    </div>;
  }
}
