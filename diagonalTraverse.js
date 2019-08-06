var findDiagonalOrder = function(matrix) {
    if (!matrix.length || !matrix[0].length) {
        return [];
    }
    
    var index = 0;
    var result = new Array(matrix.length * matrix[0].length);
    var rowLength = matrix.length;
    var colLength = matrix[0].length;
    var directionUp = true; 
    var row = 0;
    var col = 0;
    
    while (index < result.length) {
        if (directionUp) {
            while (row >= 0 && col < colLength) {
                result[index++] = matrix[row][col];
                row--;
                col++;
            }
            
            if (row < 0 && col < colLength) {
                row++;
            } else {
                row += 2;
                col--;
            }
        } else {
            while (col >= 0 && row < rowLength) {
                result[index++] = matrix[row][col];
                row++;
                col--;
            }
            
            if (col < 0 && row < rowLength) {
                col++;
            } else {
                col += 2;
                row--;
            }
        }
        
        directionUp = !directionUp;
    }
    
    return result;
};