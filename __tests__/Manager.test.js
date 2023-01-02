const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("should return an object", () => {
      const manager = new Manager();
      expect(typeof manager).toBe("object");
    });
    
    describe("getOfficeNumber", () => {
      it("should return the office number", () => {
          const number = 123;
          const result = new Manager("name", 123, "email", number);
          expect(result.getOfficeNumber()).toBe(number);
      });
    });
    
    describe("getRole", () => {
      it("should return the employee role", () => {
          const role = "Manager";
          const result = new Manager("name", 123, "email");
          expect(result.getRole()).toBe(role);
      });
    });
  });
