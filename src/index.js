module.exports = function towelSort (matrix = []) {
  let res = [];

  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {

          let colId = (i % 2 === 0) ? j : (matrix[i].length - 1 - j);

          res.push(matrix[i][colId])
      }
  }

  return res
};
