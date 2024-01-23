module.exports = function (eleventyConfig) {
    // Set input and output directories
    eleventyConfig.addPassthroughCopy("src/style.css");
    eleventyConfig.addPassthroughCopy("src/img");
  
    // Set other configuration options
    return {
      dir: {
        input: "src",    // Input directory (source files)
        output: "dist",  // Output directory (generated files)
      },
      passthroughFileCopy: true,
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      dataTemplateEngine: "njk",
    };
  };