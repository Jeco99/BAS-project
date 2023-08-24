const express = require('express'); 
const app = express();
const apiRoutes = require('./routes');



app.use('/api', apiRoutes); 

const PORT = process.env.PORT || 3001; 
app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`); 
});

