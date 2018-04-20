import { UniqueItem } from '@nologis/ui-components';

export function jsonParser(data) {
  return data.json();
}

export function uniqueItemParser(data): UniqueItem[] {
  return data.map(items => {
    return { ...items };
  });
}
