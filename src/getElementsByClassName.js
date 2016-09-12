// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  node = node || document.body;
  var children = node.childNodes;
  var childrenLength = children.length;
  var classList = node.classList;
  var results = [];

  if (classList && classList.contains(className)) {results.push(node);}
  if (childrenLength > 0) {
    for (var i = 0; i < childrenLength; i++) {
      results = results.concat(getElementsByClassName(className, children[i]));
  	}
  }
  
  return results;
};
