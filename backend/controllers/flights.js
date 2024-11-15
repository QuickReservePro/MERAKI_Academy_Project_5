const db = require("../models/db");

const createFlights = (req, res) => {
  const {
    flight_Company,
    flight_number,
    origin,
    destination,
    departure_time,
    arrival_time,
    price,
  } = req.body;
  const query = `
    INSERT INTO flights (flight_Company, flight_number, origin, destination, departure_time, arrival_time, price,userId)
    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;
  `;
  const values = [
    flight_Company,
    flight_number,
    origin,
    destination,
    departure_time,
    arrival_time,
    price,
  ];

  db.query(query, values)
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "Flights created successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server error",
        err: err,
      });
    });
};
const bookFlight = (req, res) => {
  const { user_id, flights_id } = req.body;

  module.exports = { createFlights };
  const query = `
      INSERT INTO userFlight (user_id, flights_id)
      VALUES ($1, $2) RETURNING *;
    `;
  const values = [user_id, flights_id];

  db.query(query, values)
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "Flight booked successfully",
        result: result.rows[0],
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server error",
        err: err,
      });
    });
};
const findAtrip = (req, res) => {};
const cancelFlight = (req, res) => {
  // user_id from token
  const { user_id, flights_id } = req.body;

  const query = `
    DELETE FROM userFlight
    WHERE user_id = $1 AND flights_id = $2
    RETURNING *;
  `;
  const values = [user_id, flights_id];

  db.query(query, values)
    .then((result) => {
      if (result.rowCount === 0) {
        res.status(404).json({
          success: false,
          message: "No booking found to cancel",
        });
      } else {
        res.status(200).json({
          success: true,
          message: "Flight booking canceled successfully",
          result: result.rows[0],
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server error",
        err: err,
      });
    });
};
module.exports = { createFlights, bookFlight, findAtrip, cancelFlight };
