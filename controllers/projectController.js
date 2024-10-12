const Project = require('../models/projectModel');
const { parse } = require('json2csv');  // For exporting to CSV

module.exports.createProject = async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports.bulkExport = async (req, res) => {
  try {
    const projects = await Project.find();
    const csv = parse(projects, { fields: ['name', 'description', 'budget', 'createdAt'] });
    res.header('Content-Type', 'text/csv');
    res.attachment('projects.csv');
    res.send(csv);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports.bulkImport = async (req, res) => {
  try {
    const projects = req.body;  // Assuming CSV data is parsed into req.body
    await Project.insertMany(projects);
    res.status(201).json({ message: 'Projects imported successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
