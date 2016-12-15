import {Grid} from './Grid';

export class GridNavigator{
    NavigateRoute(input : string) : number{
        let grid = new Grid();
        
        for(let instruction of input.split(',')){
            let trimmedInstruction = instruction.trim();
            
            if(trimmedInstruction.length >= 2){
                let distance = parseInt(trimmedInstruction.substring(1));

                if(trimmedInstruction[0].toLowerCase() == 'r'){
                    grid.MoveRight(distance);
                }
                else if(trimmedInstruction[0].toLowerCase() == 'l'){
                    grid.MoveLeft(distance);
                }
            }
        }

        return grid.GetDistance();
    }

    FindFirstDuplicateDistance(input : string) : number{
        let grid = new Grid();
        let visitedLocations = new Array<Array<boolean>>();
        
        for(let instruction of input.split(',')){
            let trimmedInstruction = instruction.trim();
            
            if(trimmedInstruction.length >= 2){
                let distance = parseInt(trimmedInstruction.substring(1));

                if(trimmedInstruction[0].toLowerCase() == 'r'){
                    grid.MoveRight(distance);
                }
                else if(trimmedInstruction[0].toLowerCase() == 'l'){
                    grid.MoveLeft(distance);
                }

                console.log(grid.XCoordinate + ', ' + grid.YCoordinate)
            }
        }

        return grid.GetFirstDupDistance();
    }
}