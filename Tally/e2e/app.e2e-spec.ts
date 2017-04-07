import { TallyPage } from './app.po';

describe('tally App', () => {
  let page: TallyPage;

  beforeEach(() => {
    page = new TallyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
