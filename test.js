var isNode = require("./");

it('is true if the platform is nodejs', function(){
  expect(isNode).to.be.equal(typeof window == 'undefined');
});
