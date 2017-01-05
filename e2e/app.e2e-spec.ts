import { Ng2gsp7Page } from './app.po';

describe('ng2gsp7 App', function() {
  let page: Ng2gsp7Page;

  beforeEach(() => {
    page = new Ng2gsp7Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
