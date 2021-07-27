function stringLength(string) {
  if (string.length < 1 || string.length > 10) {
    try {
      if(string.length <= 1) throw "One or More please";
      if(string.length >= 10) throw "10 or Less Please";
    } catch(err) {
      return err;
    }
  } else {
    return string.length;
  }
}

module.exports = stringLength;