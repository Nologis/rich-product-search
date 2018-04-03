import { init } from '../src';

describe('Index', () => {
  it('Should render the RichProductSearch if exists component and apiKey in the document', () => {
    init();
    expect(window.nologis.richProductSearch).toBeDefined();
  });
});
