var N = 3;
var testing_search = true;


var searchButton = document.getElementById('search');
var searchStepButton = document.getElementById('searchStep');
var searchStepOptions = null;



var visualizationLimit = "10000";
var depthLimitVal = "0";

Board.setSize(N)
Visualization.setSize(N)
create_board_pieces()

var game = new Game({n:N, state: "1 2 3 4 0 5 7 8 6"});
//var game = new Game({n:N});

Board.draw(game.state);

var boardDiv = document.getElementById('board');



/**********    EX N=3   **********/
if(N == 3 && !testing_search){
	let no0 = new Node({state: "2 6 3 8 0 4 1 7 5", parent: null, cost: 0, depth: 0, size:N})
	let no1 = new Node({state: "2 6 3 0 8 4 1 7 5", parent: no0, cost: 1, depth: 1, size:N})
	let no2 = new Node({state: "2 6 3 1 8 4 0 7 5", parent: no1, cost: 2, depth: 2, size:N})

	console.log(no0)

	let frontierList = [
	new Node({state: "2 6 3 8 4 0 1 7 5", parent: no0, cost: 1, depth: 1, size:N}),
	new Node({state: "2 0 3 8 6 4 1 7 5", parent: no0, cost: 1, depth: 1, size:N}),
	new Node({state: "2 6 3 8 7 4 1 0 5", parent: no0, cost: 1, depth: 1, size:N}),
	new Node({state: "0 6 3 2 8 4 1 7 5", parent: no1, cost: 2, depth: 2, size:N})]



	let expandedNodes = {}

	expandedNodes["2 6 3 0 8 4 1 7 5"] = no0;
	expandedNodes["2 6 3 8 0 4 1 7 5"] = no1;


	/**********    EX N=3  FIM  **********/

	var visualizationData = Visualization.importData(
    expandedNodes,
    frontierList,
    no1,
    '#ffb366'
	);

	console.log("todos",visualizationData)


	console.log("a",expandedNodes)
	console.log("b",frontierList)
	console.log("c",no2)
	Visualization.draw(visualizationData);
}
else if(N == 2 && !testing_search){
/**********    EX N=2   **********/

	let no0 = new Node({state: "2 3 1 0", parent: null, cost: 0, depth: 0, size:N})
	let no1 = new Node({state: "2 0 1 3", parent: no0, cost: 1, depth: 1, size:N})


	let frontierList = [
	new Node({state: "2 3 0 1", parent: no0, cost: 1, depth: 1, size:N}),
	new Node({state: "1 2 3 0", parent: no1, cost: 2, depth: 2, size:N})]


	let expandedNodes = {}

	expandedNodes["2 3 1 0"] = no0;
	expandedNodes["2 0 1 3"] = no1;

/**********    EX N=2  FIM  **********/

	var visualizationData = Visualization.importData(
    expandedNodes,
    frontierList,
    no1,
    '#ffb366'
	);

	console.log("todos",visualizationData)


	console.log("a",expandedNodes)
	console.log("b",frontierList)
	console.log("c",no1)
	Visualization.draw(visualizationData);
}
else if(N == 4 && !testing_search){
	let no0 = new Node({state: "2 6 3 8 0 4 1 7 5 9 10 11 12 13 14 15", parent: null, cost: 0, depth: 0, size:N})
	let no1 = new Node({state: "2 6 3 0 8 4 1 7 5 9 10 11 12 13 14 15", parent: no0, cost: 1, depth: 1, size:N})
	let no2 = new Node({state: "2 6 3 1 8 4 0 7 5 9 10 11 12 13 14 15", parent: no1, cost: 2, depth: 2, size:N})

	console.log(no0)

	let frontierList = [
	new Node({state: "2 6 3 8 4 0 1 7 5 9 10 11 12 13 14 15", parent: no0, cost: 1, depth: 1, size:N}),
	new Node({state: "2 0 3 8 6 4 1 7 5 9 10 11 12 13 14 15", parent: no0, cost: 1, depth: 1, size:N}),
	new Node({state: "2 6 3 8 7 4 1 0 5 9 10 11 12 13 14 15", parent: no0, cost: 1, depth: 1, size:N}),
	new Node({state: "0 6 3 2 8 4 1 7 5 9 10 11 12 13 14 15", parent: no1, cost: 2, depth: 2, size:N})]



	let expandedNodes = {}

	expandedNodes["2 6 3 0 8 4 1 7 5 9 10 11 12 13 14 15"] = no0;
	expandedNodes["2 6 3 8 0 4 1 7 5 9 10 11 12 13 14 15"] = no1;


	/**********    EX N=3  FIM  **********/

	var visualizationData = Visualization.importData(
    expandedNodes,
    frontierList,
    no1,
    '#ffb366'
	);

	console.log("todos",visualizationData)


	console.log("a",expandedNodes)
	console.log("b",frontierList)
	console.log("c",no2)
	Visualization.draw(visualizationData);
}
else{

}







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
        type: "aStar",
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
        type: "aStar",
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