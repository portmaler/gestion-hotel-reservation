import { HotelCrud5Page } from './app.po';

describe('hotel-crud5 App', function() {
  let page: HotelCrud5Page;

  beforeEach(() => {
    page = new HotelCrud5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
