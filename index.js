var visit = require('unist-util-visit');


module.exports = function(ast) {
  var defs = {};
  var out  = [];

  function nodetoDef(a, b) {
    return {
      url: a.url || b.alt,
      alt: a.alt || b.alt,
    };
  }

  visit(ast, 'image', function(node, index, parent) {
    out.push(
      nodetoDef(node)
    );
  });

  visit(ast, 'definition', function(node, index, parent) {
    defs[node.identifier] = node;
  });

  visit(ast, 'imageReference', function(node, index, parent) {
    var id = node.identifier;

    if(defs.hasOwnProperty(id)) {
      var def = defs[id];

      if(def) {
        out.push(
          nodetoDef(def, node)
        );
      }
    }
  });

  return out;
};
