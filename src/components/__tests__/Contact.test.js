import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import '@testing-library/jest-dom'

// describe is used to group multiple test cases inside it  or it is used for grouping 

// instead of using it in place of test it works same as before
describe("contact us page Test Cases", ()=>{
    it("should check button is present in contact us component", () => {
        render(<Contact />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
    test("should check Submit text us in contact component", () => {
        render(<Contact />);
        const button = screen.getByText("Submit");
        expect(button).toBeInTheDocument();
    });
    
    test("should load contact us component with heading", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    test("should check placeholder name is present or nor", () => {
        render(<Contact />);
        const heading = screen.getByPlaceholderText("name");
        expect(heading).toBeInTheDocument();
    });
    test("should load 2 input boxes on the contact component", () => {
        render(<Contact />);
        //quering
        const inputAll = screen.getAllByRole("textbox")
        // console.log(inputAll.length)
        inputAll.forEach((inputElement) => {
            expect(inputElement).toBeInTheDocument();
          });
         // assertion 
        expect(inputAll.length).toBe(2);
        expect(inputAll.length).not.toBe(3);
    });
    
})
