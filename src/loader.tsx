import { Logger } from '@nologis/utils';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import RichProductSearch from './containers/RichProductSearch';

declare global {
  interface Window {
    nologisRichProductSearch: Loader;
  }
}

export function loader() {
  window.nologisRichProductSearch = new Loader();
}

export class Loader {
  readonly element: string;
  private richProductSearchComponent: RichProductSearch;

  constructor(element = 'nologis-rich-product-search') {
    this.element = element;
    let autoload = false;
    const mapElement = document.getElementById(element);
    if (mapElement) {
      autoload = mapElement.getAttribute('data-autoload') === 'true';
      if (autoload) {
        this.load();
      }
    }
  }

  load() {
    const container = document.getElementById(this.element);
    if (container) {
      const apiKey = container.getAttribute('data-api-key');
      ReactDOM.render(<RichProductSearch ref={c => this.richProductSearchComponent = c} apiKey={apiKey}/>, container);
    }
  }
}

