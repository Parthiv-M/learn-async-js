const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

const negRow = (row) => {
    return new Promise((resolve, reject) => {
        // handle
        if (Array.isArray(row)) {
            for (let i = 0; i < row.length; i++) {
                if (row[i] < 0) {
                    resolve(true);
                }
            }
        } else {
            reject("Err: Invalid array");
        }
    });
}

let negPromises = []
for(let i = 0; i < array2D.length; i++) {
    negPromises.push(negRow(array2D[i]));
    Promise.any(negPromises).then((res) => {
        for(let j = 0; j < array2D[i].length; j++) {
            console.log(array2D[i][j]);
        }
    })
} 