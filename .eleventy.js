const { DateTime } = require("luxon");

module.exports = (config) => {
  config.addLayoutAlias("base", "layouts/base.njk");

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
    templateFormats: ["njk", "md", "11ty.js"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
  };
};
