import { Elevator } from "./Elevator";
import { expect } from "chai";
const eleveltor = new Elevator();

describe("Elevator", () => {
  it("should move to destination floor when user rquest in same direction of elevator", () => {
    eleveltor.currentFloor = 1;
    eleveltor.currentDirection = "UP";
    eleveltor.move("UP", 2);
    expect(eleveltor.currentFloor).to.be.equals(2);
    expect(eleveltor.currentDirection).to.be.equals("UP");
  });
  it("should move to destination floor when user rquest in opposite direction of elevator", () => {
    eleveltor.currentFloor = 3;
    eleveltor.currentDirection = "UP";
    eleveltor.move("DOWN", 1);
    expect(eleveltor.currentFloor).to.be.equals(1);
    expect(eleveltor.currentDirection).to.be.equals("DOWN");
  });
});
