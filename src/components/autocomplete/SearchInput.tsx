import * as React from 'react';
import * as style from './SearchInput.css';
import { UniqueItem } from '../../types/UniqueItem';

export interface IProps {
  onFilter?: (filter: string) => void;
  onFilterIconClick?: () => void;
  dataSet?: UniqueItem[];
  placeholder?: string;
}

export default class SearchInput extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    // this.onFilterIconClick = this.onFilterIconClick.bind(this);
  }

  onInputChange(event) {
    if (this.props.onFilter) {
      this.props.onFilter(event.target.value);
    }
  }

  // onFilterIconClick() {
  //   if (this.props.onFilterIconClick) {
  //     this.props.onFilterIconClick();
  //   }
  // }

  render() {
    const inputProps = {
      placeholder: this.props.placeholder
    };
    return <div className={style.container}>
      <span title='Buscar' className={style.searchIcon}>]</span>
      <input {...inputProps} onChange={this.onInputChange}/>
    </div>;
    // <span title='Filtrar' className={style.filtersIcon} onClick={this.onFilterIconClick}>]</span>
  }
}
