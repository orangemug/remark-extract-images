var assert              = require("assert");
var remark              = require("remark");
var readmeTester        = require("readme-tester");
var remarkExtractImages = require("../");


var tests = [
  {
    title: "simple",
    html: [
      "![simple](simple.png)"
    ],
    result: [
      {
        alt: "simple",
        url: "simple.png"
      }
    ]
  },
  {
    title: "definition",
    html: [
      "![simple][the_ref]",
      "[the_ref]: simple.png"
    ],
    result: [
      {
        alt: "simple",
        url: "simple.png"
      }
    ]
  },
  {
    title: "broken definition",
    html: [
      "![simple][the_ref]",
    ],
    result: [
      // Nothing...
    ]
  },
]


describe("remark-extract-images", function() {

  tests.forEach(function(test) {
    it(test.title, function() {
      var html = test.html.join("\n");
      var ast = remark().parse(html);
      var images = remarkExtractImages(ast);
      assert.deepEqual(images, test.result);
    });
  });

  it("README", function(done) {
    readmeTester(__dirname+"/../README.md", function(err) {
      assert.ifError(err);
      done();
    })
  });
});
