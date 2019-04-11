
var data = [{
	"PAN": "2328101036152671",
	"list": [{
		"TxnDate": "17-Jan-2019 19:30:34",
		"ValueDate": "17-Jan-2018",
		"ChequeNo": "804819011045",
		"Description": "ATMCash-NPAPB828-+YBLPALWALFridabadHRIN/8526",
		"Debit": "6,000.00",
		"Credit": ""
	},
	{
		"TxnDate": "12-Feb-2019 19:30:34",
		"ValueDate": "12-Feb-2018",
		"ChequeNo": "804890011011",
		"Description": "SMS ALERT CHARGES QUARTER Feb 2017",
		"Debit": "12",
		"Credit": ""
	},
	{
		"TxnDate": "29-Mar-2019 10:20:01",
		"ValueDate": "17-Feb-2018",
		"ChequeNo": "804819011045",
		"Description": "FIS March Month Salary credit",
		"Debit": "",
		"Credit": "49100.34"
	},
	{
		"TxnDate": "17-Feb-2018 19:30:34",
		"ValueDate": "17-Feb-2018",
		"ChequeNo": "901323411045",
		"Description": "ATM. Fee Mnemonic",
		"Debit": "23.60",
		"Credit": ""
	}]
},
{
	"PAN": "2328101036152672",
	"list": [{
		"TxnDate": "17-Jan-2019 19:30:34",
		"ValueDate": "17-Jan-2018",
		"ChequeNo": "804819011045",
		"Description": "ATMCash-NPAPB828-+YBL Noida UPIN/81212",
		"Debit": "10,000.00",
		"Credit": ""
	},
	{
		"TxnDate": "12-Feb-2019 19:30:34",
		"ValueDate": "12-Feb-2018",
		"ChequeNo": "904890011011",
		"Description": "SMS ALERT CHARGES QUARTER Feb 2017",
		"Debit": "12",
		"Credit": ""
	},
	{
		"TxnDate": "23-Mar-2019 10:20:01",
		"ValueDate": "23-Mar-2019",
		"ChequeNo": "804819011090",
		"Description": "FIS March month Salary credit",
		"Debit": "",
		"Credit": "90000"
	}]
}];

exports.getTableData = function (pan) {
	console.log("getTableData" + pan);
	let PAN = data.find(o => o.PAN == pan);
	console.log("getTableData" + PAN);
	let html = '';

	PAN.list.forEach(l => {
		let temp =
			`<tr>
            <td>${l.TxnDate}</td>
            <td>${l.ValueDate}</td>
            <td>${l.ChequeNo}</td>
            <td>${l.Description}</td>
            <td>${l.Debit}</td>
            <td>${l.Credit}</td>
        </tr>`;
		// console.log("getTableData" +temp);
		html += temp;
	});
	console.log("Statement Data : " + html);
	return html;
}