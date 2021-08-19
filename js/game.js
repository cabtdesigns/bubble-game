var BubbleShoot = window.BubbleShoot || {};
BubbleShoot.Game = (function($){
    var Game = function(){
        this.init = function(){

            $(".but_game_start").bind("click",startGame);
        };
        var startGame = function(){
            $(".but_start_game").unbind("click");
            BubbleShoot.ui.hideDialog();
        };
    };
    return Game;
})(jQuery);