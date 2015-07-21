var should = require('chai').should();
//var path = require('path');
var cp = require('child_process');

describe('Mocha + Chai', function() {
  it('truthiness', function () {
    true.should.equal(true);
  });
});

describe('CLI', function() {
  it('should work for a one-word name and capitalize all letters despite being put in in lowercase', function (done) {
    cp.execFile('./cheers.js', ["mari"], function (err, stdout) {
      stdout.should.equal('Give me an M!\nGive me an A!\nGive me an R!\nGive me an I!\n')
      done();
    })
  });

  it('should insert an instead of a for any letter in halfnorsemix', function (done) {
    cp.execFile('./cheers.js', ["halfnorsemix"], function (err, stdout) {
      stdout.should.equal('Give me an H!\nGive me an A!\nGive me an L!\nGive me an F!\nGive me an N!\nGive me an O!\nGive me an R!\nGive me an S!\nGive me an E!\nGive me an M!\nGive me an I!\nGive me an X!\n')
      done();
    })
  });

  it('should work for a multi-word name and not insert spaces into the cheers', function (done) {
    cp.execFile('./cheers.js', ["bob", "marley"], function (err, stdout) {
      //console.log(err);
      stdout.should.equal('Give me a B!\nGive me an O!\nGive me a B!\nGive me an M!\nGive me an A!\nGive me an R!\nGive me an L!\nGive me an E!\nGive me a Y!\n')
      done();
    })
  });

  it('should work even if the name is put in in all caps', function (done) {
    cp.execFile('./cheers.js', ["MARI"], function (err, stdout) {
      stdout.should.equal('Give me an M!\nGive me an A!\nGive me an R!\nGive me an I!\n')
      done();
    })
  });

  it('should work with nonenglish/extended characters', function (done) {
    cp.execFile('./cheers.js', ["中小野田"], function (err, stdout) {
      stdout.should.equal('Give me a 中!\nGive me a 小!\nGive me a 野!\nGive me a 田!\n')
      done();
    })
  });

  it('should work with nonalphabet characters', function (done) {
    cp.execFile('./cheers.js', ["$#&@"], function (err, stdout) {
      stdout.should.equal('Give me a $!\nGive me a #!\nGive me a &!\nGive me a @!\n')
      done();
    })
  });

});
