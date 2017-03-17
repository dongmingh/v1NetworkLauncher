import { HyperledgerUiPage } from './app.po';

describe('hyperledger-ui App', () => {
  let page: HyperledgerUiPage;

  beforeEach(() => {
    page = new HyperledgerUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
