const {
  getAllNotifications,
  postNotification,
} = require("../db/helpers/notification-queries");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  getAllNotifications()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json({ error: err.message }));
});

router.post("/", (req, res) => {
  const notificationFormData = req.body.state;
  // console.log(notificationFormData);
  // console.log("formdata", notificationFormData.time.toString());
  postNotification(notificationFormData)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json({ error: err.message }));
});

module.exports = router;
