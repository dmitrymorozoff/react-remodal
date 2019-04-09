import * as React from "react";
import { shallow, mount } from "enzyme";
import { Remodal } from "../index";

describe("Remodal", () => {
    const defaultProps = {
        isOpen: true,
        isShowCloseButton: true,
        isShowFullScreenButton: true,
        buttons: [
            { title: "Hell, no!", handler: () => ({}) },
            { title: "Yes, I'am insane!", handler: () => ({}) },
        ],
        onClose: jest.fn(),
    };

    it("can be render the portal if modal is open", () => {
        const output = shallow(<Remodal {...defaultProps} />);
        expect(output.find("Portal")).toHaveLength(1);
    });

    it("doesn't render the portal if modal is closed", () => {
        const nextProps = {
            ...defaultProps,
            isOpen: false,
        };

        const output = shallow(<Remodal {...nextProps} />);
        expect(output.find("Portal")).toHaveLength(0);
    });

    it("render two buttons inside portal if props provided", () => {
        const output = shallow(<Remodal {...defaultProps} />);
        expect(output.find("Buttons")).toHaveLength(1);
    });

    it("render close button if props provided", () => {
        const output = shallow(<Remodal {...defaultProps} />);
        expect(output.find("CloseButton")).toHaveLength(1);
    });

    it("render fullscreen button if props provided", () => {
        const output = shallow(<Remodal {...defaultProps} />);
        expect(output.find("FullScreenButton")).toHaveLength(1);
    });

    it("should call onClose when click on the overlay", () => {
        const output = shallow(<Remodal {...defaultProps} />);
        const overlay = output.find("Outer");
        overlay.simulate("click");
        expect(defaultProps.onClose).toHaveBeenCalled();
    });

    it("should hide modal when prop open change to false", () => {
        const output = mount(<Remodal {...defaultProps} />);
        expect((output.state() as any).open).toBe(true);

        output.setProps({ isOpen: false });
        expect((output.state() as any).open).toBe(false);
    });
});
