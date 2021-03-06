import React from "react";
import { render, screen } from "@testing-library/react";
import TableParser from "../components/TableParser";

describe("The List Example", () => {
  it("Should render some items", () => {
    renderComponent();
    const list = screen.getByTestId("table-parser");
    screen.debug(list);
  });

  it("Should render false list", () => {
    renderComponent();
    const list = screen.getByTestId("table-parser");
    expect(list.textContent?.includes("item_A")).toBeFalsy();
    screen.debug(list);
  });

  it("Should render truthy list", () => {
    renderComponent();
    const list = screen.getByTestId("table-parser");
    expect(list.textContent?.includes("How Many?")).toBeTruthy();
    screen.debug(list);
  });
});

function renderComponent(props) {
  return render(<TableParser {...props} />);
}
