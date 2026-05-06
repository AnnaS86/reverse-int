module.exports = function reverse(n) {
  const modul = Math.abs(n);
  const result = Array.from(String(modul)).reverse().join('');
  return Number(result);
};
