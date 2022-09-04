const Event = require("../models/EventModel");

const createEvent = async (req, res) => {
  try {
    const event = new Event(req.body);
    const newEvent = await event.save();

    res.status(200).json(newEvent);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const allEvents = await Event.find().populate("organiser");

    res.status(200).json(allEvents);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// get suggested events according to the type of event
const getSuggestedEvents = async (req, res) => {
  const { type } = req.body;

  try {
    const data = await Event.find({ eventType: type });

    res.status(200).json(data);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getEventInfo = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Event.find({ _id: id });

    res.status(200).json(data);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const updateInfo = async (req, res) => {
  try {
    const data = await Event.findByIdAndUpdate(req.body.id, req.body);
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = {
  createEvent,
  getAllEvents,
  getSuggestedEvents,
  getEventInfo,
  updateInfo,
};
