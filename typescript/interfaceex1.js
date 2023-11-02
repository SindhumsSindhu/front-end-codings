var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.empCode = code;
        this.name = name;
    }
    Employee.prototype.getSalary = function (empCode) {
        return 20000;
    };
    return Employee;
}());
var emp = new Employee(101, "sindhu");
console.log("Emp Code :" + emp.empCode);
console.log("Emp Name :" + emp.name);
console.log("Emp salary :" + emp.getSalary(this.Code));
