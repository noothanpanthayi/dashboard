import { render, fireEvent, screen } from "@testing-library/react";
import { Stickynotes } from "./Stickynotes";

function getRole(role: string): HTMLElement {
  return screen.getByRole(role);
}

function getAllRole(role: string): HTMLElement[] {
  return screen.getAllByRole(role);
}

test("Renders the component and it has one Sticky Note by default", () => {
  render(<Stickynotes />);

  expect(getRole("note")).toBeInTheDocument();
  expect(getAllRole("note").length).toBe(1);
  expect(getRole("note").textContent).toContain(
    "mimics the classic sticky note experience"
  );

});


test("Add a sticky note and see it is adding a new sticky note with empty text", () => {
  render(<Stickynotes />);
  const addButton = screen.getByText("Add Sticky Note");
  fireEvent.click(addButton);
  expect(getAllRole("note").length).toBe(2);
  expect(getAllRole("note")[1].textContent).toHaveLength(0);
});


test("Drag the first sticky note and drop on the second sticky note", () => {
  render(<Stickynotes />);
  const addButton = screen.getByText("Add Sticky Note");
  fireEvent.click(addButton);
  let stickyNote1 = getAllRole("note")[0];
  let stickyNote2 = getAllRole("note")[1];

  const dataTransfer = {
    getData: jest.fn(() => "0"),
    setData: jest.fn(),
  };

  const dragDropLink=screen.getByText("Drag/Drop");
  fireEvent.click(dragDropLink);

  fireEvent.dragStart(stickyNote1, { dataTransfer });
  fireEvent.dragOver(stickyNote2);
  fireEvent.drop(stickyNote2, { dataTransfer });

  stickyNote1 = getAllRole("note")[0];
  stickyNote2 = getAllRole("note")[1];

  expect(getAllRole("note")[0].textContent).toHaveLength(0);
  expect(stickyNote2.textContent).toContain(
    "mimics the classic sticky note experience"
  );
});

test("Focus on Card and make sure it is editable, add text and verify", () => {
  render(<Stickynotes />);

  // const toggleSwitch = screen.getByRole("checkbox", { name: "Edit Toggle" });

  const editModeLink=screen.getByText("Edit Mode");
  fireEvent.click(editModeLink);

  const stickyNote1 = getAllRole("note")[0];
  fireEvent.focus(stickyNote1);

  fireEvent.input(getAllRole("note")[0], {
    target: {
      textContent: "new text added",
    },
  });

  expect(screen.getAllByRole("note")[0].textContent).toContain(
    "new text added"
  );
});


test("Delete a Sticky Note", () => {
  render(<Stickynotes />);
  window.confirm = jest.fn(() => true);

  const toggleSwitch = screen.getByRole("checkbox", { name: "Edit Toggle" });
  fireEvent.click(toggleSwitch);

  const dragDropLink=screen.getByText("Drag/Drop");
  fireEvent.click(dragDropLink);

  fireEvent.dblClick(getAllRole("note")[0]);
  expect(getAllRole("note").length).toBe(1);
  const note=screen.queryByRole("note")
  expect(note).toBeInTheDocument();
  if (note)
  fireEvent.dblClick(note);
  const addButton = screen.getByText("Add Sticky Note");
  fireEvent.click(addButton);
  expect(getAllRole("note").length).toBe(1);
});

test("Remove All Sticky Note", () => {
  render(<Stickynotes />);

  const removeAllLink = screen.getByText("Remove All Sticky Notes");
  window.confirm = jest.fn(() => true);
  fireEvent.click(removeAllLink);
  expect(screen.queryAllByRole("note").length).toBe(0);
});

test("Sticky Note content is saved", () => {
render(<Stickynotes />);

  fireEvent.click(screen.getByText("Add Sticky Note"));
  expect(screen.queryAllByRole("note").length).toBe(2);

  const stickyNote2 = getAllRole("note")[1];

  fireEvent.focus(stickyNote2);

  fireEvent.input(stickyNote2, {
    target: {
      textContent: "This text should be saved",
    },
  });

  fireEvent.keyDown(stickyNote2, { key: "Enter", code: "Enter", charCode: 13 });
  fireEvent.click(screen.getByText("Add Sticky Note"));
  
  expect(getAllRole("note")[1].textContent).toContain(
    "This text should be saved"
  );

  fireEvent.blur(stickyNote2);

});

test("It should validate Max number of Stickynotes to be 30", () => {
  render(<Stickynotes />);
  global.alert = jest.fn();

  for(let i=0;i<30;i++){
    fireEvent.click(screen.getByText("Add Sticky Note"))
  }

  expect(getAllRole("note").length).toBe(30);
  // fireEvent.click(screen.getByText("Add Sticky Note"));

  expect(global.alert).toHaveBeenCalledWith("You have reached the maximum of 30 sticky notes");

})