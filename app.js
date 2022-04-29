import router from './src/routes'
// === imports == //
express = require('express')
bodyParser = require('body-parser')


// === initialisation == //
app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/', router);

// === run app == //
app.listen(8000, () => console.log(`Example app running!`));