var N = 3;


var searchButton = document.getElementById('search');
var searchStepButton = document.getElementById('searchStep');
var randomizeButton = document.getElementById('randomize');
var boardSizeInput = document.getElementById('boardSize');
var startValuesButton = document.getElementById('startValues');
var distanceSpan = document.getElementById('searchResult');

var searchStepOptions = null;



var visualizationLimit = "10000";
var depthLimitVal = "0";

Board.setSize(N)
Visualization.setSize(N)
create_board_pieces()

//var game = new Game({n:N, state: "1 0 3 4 2 5 7 8 6"});
//var game = new Game({n:N, state: "3 7 0 1 2 5 8 4 6"});
//var game = new Game({n:N, state: "2 3 1 0"});
//var game = new Game({n:N, state: "1 2 3 4 5 0 7 8 9 6 10 12 13 14 11 15"});
var game = new Game({n:N});

Board.draw(game.state);

var boardDiv = document.getElementById('board');



randomizeButton.addEventListener('click', function() {
    Board.clearReplay();
    searchStepOptions = null;
    game.randomize();
    Board.draw(game.state);
}, false);

boardSizeInput.addEventListener('change', (event) => {

  	console.log("Mudando tamanho do tabuleiro")
  	N = parseInt(event.target.value, 10);

  	document.querySelectorAll('.board-item').forEach(function(a){
		a.remove()
	})

  	Board.clearReplay();
  	searchStepOptions = null;
  	Board.setSize(N)
	Visualization.setSize(N)
	create_board_pieces()

	delete game;
	game = new Game({n:N});

	Board.draw(game.state);
});

startValuesButton.addEventListener('click', function() { 
    let str_state = prompt('Entre com os valores iniciais, do topo esquerdo para o direito inferior, separados por um -, e.g. "2-3-1-4-5-8-7-0');

    if(str_state){
    	let final_state = "";
	    let splited = str_state.split("-");
	    for(let i=0; i<splited.length; i++){
	    	if(i == 0){
	    		final_state = splited[i];
	    	}
	    	else{
	    		final_state = final_state + " " + splited[i];
	    	}
	    }

	    Board.clearReplay();
	    searchStepOptions = null;

	    game.state = final_state;
	    Board.draw(game.state);
    }
    
}, false);


searchButton.addEventListener('click', function() {
    Board.clearReplay();
    searchStepOptions = null;

    var initialNode = new Node({state: game.state, size:N});
    var iterationLimit = parseInt(visualizationLimit, 10);
    var depthLimit = parseInt(depthLimitVal, 10);

    if (isNaN(iterationLimit))
        return alert('Invalid iteration limit');

    if (isNaN(depthLimit))
        return alert('Invalid depth limit');


    search({
        node: initialNode,
        iterationLimit: iterationLimit,
        depthLimit: depthLimit,
        expandCheckOptimization: false,
        size: N,
        callback: searchCallback
    });
}, false);


function searchCallback(err, options) {

    window.winnerNode = err ? null : options.node

    Board.draw(options.node.state);

    // Draw
    if (true) {
        var visualizationData = Visualization.importData(
            options.expandedNodes,
            options.frontierList,
            err ? null : options.node
        );
        Visualization.draw(visualizationData);
    }
}



searchStepButton.addEventListener('click', function() {
    Board.clearReplay();

    if (searchStepOptions)
        return search(searchStepOptions);

    var initialNode = new Node({state: game.state, size:N});
    var iterationLimit = parseInt(visualizationLimit, 10);
    var depthLimit = parseInt(depthLimitVal, 10);

    if (isNaN(iterationLimit))
        return alert('Invalid iteration limit');

    if (isNaN(depthLimit))
        return alert('Invalid depth limit');

    search({
        node: initialNode,
        iterationLimit: iterationLimit,
        depthLimit: depthLimit,
        expandCheckOptimization: false,
        stepCallback: stepCallback,
        callback: searchCallback
    });
}, false);



function stepCallback(options) {
    searchStepOptions = options;

    Board.draw(options.node.state);


    // Draw
    if (true) {
        var visualizationData = Visualization.importData(
            options.expandedNodes,
            options.frontierList,
            options.node,
            '#ffb366'
        );
    }
    Visualization.draw(visualizationData);
}