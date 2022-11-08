const express = require('express');
const router = express.Router();
const validateToken = require("../middleware/auth");
const validAccess = require("../middleware/hrManager");

const { employeeAddController, employeeUpdateController, employeeGetSingleController, employeeGetAllController, dependentAddController, dependentUpdateController, dependentGetSingleController, dependentGetAllController, otDataAddController, otDataUpdateController, otDataGetSingleController, otDataGetAllController, otAddController, otGetSingleController, otGetAllForEmployeeController, otGetAllController, advanceAddController, getAvailableAdvanceController, getAllAdvanceController, getSingleAdvanceController, getAllAdvanceForEmployeeController, addAttendanceController, viewSingleEmployeeAttendanceController, viewAllAttendanceController, calculateSalaryController, viewAllSalaryForEmployeeController, viewSingleSalaryController, viewAllSalaryController, getAllEmployeeEIDController } = require("../controllers/hrController");

//employee
router.post("/employee/add", employeeAddController);
router.put("/employee/update/:id", employeeUpdateController);
router.get("/employee/getSingle/:id", employeeGetSingleController);
router.get("/employee/getAll/", employeeGetAllController);
router.get("/employee/getAllEID/", getAllEmployeeEIDController);

//dependent
router.post("/dependent/add", dependentAddController);
router.put("/dependent/update/:id", dependentUpdateController);
router.get("/dependent/getSingle/:id", dependentGetSingleController);
router.get("/dependent/getAll/:id", dependentGetAllController);

//OT Types
router.post("/OtType/add", otDataAddController);
router.put("/otType/update/:id", otDataUpdateController);
router.get("/otType/getSingle/:id", otDataGetSingleController);
router.get("/otType/getAll/", otDataGetAllController);

//OT
router.post("/Ot/add", otAddController);
router.get("/Ot/getSingle/:id", otGetSingleController);
router.get("/Ot/getAllForEmployee/:id", otGetAllForEmployeeController);
router.get("/Ot/getAll/", otGetAllController);

//advance
router.post("/advance/add", advanceAddController);
router.get("/advance/balance/:id", getAvailableAdvanceController);
router.get("/advance/getAll/", getAllAdvanceController);
router.get("/advance/getSingle/:id", getSingleAdvanceController);
router.get("/advance/getAllForEmployee/:id", getAllAdvanceForEmployeeController);

//attendance
router.post("/attendance/add", addAttendanceController);
router.get("/attendance/getAll/", viewAllAttendanceController);
router.get("/attendance/getSingle/:id", viewSingleEmployeeAttendanceController);


//salary
router.get("/salary/calculate", calculateSalaryController);
router.get("/salary/getAll", viewAllSalaryController);
router.get("/salary/getSingle/:id", viewSingleSalaryController);
router.get("/salary/getAllForEmployee/:id", viewAllSalaryForEmployeeController);



module.exports = router;

