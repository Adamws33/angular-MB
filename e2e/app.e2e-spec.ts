import { MessageBoardPage } from './app.po';

describe('message-board App', function() {
  let page: MessageBoardPage;

  beforeEach(() => {
    page = new MessageBoardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
