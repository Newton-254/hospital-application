const db = require('../config/db');

exports.createAppointment = (req, res) => {
  const { patient_id, doctor_id, date, time, notes } = req.body;
  const sql = 'INSERT INTO appointments (patient_id, doctor_id, date, time, notes) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [patient_id, doctor_id, date, time, notes], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Appointment created successfully' });
  });
};

exports.getAppointments = (req, res) => {
  db.query('SELECT * FROM appointments', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getAppointmentById = (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM appointments WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
  });
};

exports.updateAppointment = (req, res) => {
  const id = req.params.id;
  const { date, time, notes } = req.body;
  db.query(
    'UPDATE appointments SET date = ?, time = ?, notes = ? WHERE id = ?',
    [date, time, notes, id],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Appointment updated' });
    }
  );
};

exports.deleteAppointment = (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM appointments WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Appointment deleted' });
  });
};
