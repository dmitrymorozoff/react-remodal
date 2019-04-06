import * as React from "react";
import { shallow } from "enzyme";
import { Remodal } from "../index";

describe("Remodal", () => {
    const props = {
        isOpen: true,
        buttons: [
            { title: "Hell, no!", handler: () => ({}) },
            { title: "Yes, I'am insane!", handler: () => ({}) },
        ],
    };

    it("can be render the portal if modal is open", () => {
        const output = shallow(<Remodal {...props} />);
        expect(output.find("Portal")).toHaveLength(1);
    });

    it("doesn't render the portal if modal is closed", () => {
        const nextProps = {
            ...props,
            isOpen: false,
        };

        const output = shallow(<Remodal {...nextProps} />);
        expect(output.find("Portal")).toHaveLength(0);
    });

    it("render two buttons inside portal if props provided", () => {
        const output = shallow(<Remodal {...props} />);
        expect(output.find("Buttons")).toHaveLength(1);
    });
});
