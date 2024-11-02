import {
  render,
  fireEvent,
  screen,
  act
} from "@testing-library/react";
import DiceRoller from "./DiceRoller";

test("On load the page has the specified text, images and button", () => {
  render(<DiceRoller />);

  const text = screen.getByText("Dice Rolled 0 Times to Attain a Total of 12");
  expect(text).toBeInTheDocument();

  const altTexts = screen.getAllByAltText("diceresult");
  expect(altTexts.length).toBe(2);

  const image1 = altTexts[0];
  const image2 = altTexts[0];

  expect(image1).toHaveAttribute("src", "dice2.png");
  expect(image2).toHaveAttribute("src", "dice2.png");
});

test("Dice rolled 1 time after clicking on the button", async () => {
  render(<DiceRoller />);

  jest.useFakeTimers();

  const button = screen.getByText("Roll Dice");
  expect(button).toBeInTheDocument();

  fireEvent.click(button);

  act(() => {
    jest.advanceTimersByTime(1000);
  });

  const text = screen.getByText("Dice Rolled 1 Times to Attain a Total of 12");
  expect(text).toBeInTheDocument();
});

test("When 20 times, clicked it should show the alert for max 20 times", async () => {
  render(<DiceRoller />);

  jest.useFakeTimers();
  global.alert = jest.fn();

  const button = screen.getByText("Roll Dice");

  act(() => {
    for (let i = 0; i <= 20; i++) {
      fireEvent.click(button);
      jest.advanceTimersByTime(2000);
    }
  });

  expect(global.alert).toHaveBeenCalledWith(
    "Max Times 20 Completed, Game Over!"
  );
});


