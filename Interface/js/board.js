var Board = {};

Board.size = 3;

Board.setSize = function(n){
    Board.size = n;
}

Board.elements = {};

Board.draw = function(state) {
    state.split(' ').forEach(function(item, index) {
        if (item == '0') return;

        var element = Board.elements[item];
        var row = Math.floor(index / Board.size);
        var column = index % Board.size;

        element.style.top = (row * element.offsetHeight) + 'px';
        element.style.left = (column * element.offsetWidth) + 'px';
    });
}

Board.replayTimeout = null;
Board.replayAnimationTimeout = null;

Board.replay = function(moves) {
    Board.clearReplay();

    var initialState = moves.shift();
    Board.draw(initialState);
    window.network.selectNodes([initialState]);
    window.network.focus(initialState, { scale: 0.75 });
    window.isReplaying = true;
    var btn = document.getElementById('replayButton'); btn && (btn.textContent = 'Stop replaying');

    var animate = function(moves) {
        var move = moves.shift();
        if (!move) return Board.clearReplay();
        Board.draw(move);
        window.network.selectNodes([move]);
        window.network.focus(move, { scale: 0.75, animation: true });
        Board.replayAnimationTimeout = setTimeout(animate.bind(null, moves), 1000);
    };

    Board.replayTimeout = setTimeout(function() {
        animate(moves);
    }, 1000);
};


Board.clearReplay = function() {
    clearTimeout(Board.replayTimeout);
    clearTimeout(Board.replayAnimationTimeout);
    boardDiv.classList.remove('animation');
    window.isReplaying = false;
    var btn = document.getElementById('replayButton'); btn && (btn.textContent = 'Replay solution');
};


function create_board_pieces(){
  for(let i=1; i< Board.size*Board.size; i++){
    let id = i.toString();

    let node = document.createElement("div");  
    let textnode = document.createTextNode(id);
    node.appendChild(textnode);
    node.setAttribute("id", "board-item-" + id);
    node.classList.add("board-item");

    document.getElementById("board").appendChild(node);

    Board.elements[id] = document.getElementById("board-item-" + id);
  } 

   let dimension = (50 *  Board.size).toString();
   document.getElementById("board").style.height = dimension + "px";
   document.getElementById("board").style.width = dimension + "px";

   document.getElementById("controls").style.top = (120 + ((Board.size - 2) * 50)).toString() + "px";
}