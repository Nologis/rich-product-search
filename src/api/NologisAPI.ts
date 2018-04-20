import { UniqueItem } from '@nologis/ui-components';
import { Logger } from '@nologis/utils';

const API_HOST = 'https://api.nologis.com/v1/products';

export default class NologisAPI {
  apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  autoCompleteSearch(inputValue: string): Promise<UniqueItem[]> {
    return new Promise<UniqueItem[]>((resolve, reject) => {
      // FIXME change for real implementation
      setTimeout(() => {
        Logger.trace('Filter', inputValue);
        resolve([
          { uuid: '2', label: 'dos' },
          { uuid: '3', label: 'tres' }
        ]);
      }, 6000);
      // TODO: this is the real implementation
      // fetch(`${API_HOST}/search?=%${inputValue}`)
      //   .then(jsonParser)
      //   .then(uniqueItemParser)
      //   .catch(err => reject(err));
    });
  }
}
