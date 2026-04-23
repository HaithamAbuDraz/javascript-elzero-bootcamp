/*
  Regular Expression

  Quantifiers
  n{x}   => Number of
  n{x,y} => Range
  n{x,}  => At Least x
*/

let serials = "S100S S3000S S50000S S950000S";

console.log(serials.match(/S\d{3}S/ig)); // S[Three Number]S S100S
console.log(serials.match(/S\d{4,5}S/ig)); // S[Four Or Five Number]S ['S3000S', 'S50000S']
console.log(serials.match(/S\d{4,}S/ig)); // S[At Least Four]S ['S3000S', 'S50000S', 'S950000S']
