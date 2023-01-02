const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("should return an object", () => {
      const engineer = new Engineer();
      expect(typeof engineer).toBe("object");
    });
    
    describe("getGitHub", () => {
      it("should return the engineer's gitHub username", () => {
          const username = "userName";
          const result = new Engineer("name", 123, "email", username);
          expect(result.getGitHub()).toBe(username);
      });
    });
    
    describe("getRole", () => {
      it("should return the employee role", () => {
          const role = "Engineer";
          const result = new Engineer("name", 123, "email");
          expect(result.getRole()).toBe(role);
      });
    });
  });
