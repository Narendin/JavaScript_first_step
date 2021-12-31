let renderer = {
    map: "", // все, что надо отобразить
    
    render() {
        for (let row = 0; row < config.rowsCount; row++) {
            for (let col = 0; col < config.rowsCount; col++) {
                if (player.y === row && player.x === col) {
                    this.map += "o "
                } else {
                this.map += "x ";
                }
            }
            this.map += "\n";
        }
        console.log(this.map);
    },

    clear() {
        console.clear();
        this.map = "";
    },
};