// // getAdmin, addAdmin, updateAdmin, deleteAdmin

// export const getAdmin = async (req, res, next) => {
//   try {
//     res.send("respond with a resourcerejroij");
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

// export const addAdmin = async (req, res, next) => {};
// export const updateAdmin = async (req, res, next) => {};
// export const deleteAdmin = async (req, res, next) => {};

import Admin from "../models/Admin.js";

export const getAdmin = async (req, res, next) => {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add new admin
export const addAdmin = async (req, res, next) => {
  const admin = new Admin(req.body);
  try {
    const newAdmin = await admin.save();
    res.status(201).json(newAdmin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update admin by ID
export const updateAdmin = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedAdmin = await Admin.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedAdmin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    res.status(200).json(updatedAdmin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete admin by ID
export const deleteAdmin = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedAdmin = await Admin.findByIdAndDelete(id);
    if (!deletedAdmin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    res.status(200).json({ message: "Admin deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
