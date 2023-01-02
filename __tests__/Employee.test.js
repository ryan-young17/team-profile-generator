const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("should return an object", () => {
    const employee = new Employee();
    expect(typeof employee).toBe("object");
  });
  
  describe("getName", () => {
    it("should return the employee name", () => {
        const name = "newName";
        const result = new Employee(name);
        expect(result.getName()).toBe(name);
    });
  });
  
  describe("getId", () => {
    it("should return the employee id", () => {
        const id = 123;
        const result = new Employee("name", id);
        expect(result.getId()).toBe(id);
    });
  });
  
  describe("getEmail", () => {
    it("should return the employee email", () => {
        const email = "email";
        const result = new Employee("name", 123, email);
        expect(result.getEmail()).toBe(email);
    });
  });
  
  describe("getRole", () => {
    it("should return the employee role", () => {
        const role = "Employee";
        const result = new Employee("name", 123, "email");
        expect(result.getRole()).toBe(role);
    });
  });
});
