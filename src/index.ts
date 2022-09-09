import { Elevator } from "./Elevator";
const prompt = require("prompt-sync")();
const eleveltor = new Elevator();
let quitInfo;

eleveltor.printElevatorStatus();
while (true) {
  const direction = prompt("Enter your destination direction: ");
  const destinationFloor = prompt("Enter your destination floor: ");
  eleveltor.move(direction, destinationFloor);
  eleveltor.printElevatorStatus();
  quitInfo = prompt("Do you want to qutit(Y/N): ");
  if (quitInfo == "Y") {
    break;
  } else if (quitInfo == "N") {
    continue;
  }
}
