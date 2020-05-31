const { DateTime } = require("luxon");

module.exports = (config) => {
  config.addLayoutAlias("default", "layouts/base.njk");

  config.addFilter("dateDisplay", (dateObj, format = "LLL d, y") => {
    return DateTime.fromJSDate(dateObj, {
      zone: "utc",
    }).toFormat(format);
  });

  config.addPassthroughCopy("site/css");
  config.addPassthroughCopy("site/images");

  return {
    dir: {
      input: "site",
      includes: "_includes",
      data: "_data",
      output: "public",
    },
    passthroughFileCopy: true,
  };
};