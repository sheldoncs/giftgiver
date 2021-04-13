import React from "react";
import { shallow, configure } from "enzyme";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("App", () => {
  const app = shallow(<App />);
  const id = 1;
  it("Renders Corectly", () => {
    expect(app).toMatchSnapshot();
  });
  it("Initializes `state` with 'empty list of gifts'", () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe("when clicking `Add Gift` button ", () => {
    beforeEach(() => {
      app.find(".btn-add").simulate("click");
    });
    afterEach(() => {
      app.setState({ gifts: [] });
    });
    it("Adds new gift to `state`", () => {
      expect(app.state().gifts).toEqual([{ id: 1 }]);
    });
    it("Adds a new gift to the rendered list ", () => {
      expect(app.find(".gift-list").children().length).toEqual(1);
    });
    it("creates a gift component", () => {
      expect(app.find("Gift").exists()).toBe(true);
    });
  });
  describe("when user wants to remove the added gift", () => {
    beforeEach(() => {
      app.instance().removeGift(id);
    });
    it("removes gift from `state` ", () => {
      expect(app.state().gifts).toEqual([]);
    });
  });
});
