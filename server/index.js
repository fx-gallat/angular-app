var path = require('path');
const express = require('express');
var cors = require('cors')
var app = express();

app.use(cors());

app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
var apiRoutes = express.Router();
app.use('/api', apiRoutes)
apiRoutes.get('/todo-list', (req, res) => {

  const todoList = [{
      id: 'task1',
      title: 'What is your name ?',
      description: 'name_asked'
    },
    {
      id: 'task2',
      title: 'What is the number of necessary stamps for a single letter ?',
      description: 'stamp_number'
    }
  ];
  return res.json(todoList);
});

const port = 4200;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
