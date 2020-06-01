const { DateTime } = require("luxon");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = (config) => {
  config.addLayoutAlias("base", "layouts/base.njk");
  config.addLayoutAlias("event", "layouts/event.md");

  config.addFilter("dateDisplay", (dateObj, format = "LLL d, y") => {
    return DateTime.fromJSDate(dateObj, {
      zone: "utc",
    }).toFormat(format);
  });

  config.addPassthroughCopy("site/css");
  config.addPassthroughCopy("site/images");

  config.addPlugin(eleventyNavigationPlugin);

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
