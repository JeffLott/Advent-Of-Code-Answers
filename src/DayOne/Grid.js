var Orientation;
(function (Orientation) {
    Orientation[Orientation["North"] = 1] = "North";
    Orientation[Orientation["East"] = 2] = "East";
    Orientation[Orientation["South"] = 3] = "South";
    Orientation[Orientation["West"] = 4] = "West";
})(Orientation || (Orientation = {}));
var Grid = (function () {
    function Grid() {
        this.XCoordinate = 0;
        this.YCoordinate = 0;
        this.Orientation = Orientation.North;
    }
    Grid.prototype.TurnLeft = function (blocks) {
        switch (this.Orientation) {
            case Orientation.North:
                this.Orientation = Orientation.West;
                this.Move(blocks);
                break;
            case Orientation.East:
                this.Orientation = Orientation.North;
                this.Move(blocks);
                break;
            case Orientation.South:
                this.Orientation = Orientation.East;
                this.Move(blocks);
                break;
            case Orientation.West:
                this.Orientation = Orientation.South;
                this.Move(blocks);
                break;
        }
    };
    Grid.prototype.TurnRight = function (blocks) {
        switch (this.Orientation) {
            case Orientation.North:
                this.Orientation = Orientation.East;
                this.Move(blocks);
                break;
            case Orientation.East:
                this.Orientation = Orientation.South;
                this.Move(blocks);
                break;
            case Orientation.South:
                this.Orientation = Orientation.West;
                this.Move(blocks);
                break;
            case Orientation.West:
                this.Orientation = Orientation.North;
                this.Move(blocks);
                break;
        }
    };
    Grid.prototype.Move = function (blocks) {
        switch (this.Orientation) {
            case Orientation.East:
                this.XCoordinate += blocks;
                break;
            case Orientation.South:
                this.YCoordinate -= blocks;
                break;
            case Orientation.West:
                this.XCoordinate -= blocks;
                break;
            case Orientation.North:
                this.YCoordinate += blocks;
                break;
        }
    };
    Grid.prototype.GetDistance = function () {
        return Math.abs(this.XCoordinate) + Math.abs(this.YCoordinate);
    };
    return Grid;
}());
