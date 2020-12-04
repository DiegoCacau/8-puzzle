var N = 3;


Board.setSize(N)
Visualization.setSize(N)
create_board_pieces()


var game = new Game({n:N});

Board.draw(game.state);

var boardDiv = document.getElementById('board');



/**********    EX N=3   **********/
if(N == 3){
	let no0 = new Node({state: "2 6 3 8 0 4 1 7 5", parent: null, cost: 0, depth: 0})
	let no1 = new Node({state: "2 6 3 0 8 4 1 7 5", parent: no0, cost: 1, depth: 1})
	let no2 = new Node({state: "2 6 3 1 8 4 0 7 5", parent: no1, cost: 2, depth: 2})

	console.log(no0)

	let frontierList = [
	new Node({state: "2 6 3 8 4 0 1 7 5", parent: no0, cost: 1, depth: 1}),
	new Node({state: "2 0 3 8 6 4 1 7 5", parent: no0, cost: 1, depth: 1}),
	new Node({state: "2 6 3 8 7 4 1 0 5", parent: no0, cost: 1, depth: 1}),
	new Node({state: "0 6 3 2 8 4 1 7 5", parent: no1, cost: 2, depth: 2})]



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
else if(N == 2){
/**********    EX N=2   **********/

	let no0 = new Node({state: "2 3 1 0", parent: null, cost: 0, depth: 0})
	let no1 = new Node({state: "2 0 1 3", parent: no0, cost: 1, depth: 1})


	let frontierList = [
	new Node({state: "2 3 0 1", parent: no0, cost: 1, depth: 1}),
	new Node({state: "1 2 3 0", parent: no1, cost: 2, depth: 2})]


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
else if(N == 4){
	let no0 = new Node({state: "2 6 3 8 0 4 1 7 5 9 10 11 12 13 14 15", parent: null, cost: 0, depth: 0})
	let no1 = new Node({state: "2 6 3 0 8 4 1 7 5 9 10 11 12 13 14 15", parent: no0, cost: 1, depth: 1})
	let no2 = new Node({state: "2 6 3 1 8 4 0 7 5 9 10 11 12 13 14 15", parent: no1, cost: 2, depth: 2})

	console.log(no0)

	let frontierList = [
	new Node({state: "2 6 3 8 4 0 1 7 5 9 10 11 12 13 14 15", parent: no0, cost: 1, depth: 1}),
	new Node({state: "2 0 3 8 6 4 1 7 5 9 10 11 12 13 14 15", parent: no0, cost: 1, depth: 1}),
	new Node({state: "2 6 3 8 7 4 1 0 5 9 10 11 12 13 14 15", parent: no0, cost: 1, depth: 1}),
	new Node({state: "0 6 3 2 8 4 1 7 5 9 10 11 12 13 14 15", parent: no1, cost: 2, depth: 2})]



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





