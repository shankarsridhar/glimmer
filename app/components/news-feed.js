import Component from '@glimmer/component';

export default class NewsFeed extends Component {
  feedData = [...new Array(5000).keys()];

  setScrollPosition(element, [scrollPosition]) {
    element.scrollTop = scrollPosition;
  }
}
