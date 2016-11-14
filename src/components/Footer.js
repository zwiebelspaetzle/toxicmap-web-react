import React, {Component} from "react";

class Footer extends Component {
  disclaimerClicked() {
    // disclaimer.open();
  }
  render() {
    return (
      <footer>
        <div className="left">
          <a href="javascript:void(0);" onClick={this.disclaimerClicked} className="text-link">Disclaimer</a>
        </div>
        <div className="fb-share-button" data-href="http://www.toxicmap.com" data-layout="button"></div>
        <a href="https://flattr.com/submit/auto?user_id=zwiebelspaetzle&url=http%3A%2F%2Fwww.toxicmap.com" target="_blank"><img src="//button.flattr.com/flattr-badge-large.png" alt="Flattr this" title="Flattr this" /></a>
      </footer>
    );
  }
}

export default Footer;
