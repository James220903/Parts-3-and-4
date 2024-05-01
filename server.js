const express = require('express');
const app = express();
const port = 8000;  // You can use any port number

// Serve static files from the current directory
app.use(express.static('.'));

app.get('/', (req, res) => {
    res.redirect('/login.html');  // Redirect to the login page by default
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
