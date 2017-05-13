import { BootstrapMoikaPage } from './app.po';

describe('bootstrap-moika App', () => {
  let page: BootstrapMoikaPage;

  beforeEach(() => {
    page = new BootstrapMoikaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
