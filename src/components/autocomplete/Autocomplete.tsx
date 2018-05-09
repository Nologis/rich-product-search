import * as React from 'react';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import { Logger } from '@nologis/utils';
import { default as Spinner, SpinnerType } from '../spinner/Spinner';
import { UniqueItem } from '../../types/UniqueItem';

export interface IProps {
  filterFunction?: (inputValue: string) => Promise<UniqueItem[]>;
  filterItems?: (inputValue: string, itemToFilter: UniqueItem) => boolean;
  dataset?: UniqueItem[];
  placeholder?: string;

  onItemClick?: (item: UniqueItem) => void;
}

export interface IState {
  collapsed: boolean;
  filterResults?: UniqueItem[];
  loading?: boolean;
}

export class Autocomplete extends React.Component<IProps, IState> {
  private container: HTMLDivElement;

  constructor(props: IProps) {
    super(props);
    this.state = {
      collapsed: true,
      filterResults: props.dataset || [],
      loading: false
    };

    this.handleFilter = this.handleFilter.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  simpleFilter(inputValue: string) {
    const newValues = this.props.dataset.filter(item => item.label.indexOf(inputValue) >= 0);
    this.setState({ filterResults: newValues });
  }

  handleOutsideClick(event: any) {
    if (this.container.contains(event.target)) {
      return;
    }
    this.setCollapse(true);
  }

  updateCollapsed(inputValue: string) {
    const collapsed = !(this.state.filterResults && this.state.filterResults.length > 0 && inputValue.length > 0);
    this.setCollapse(collapsed);
    this.setState({ collapsed });
  }

  setCollapse(collapsed: boolean) {
    if (collapsed) {
      document.removeEventListener('click', this.handleOutsideClick, false);
    } else {
      document.addEventListener('click', this.handleOutsideClick, false);
    }
    Logger.trace('Collapsed', collapsed);
    this.setState({ collapsed });
  }

  handleFilter(inputValue: string) {
    if (this.props.filterFunction) {
      this.setState({ loading: true, filterResults: [] });
      this.props.filterFunction(inputValue).then(newValues => {
        this.setState({ loading: false, filterResults: newValues });
        this.updateCollapsed(inputValue);
      }).catch(err => {
        this.setState({ loading: false });
        Logger.networkError('HandleFilter', inputValue, err);
      });
    } else if (this.props.filterItems) {
      const newValues = this.props.dataset.filter(item => {
        return this.props.filterItems(inputValue, item);
      });
      this.setState({ filterResults: newValues });
      this.updateCollapsed(inputValue);
    } else {
      this.simpleFilter(inputValue);
      this.updateCollapsed(inputValue);
    }
  }

  handleItemClick(item: UniqueItem) {
    if (this.props.onItemClick) {
      this.props.onItemClick(item);
    }
  }

  render() {
    const { collapsed, filterResults, loading } = this.state;
    const inputProps = {
      placeholder: this.props.placeholder
    };
    return <div ref={c => this.container = c}>
      <SearchInput onFilter={this.handleFilter} {...inputProps}/>
      {loading && <Spinner type={SpinnerType.DOT_WAVE_SPINNER}/>}
      {!collapsed && <SearchResults results={filterResults} onSelect={this.handleItemClick}/>}
    </div>;
  }
}
