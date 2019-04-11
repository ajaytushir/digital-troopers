var express = require('express');
var router = express.Router();
const fs = require('fs');
var pdf = require('html-pdf');
var PDFConverter = require('../services/pdf/PDFConverter');
const tmpl = fs.readFileSync(require.resolve('../services/pdf/PDF_HTML.html'), 'utf8');
/* GET users listing. */
router.post('/input', function (req, res, next) {
  console.log("######## Inside /input ##########");
  console.log("######## Request Body ##########");
  console.log(req.body);
  console.log("######## Request ##########");

  getStatement('2328101036152671');
  sendPDF('2328101036152671');
  res.status(200).send("Success");
});

function getStatement(pan) {
  let data = PDFConverter.getTableData(pan);
  const html = tmpl.replace('{{data}}', data);
  console.log(html);
  // {width: '50mm', height: '90mm'}
  pdf.create(html, { width: '300mm', height: '300mm' }).toStream((err, res) => {
    if (err) return console.log(err);
    console.log("PDF: " + JSON.stringify(res));
    res.pipe(fs.createWriteStream(`./public/pdf/${pan}.pdf`));
  });
}

function sendPDF(pan) {
  let url = 'https://ACeaa4489d6fb30bd355f70a0e28140aaa:0890397c852fd1b66cc98552ee673b07@api.twilio.com/2010-04-01/Accounts/ACeaa4489d6fb30bd355f70a0e28140aaa/Messages.json';
  var formData = {
    'To': 'whatsapp:+918447831872',
    'From': 'whatsapp:+ 14155238886',
    'MediaUrl': `http://52.172.216.230:4300/pdf/${pan}.pdf`,
  };
  request(
    {
      url: url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      form: formData
    },
    function (error, response, body) {

    }
  );
}

module.exports = router;
