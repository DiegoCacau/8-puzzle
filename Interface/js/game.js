var Game = function(opt_data) {
    var data = opt_data || {};

    this.size = data.n || 3;

    let str = "0"; 
    for(let i=1; i<data.n*data.n; i++){
        str = str + " " + i.toString();
    }

    this.state = data.state || str;

};


Game.Actions = {
    UP: 'up',
    DOWN: 'down',
    LEFT: 'left',
    RIGHT: 'right'
};


Game.DesiredState = function(size){
    let str = "1";
    for(let i=2; i<size*size; i++){
        str = str + " " + i.toString();
    } 
    str = str + " 0";
    return str;
};


Game.prototype.getAvaliableActionsAndStates = function() {
    var result = {};

    var zeroIndex = this.state.split(' ').indexOf('0');
    var row = Math.floor(zeroIndex / this.size);
    var column = zeroIndex % this.size;

    if (column > 0) result[Game.Actions.LEFT] = this.getNextState(Game.Actions.LEFT);
    if (column < this.size -1) result[Game.Actions.RIGHT] = this.getNextState(Game.Actions.RIGHT);
    if (row > 0) result[Game.Actions.UP] = this.getNextState(Game.Actions.UP);
    if (row < this.size -1) result[Game.Actions.DOWN] = this.getNextState(Game.Actions.DOWN);

    return result;
};


Game.prototype.getNextState = function(action) {
    var zeroIndex = this.state.split(' ').indexOf('0');
    var newIndex;

    switch (action) {
        case Game.Actions.LEFT:
            newIndex = zeroIndex - 1
            break;
        case Game.Actions.RIGHT:
            newIndex = zeroIndex + 1
            break;
        case Game.Actions.UP:
            newIndex = zeroIndex - this.size
            break;
        case Game.Actions.DOWN:
            newIndex = zeroIndex + this.size
            break;
        default:
            throw new Error('Unexpected action');
    }

    var stateArr = this.state.split(' ');
    stateArr[zeroIndex] = stateArr[newIndex];
    stateArr[newIndex] = '0';

    // stateArr = stateArr.filter(function(item) {
    //     return (item != "" && item != undefined)
    // })
    
    return stateArr.join(' ');
};


Game.prototype.isFinished = function() {
    return this.state == Game.DesiredState(this.size);
};


Game.prototype.randomize = function() {
    var that = this;
    var states = {};
    // var iteration = parseInt(prompt('How many random moves from desired state?'));
    var iteration = 100;

    if (!iteration || isNaN(iteration))
        return alert('Invalid iteration count, please enter a number');

    this.state = Game.DesiredState(this.size);
    states[this.state] = true;

    var randomNextState = function() {
        var state = _.sample(that.getAvaliableActionsAndStates());

        if (states[state])
            return randomNextState();

        return state;
    }

    _.times(iteration, function() {
        that.state = randomNextState();
    });

};


Game.prototype.getManhattanDistance = function() {
    var distance = 0;


    for(let i=1; i<this.size*this.size; i++){
        let index = this.state.split(" ").indexOf(i.toString());
        let position = Game.indexToRowColumn(index, this.size);

        let expected_x = Math.trunc((i-1) / this.size);
        let expected_y = ((i-1) % this.size);

        distance += Math.abs(expected_x - position.row) + Math.abs(expected_y - position.column);
    }

    return distance;
};


Game.indexToRowColumn = function(index, size) {

    return {
        row: Math.floor(index / size),
        column: index % size
    };
}
