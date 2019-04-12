import * as React from "react";
import { shallow } from "enzyme";
import { Remodal } from "../index";
import { Buttons } from "../remodal/components/buttons";

describe("Remodal", () => {
    const defaultProps = {
        isOpen: true,
        isFullScreen: true,
        isShowCloseButton: true,
        closeTimeoutMS: 0,
        buttons: [
            { title: "Hell, no!", handler: jest.fn() },
            { title: "Yes, I'am insane!", handler: jest.fn() },
        ],
        onClose: jest.fn(),
    };

    it("can be render the portal if modal is open", () => {
        const output = shallow(<Remodal {...defaultProps} />);

        expect(output.find("Portal")).toHaveLength(1);
    });

    it("doesn't render the content if modal is closed", () => {
        const nextProps = {
            ...defaultProps,
            isOpen: false,
        };
        const output = shallow(<Remodal {...nextProps} />);

        expect(output.find("Main")).toHaveLength(0);
        expect(output.find("Buttons")).toHaveLength(0);
    });

    it("should show fullscreen modal when prop isFullScreen change to true", () => {
        const nextProps = {
            ...defaultProps,
            isFullScreen: true,
        };
        const output = shallow(<Remodal {...nextProps} />);

        expect((output.state() as any).fullscreen).toBe(true);
    });

    it("render two buttons inside portal if props provided", () => {
        const output = shallow(<Remodal {...defaultProps} />);
        expect(output.find("Buttons")).toHaveLength(1);
    });

    it("render close button if props provided", () => {
        const output = shallow(<Remodal {...defaultProps} />);
        expect(output.find("CloseButton")).toHaveLength(1);
    });

    it("can be render render close button when isShowCloseButton is false", () => {
        const output = shallow(<Remodal {...defaultProps} />);
        output.setProps({ isShowCloseButton: false });

        expect(output.find("CloseButton")).toHaveLength(0);
    });

    it("should disable the handler when closeOnOverlayClick is false", () => {
        const output = shallow(<Remodal {...defaultProps} closeOnOverlayClick={false} />);

        const overlay = output.find("Outer");
        overlay.simulate("click");

        expect(defaultProps.onClose).not.toHaveBeenCalled();
    });

    it("should not call onClose when closeOnEsc is false", () => {
        const output = shallow(<Remodal {...defaultProps} closeOnEsc={false} />);
        output.simulate("keyDown", {
            keyCode: 27,
        });

        expect(defaultProps.onClose).not.toHaveBeenCalled();
    });

    it("should call onClose when click on the overlay", () => {
        const output = shallow(<Remodal {...defaultProps} closeOnOverlayClick={true} />);

        const overlay = output.find("Outer");
        overlay.simulate("click");

        expect(defaultProps.onClose).toHaveBeenCalled();
    });

    it("should call onClose when click on the close button", () => {
        const output = shallow(<Remodal {...defaultProps} closeOnOverlayClick={false} />);
        const closeButton = output.find("CloseButton");

        closeButton.simulate("click");
        expect(defaultProps.onClose).toHaveBeenCalled();
    });

    it("should hide modal when prop open change to false", () => {
        const output = shallow(<Remodal {...defaultProps} />);
        expect((output.state() as any).open).toBe(true);

        output.setProps({ isOpen: false });
        expect((output.state() as any).open).toBe(false);
    });
});

describe("Buttons", () => {
    const defaultProps = {
        buttons: [
            { title: "Hell, no!", handler: jest.fn() },
            { title: "Yes, I'am insane!", handler: jest.fn() },
        ],
    };

    it("should call handler when click on the button", () => {
        const output = shallow(<Buttons {...defaultProps} />);
        const buttons = output.find("Button");

        defaultProps.buttons.forEach((button, index) => {
            buttons.at(index).simulate("click");
            expect(defaultProps.buttons[index].handler).toHaveBeenCalled();
        });
    });

    it("can be render two buttons", () => {
        const output = shallow(<Buttons {...defaultProps} />);
        console.log(output.debug());
        expect(output.find("Button")).toHaveLength(2);
    });
});
