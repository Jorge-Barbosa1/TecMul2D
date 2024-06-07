const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene:{
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

const gameState = {};

gameState.preload = function() {
    //Carregar o mapa do Tiled
    this.load.tilemapTiledJSON('map', 'assets/map.json');
    this.load.image('tiles', 'assets/tileset.png');
};

gameState.create = function() {
    //Criar o mapa
    const map = this.make.tilemap({ key: 'map' });
    const tileset = map.addTilesetImage('tileset', 'tiles');

    //Render das camadas
    const ground = map.createStaticLayer('ground', tileset);
    const background = map.createStaticLayer('background', tileset);

    //Definir colisão
    this.physics.add.collider(player,ground);
};


gameState.update = function() {
    //Interação do mapa e player
}

game.scene.add('Game', gameState);
game.scene.start('Game');
