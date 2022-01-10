const player = {
    x: 0,
    y: 0,

    move(nextPoint) {
        /*
            Возможность при нажатии 1, 3, 7, 9 перемещаться вдоль стенки оставил специально.
            Во многих бродилках наличие вектора направления по диагонали и стенки спереди позволяет перемещаться вбок.
        */
        if (nextPoint.x >= 0 && nextPoint.x < config.rowsCount) {
            this.x = nextPoint.x;
        }
        if (nextPoint.y >= 0 && nextPoint.y < config.colsCount) {
            this.y = nextPoint.y;
        }
        
    }
}