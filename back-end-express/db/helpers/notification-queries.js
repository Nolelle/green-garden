const db = require("../");

const getAllNotifications = function () {
  const text = `
  SELECT * FROM notifications
  `;

  return db
    .query(text)
    .then((data) => data.rows)
    .catch((err) => console.error(this, "query failed", err.stack));
};

const postNotification = function (notificationFormData) {
  //   ? = ANY (notifications.day)
  // ? is the day int 0-6
  // console.log("form data", notificationFormData);
  const days = notificationFormData.days;
  const getDayNumber = (days) => {
    let arr = [];
    for (const number in days) {
      if (days[number]) {
        arr.push(number);
      }
    }
    return arr;
  };
  const numbersArray = getDayNumber(days);
  console.log("numbersArray", numbersArray);
  const text = `
  INSERT INTO notifications (garden_id, day, hour, minute, body)
  VALUES
  (1,0,15,14,'this means sunday, 3:13 pm for garden id 1')
  `;
  return db
    .query(text)
    .then((data) => data.rows)
    .catch((err) => console.error(this, "query failed", err.stack));
};

module.exports = { getAllNotifications, postNotification };
