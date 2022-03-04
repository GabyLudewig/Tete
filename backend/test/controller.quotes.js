const quotesController = require("../controller/quotes");
const expect = require("chai").expect;


describe("Testing quotesController", () => {
    describe("check add funtion", () => {
        it("check return value:", () => {
           let  result= quotesController.add(3,7);
            expect(result).to.equal(10);
        });
    });
});