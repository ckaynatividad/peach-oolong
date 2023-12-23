import React from "react";
const bannerURL = process.env.REACT_APP_BANNER_URL;
const divStyle = {
  background: `url(${bannerURL}) center
  center/cover no-repeat`,
};

export default function Banner() {
  return <div style={divStyle} className="banner"></div>;
}
