import { ProductDetailsPage } from './app.po';

describe('product-details App', () => {
  let page: ProductDetailsPage;

  beforeEach(() => {
    page = new ProductDetailsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
