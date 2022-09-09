export class Elevator {
  private defaultDirection: string = "UP";
  private defaultFloor: number = 0;
  currentDirection: string = this.defaultDirection;
  currentFloor: number = this.defaultFloor;

  public move = (direction: string, destinationFloor: number) => {
    this.currentDirection = direction;
    this.currentFloor = destinationFloor;
  };
  public printElevatorStatus = () => {
    console.log("currentFloor ====> ", this.currentFloor);
    console.log("currentDirection ====> ", this.currentDirection);
  };
}
