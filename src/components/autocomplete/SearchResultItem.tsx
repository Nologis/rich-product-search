import * as React from 'react';
import * as style from './SearchResultItem.css';
import { UniqueItem } from '../../types/UniqueItem';

export interface IProps {
  value?: UniqueItem;
  onSelect?: (value: UniqueItem) => void;
  itemComponent?: any;
}

export default class SearchResultItem extends React.Component<IProps, {}> {

  constructor(props: IProps) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.getDefaultItemComponent = this.getDefaultItemComponent.bind(this);
  }

  handleSelect() {
    if (this.props.onSelect) {
      this.props.onSelect(this.props.value);
    }
  }

  getDefaultItemComponent() {
    return <span>{this.props.value.label}</span>;
  }

  render() {
    const { itemComponent } = this.props;
    const component = itemComponent ? itemComponent : this.getDefaultItemComponent();
    return <div className={style.container} onClick={this.handleSelect}>
      {component}
    </div>;
  }
}
