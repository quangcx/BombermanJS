(function() {
    var game = new Phaser.Game(1000, 580, Phaser.AUTO, 'bomberman');

    game.state.add('Boot', Game.Boot);
    game.state.add('Preloader', Game.Preloader);
    game.state.add('MainMenu', Game.MainMenu);
    game.state.add('Game', Game.Game);
    game.state.add('ChangeStage', Game.ChangeStage);
    
    game.state.start('Boot');    
})();