import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/reviews-slider";
import "./scripts/skills";
import "./scripts/scroll";
import "./scripts/parallax";