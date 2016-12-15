import {Orientation} from './Orientation';

export class Grid{
    XCoordinate : number;
    YCoordinate : number;
    private Orientation : Orientation;
    private visitedLocations : Array<Array<boolean>>;
    private firstDuplicateDistance : number;
    private duplicateSet : boolean;

    constructor(){
        this.XCoordinate = 0;
        this.YCoordinate = 0;
        this.Orientation = Orientation.North;
        this.visitedLocations = new Array<Array<boolean>>();

    }

    MoveLeft(blocks : number){
        switch(this.Orientation){
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
    }

    MoveRight(blocks : number){
        switch(this.Orientation){
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
    }

    private Move(blocks : number){
        switch(this.Orientation){
            case Orientation.East:
                while(blocks > 0){
                    this.XCoordinate += 1;
                    this.CheckLocation();
                    blocks--;
                }
                break;
            case Orientation.South:
               while(blocks > 0){
                    this.YCoordinate -= 1;
                    this.CheckLocation();
                    blocks--;
                }
                break;
            case Orientation.West:
                while(blocks > 0){
                    this.XCoordinate -= 1;
                    this.CheckLocation();
                    blocks--;
                }
                break;
            case Orientation.North:
                while(blocks > 0){
                    this.YCoordinate += 1;
                    this.CheckLocation();
                    blocks--;
                }
                break;
        }
    }

    private Track(blocks: number){
        switch(this.Orientation){
            case Orientation.East:
                while(blocks > 0){
                    this.XCoordinate += 1;
                    this.CheckLocation();
                    blocks--;
                }
                break;
            case Orientation.South:
               while(blocks > 0){
                    this.YCoordinate -= 1;
                    this.CheckLocation();
                    blocks--;
                }
                break;
            case Orientation.West:
                while(blocks > 0){
                    this.XCoordinate -= 1;
                    this.CheckLocation();
                    blocks--;
                }
                break;
            case Orientation.North:
                while(blocks > 0){
                    this.YCoordinate += 1;
                    this.CheckLocation();
                    blocks--;
                }
                break;
        }
    } 

    private CheckLocation(){
        if(!this.duplicateSet && this.visitedLocations[this.XCoordinate] && this.visitedLocations[this.XCoordinate][this.YCoordinate] == true){
            this.firstDuplicateDistance = this.GetDistance();
            this.duplicateSet = true;
        }
        else {
            if(!this.visitedLocations[this.XCoordinate]){
                this.visitedLocations[this.XCoordinate] = new Array<boolean>();
            }

            this.visitedLocations[this.XCoordinate][this.YCoordinate] = true;
        }
    }

    GetDistance() : number{
        return Math.abs(this.XCoordinate) + Math.abs(this.YCoordinate);
    }

    GetFirstDupDistance() : number{
        return this.firstDuplicateDistance;
    }
}