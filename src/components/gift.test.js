import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Gift from "./Gift";

configure({ adapter: new Adapter() });

describe("Gift", () => {
  const mockRemove = jest.fn();
  /*ID of Gift we want to remove */
  const id = 1;
  const props = { gift: { id }, removeGift: mockRemove };
  const gift = shallow(<Gift {...props} />);
  //<Gift gift={props.gift} removeGift={props.removeGift}/>

  it("renders properly", () => {
    expect(gift).toMatchSnapshot();
  });
  it("initializes person and present in `state`", () => {
    expect(gift.state()).toEqual({ person: "", present: "" });
  });
  describe("when typing into the person input", () => {
    const person = "Uncle";
    beforeEach(() => {
      gift
        .find(".input-person")
        .simulate("change", { target: { value: person } });
    });
    it("Updates person in `state`", () => {
      expect(gift.state().person).toEqual(person);
    });
  });
  describe("when typing into the present input", () => {
    const present = "Golf Clubs";
    beforeEach(() => {
      gift
        .find(".input-present")
        .simulate("change", { target: { value: present } });
    });
    it("Updates present in `state`", () => {
      expect(gift.state().present).toEqual(present);
    });
  });
  describe("whn clicking the remove gift `Button`", () => {
    beforeEach(() => {
      gift.find(".btn-remove").simulate("click");
    });
    it("calls the removeGift callback", () => {
      expect(mockRemove).toHaveBeenCalledWith(id);
    });
  });
});
