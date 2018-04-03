import { Logger } from '@nologis/utils';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import RichProductSearch from './containers/RichProductSearch';

declare global {
  interface Window {  // tslint:disable-line
    nologis: {
      richProductSearch: RichProductSearch
    };
  }
}


export function init() {
  const component = document.getElementById('nologis-rich-product-search');
  if (component) {
    const apiKey = component.getAttribute('data-api-key');
    if (apiKey) {
      ReactDOM.render(<RichProductSearch ref={c => window.nologis.richProductSearch = c} apiKey={apiKey}/>, component);
    } else {
      Logger.error('Invalid apiKey');
    }
  } else {
    Logger.error('No nologis-rich-product-search found');
  }
}

init();

