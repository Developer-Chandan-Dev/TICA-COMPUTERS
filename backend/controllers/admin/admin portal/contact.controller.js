const Contacts = require("../../../models/users/contact.model.js");

const addContact = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    // new contact
    const newContact = new Contacts(data);

    // save contact
    if (newContact) {
      await newContact.save();
      res.status(201).json({ message: "Contact sended successfully" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllContacts = async (req, res) => {
  try {
    const data = await Contacts.find();

    if (!data) {
      return res.status(400).json({ error: "Data not found" });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getContact = async (req, res) => {
  try {
    const contactId = req.params.id;
    const data = await Contacts.findById(contactId);

    if (!data) {
      res.status(400).json({ message: "Contact not found" });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteContact = async (req, res) => {
  try {
    const contactId = req.params.id;
    const data = await Contacts.findByIdAndDelete(contactId);
    res.status(200).json({ message: "Contact Deleted Successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { addContact, getAllContacts, getContact, deleteContact };
