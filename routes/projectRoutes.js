const express = require('express');
const { createProject, getProjects, bulkExport, bulkImport } = require('../controllers/projectController');
const router = express.Router();

router.post('/', createProject);
router.get('/', getProjects);
router.get('/export', bulkExport);
router.post('/import', bulkImport);

module.exports = router;
