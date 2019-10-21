var express = require('express');
var router = express.Router();

const todo = [{
  task : "Dance",
  complete : "false"
},
{
  animation : "not available",
  complete : "false"
}
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('My first node project');
});

router.get('/todo', function(req, res, next) {
  res.send(todo);
});

router.post('/todo/add', function(req, res) {
  console.log(req.body);
  todo.push(req.body);
})




module.exports = router;
