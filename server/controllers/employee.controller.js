const Employee = require('../models/employee');

const employeeCtrl = {};

employeeCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
}

employeeCtrl.createEmployee = async (req, res) => {
        const employee = new Employee(req.body);
        await employee.save();
        res.json({
            'status': 'Employed Saved'
        });
}

employeeCtrl.getEmployee = function () {
        
}

employeeCtrl.editEmployee = function () {
        
}

employeeCtrl.deleteEmployee = function () {
        
}


module.exports = employeeCtrl;