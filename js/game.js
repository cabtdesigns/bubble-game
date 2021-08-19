var BubbleShoot = window.BubbleShoot || {};
BubbleShoot.Game = (function($){
    var Game = function(){
        this.init = function(){

            $(".but_game_start").bind("click",startGame);
        };
        var startGame = function(){
        };
    };
    return Game;
}) (jQuery);