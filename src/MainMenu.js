Game.MainMenu = function(game) {};

Game.MainMenu.prototype = {
    
    create: function() {
        this.world.setBounds(0, 0, this.game.width, this.game.height);
        
        var title = this.add.sprite((this.game.world.centerX - 340), (this.game.world.centerY - 260), 'menu-title');
        title.smoothed = false;
        title.scale.setTo(3.0, 3.0);
        
        var start = this.add.text((this.game.world.centerX - 180), (this.game.world.centerY + 170), 'START', {
            font: '19px BitBold',
            fill: 'white',
            stroke: 'black',
            strokeThickness: 2.5
        });
        start.inputEnabled = true;
        start.input.useHandCursor = true;
        start.events.onInputDown.add(function(){
            this.sound.stopAll();
            
            var stageBomberman = {
                stage: 1,
                lives: 3,
                points: 0,
                time: 190,
                status: 'start',
                stage_enemies: [['ballon'], ['ballon', 'snow'], ['snow', 'cookie'], ['cookie', 'ghost'], ['barrel', 'bear']]
            };
            
            stageBomberman.stage_points = stageBomberman.points;
            stageBomberman.stage_time = stageBomberman.time;
            
            this.state.start('ChangeStage', true, false, stageBomberman);
        }, this);
        
        var continueGame = this.add.text((this.game.world.centerX + 90), (this.game.world.centerY + 170), 'CONTINUE', {
            font : '19px BitBold',
            fill: 'white',
            stroke: 'black',
            strokeThickness: 2.5,
            cursor: 'pointer'
        });
        continueGame.inputEnabled = true;
        continueGame.input.useHandCursor = true;
        continueGame.events.onInputDown.add(function() {
            
        }, this);
        
        var top = this.add.text((this.game.world.centerX - 180), (this.game.world.centerY + 200), 'TOP', {
            font : '19px BitBold',
            fill: 'white',
            stroke: 'black',
            strokeThickness: 2.5
        });
        
        var hightScore = this.add.text((this.game.world.centerX + 90), (this.game.world.centerY + 200), (localStorage.getItem('HightScore') || 0), {
            font : '19px BitBold',
            fill: 'white',
            stroke: 'black',
            strokeThickness: 2.5
        });
        
        var description = this.add.text((this.game.world.centerX - 260), (this.game.world.centerY + 250), 'Hướng dẫn cách chơi. Dùng phím F để đặt Bomb và phím dấu cách để nổ Bomb', {
            font : '18px',
            fill: 'white',
            stroke: 'black',
            strokeThickness: 2.5
        });
        
        var soundTitleScreen = this.add.audio('title-screen');
        soundTitleScreen.loopFull();
    }
}