/*
  Describes a general banner on a page
*/

"use strict";

const e = React.createElement;

class AboutBanner extends React.Component {
  constructor(props) {
    super(props);
    console.log("e?", JSON.stringify(props));
  }

  render() {
    return e(
      "section",
      {
        className: "p-8 ",
      },
      `Lol deserved`
    );
  }
}

var AboutBannerFactory = React.createFactory(AboutBanner);

const elements = document.querySelectorAll(".about_banner");
elements.forEach((domContainer) => {
  const innerHtml = domContainer.innerHTML;
  console.log("innerHtml", innerHtml);
  ReactDOM.render(
    e(AboutBannerFactory({ originalText: innerHtml })),
    domContainer
  );
});
