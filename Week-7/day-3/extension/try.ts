export function median(pool: number[]): number[] {
  let newArray = [];
  if (pool.length % 2 !== 0) {
    newArray.push(pool.sort()[Math.floor((pool.length - 1) / 2)]);
    return newArray;
  } else {
    newArray.push(pool.sort()[Math.floor((pool.length - 1) / 2)]);
    newArray.push(pool.sort()[Math.floor(pool.length / 2)]);
    return newArray;
  }
}

let pool = [1, 6, 3, 4];
console.log(median(pool));
