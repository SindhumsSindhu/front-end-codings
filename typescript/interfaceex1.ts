interface IEmployee{
    empCode: number;
    name: string;
    getSalary:(empCode: number) => number;
}

class Employee implements IEmployee{
    empCode: number;
    name: string;

    constructor(code: number,name:string){
        this.empCode = code;
        this.name = name;
    }

    getSalary(empCode:number):number{
        return 20000;
    }
}

let emp = new Employee(101, "sindhu");
console.log("Emp Code :"+emp.empCode);
console.log("Emp Name :"+emp.name);
console.log("Emp salary :"+emp.getSalary(this.Code));