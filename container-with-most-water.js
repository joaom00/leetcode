/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxArea = 0;

  height.forEach((primaryLine, index1) => {
    height.forEach((secondLine, index2) => {
      // Calculate rectangle width
      const width = index2 - index1;
      // Calculate rectangle height
      const height = Math.min(primaryLine, secondLine);
      // Calculate area
      const area = width * height;
      // Check if `area` is greater than `maxArea`
      if (area > maxArea) maxArea = area;
    });
  });

  return maxArea;
};
