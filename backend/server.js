// backend/server.js

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const dbPool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.use(cors());
app.use(express.json());

// --- API ROUTES ---

// Student lookup endpoint (we'll keep this)
app.get('/api/find-student', async (req, res) => {
  // ... (code from before)
});


// NEW: Student registration endpoint
// backend/server.js

// ... (imports and db setup are the same) ...

// backend/server.js
// ... (imports and db setup are the same) ...

app.post('/api/register-student', async (req, res) => {
  try {
    // UPDATED: Get student details without clerkId
    const { fullName, studentId, courseName, year, ethAddress } = req.body;

    if (!fullName || !studentId || !ethAddress) {
      return res.status(400).json({ error: 'Required fields are missing.' });
    }

    // UPDATED: Insert a placeholder for clerk_user_id
    const placeholderClerkId = `manual_${studentId}_${Date.now()}`;

    const newStudent = await dbPool.query(
      `INSERT INTO students (full_name, student_id_number, course_name, year, ethereum_address, clerk_user_id)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [fullName, studentId, courseName, year, ethAddress, placeholderClerkId]
    );

    res.status(201).json({
      message: 'Student registered successfully!',
      student: newStudent.rows[0],
    });

  } catch (error) {
    console.error('Error registering student:', error);
    res.status(500).json({ error: 'An error occurred during registration.' });
  }
});


// --- Server Startup ---
app.listen(port, () => {
  console.log(`✅ Server listening on http://localhost:${port}`);
});