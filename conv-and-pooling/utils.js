function convolute(image, filter) {
  let result = [];
  for (let i=0; i < image.length - filter.length + 1; i++) {
    result.push([]);
    for (let j=0; j < image[0].length - filter[0].length + 1; j++) {
      let sum = 0;
      for (let k=0; k < filter.length; k++) {
        for (let l=0; l < filter[0].length; l++) {
          sum += image[i + k][j + l] * filter[k][l];
        }
      }
      result[i].push(sum);
    }
  }
  return result;
}

function pooling(image, poolingTtype) {
  let result = [];
  for (let i=0; i < image.length; i += 2) {
    result.push([]);
    for (let j=0; j < image[0].length; j += 2) {
      let num = poolingTtype == 'min' ? 255 : 0;
      for (let k=0; k < 2; k++) {
        for (let l=0; l < 2; l++) {
          if (poolingTtype == 'max' && image[i + k][j + l] > num) {
            num = image[i + k][j + l];
          } else if (poolingTtype == 'average') {
            num += image[i + k][j + l] / 4;
          } else if (poolingTtype == 'min' && image[i + k][j + l] < num) {
            num = image[i + k][j + l];
          }
        }
      }
      result[i / 2].push(num);
    }
  }
  return result;
}