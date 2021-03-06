//importing from "Employee.js"
const employee = require("./Employee");

class Engineer extends employee { // extending the employee "parent" constructors
  constructor(name, id, email, github) {
    super(name, id, email); //inherited from employee 
    this.github = github; //unique to engineer

    //validation generated if user does not supply answer to the questions
    if (!name) {
      throw new Error("Please enter employee's name.");
    }
    if (!email) {
      throw new Error("Please enter the employee's email")
    }
    if (!github) {
      throw new error("Please enter the engineer's GitHub username");
    }
  }

  getGithub() {
    return this.github;
  }
  //overriding the parent default role of "Employee"
  getRole() {
    return "Engineer";
  }
}


module.exports = Engineer;