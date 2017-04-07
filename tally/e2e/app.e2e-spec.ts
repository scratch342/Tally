import { FlickrAppPage } from './app.po';

describe('flickr-app App', () => {
  let page: FlickrAppPage;

  beforeEach(() => {
    page = new FlickrAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
