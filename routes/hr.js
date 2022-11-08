const express = require('express');
const router = express.Router();
const validateToken = require("../middleware/auth");

const { employeeAddController, employeeUpdateController, employeeGetSingleController, employeeGetAllController, dependentAddController, dependentUpdateController, dependentGetSingleController, dependentGetAllController, otDataAddController, otDataUpdateController, otDataGetSingleController, otDataGetAllController, otAddController, otGetSingleController, otGetAllForEmployeeController, otGetAllController, advanceAddController, getAvailableAdvanceController, getAllAdvanceController, getSingleAdvanceController, getAllAdvanceForEmployeeController, addAttendanceController, viewSingleEmployeeAttendanceController, viewAllAttendanceController, calculateSalaryController, viewAllSalaryForEmployeeController, viewSingleSalaryController, viewAllSalaryController, getAllEmployeeEIDController } = require("../controllers/hrController");

//employee
router.post("/employee/add", [validateToken], employeeAddController);
router.put("/employee/update/:id", [validateToken], employeeUpdateController);
router.get("/employee/getSingle/:id", [validateToken], employeeGetSingleController);
router.get("/employee/getAll/", [validateToken], employeeGetAllController);
router.get("/employee/getAllEID/", [validateToken], getAllEmployeeEIDController);

//dependent
router.post("/dependent/add", [validateToken], dependentAddController);
router.put("/dependent/update/:id", [validateToken], dependentUpdateController);
router.get("/dependent/getSingle/:id", [validateToken], dependentGetSingleController);
router.get("/dependent/getAll/:id", [validateToken], dependentGetAllController);

//OT Types
router.post("/OtType/add", [validateToken], otDataAddController);
router.put("/otType/update/:id", [validateToken], otDataUpdateController);
router.get("/otType/getSingle/:id", [validateToken], otDataGetSingleController);
router.get("/otType/getAll/", [validateToken], otDataGetAllController);

//OT
router.post("/Ot/add", [validateToken], otAddController);
router.get("/Ot/getSingle/:id", [validateToken], otGetSingleController);
router.get("/Ot/getAllForEmployee/:id", [validateToken], otGetAllForEmployeeController);
router.get("/Ot/getAll/", [validateToken], otGetAllController);

//advance
router.post("/advance/add", [validateToken], advanceAddController);
router.get("/advance/balance/:id", [validateToken], getAvailableAdvanceController);
router.get("/advance/getAll/", [validateToken], getAllAdvanceController);
router.get("/advance/getSingle/:id", [validateToken], getSingleAdvanceController);
router.get("/advance/getAllForEmployee/:id", [validateToken], getAllAdvanceForEmployeeController);

//attendance
router.post("/attendance/add", [validateToken], addAttendanceController);
router.get("/attendance/getAll/", [validateToken], viewAllAttendanceController);
router.get("/attendance/getSingle/:id", [validateToken], viewSingleEmployeeAttendanceController);


//salary
router.get("/salary/calculate", [validateToken], calculateSalaryController);
router.get("/salary/getAll", [validateToken], viewAllSalaryController);
router.get("/salary/getSingle/:id", [validateToken], viewSingleSalaryController);
router.get("/salary/getAllForEmployee/:id", [validateToken], viewAllSalaryForEmployeeController);



module.exports = router;

