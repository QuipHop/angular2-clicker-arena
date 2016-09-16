import { ClickerPage } from './app.po';

describe('clicker App', function() {
  let page: ClickerPage;

  beforeEach(() => {
    page = new ClickerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
