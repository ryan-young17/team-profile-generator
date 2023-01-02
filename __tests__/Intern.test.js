const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("should return an object", () => {
      const intern = new Intern();
      expect(typeof intern).toBe("object");
    });
    
    describe("getSchool", () => {
      it("should return the intern's school", () => {
          const school = "university";
          const result = new Intern("name", 123, "email", school);
          expect(result.getSchool()).toBe(school);
      });
    });
    
    describe("getRole", () => {
      it("should return the employee role", () => {
          const role = "Intern";
          const result = new Intern("name", 123, "email");
          expect(result.getRole()).toBe(role);
      });
    });
  });
