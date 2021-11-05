const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
});

con.connect(function (err) {
  if (err) throw err;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log('Result: ' + result);
  });
  console.log('Connected!');
});
