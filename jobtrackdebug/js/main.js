var jobArray = [
	new JobApplied("SpaceX", "01/15/17", "In Person Interview", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."),
	new JobApplied("Tesla", "01/16/17", "Phone Interview", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."),
	new JobApplied("Solar City", "01/16/17", "Awaiting Response", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."),
	new JobApplied("Facebook", "01/17/17", "In Person Interview", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."),
	new JobApplied("Google", "01/18/17", "Phone Interview", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.")
];

var originalLength = jobArray.length;

jobArray.reverse();

for (var i = 0; i < jobArray.length; i++) {
	createElements()
};

function JobApplied(company, dateApplied,  response, notes){
	this.company     = company
	this.dateApplied = dateApplied
	this.response    = response
	this.notes       = notes
};

function newTracker(){
	   var form        = document.getElementById('form')
		var	button      = document.getElementById('newTracker')
		var	jobDiv      = document.getElementById('jobDiv');

	var	company     = document.getElementById('company').value,
			dateApplied = document.getElementById('dateApplied').value,
			 response    = document.getElementById('response').value
			notes       = document.getElementById('notes').value;

	if( (company && dateApplied && response && notes) == ""){
		button.className = "btn btn-danger";
		alert("Make sure all fields are filled!!");
		return;
	} else {
		button.className = "btn btn-primary";
	};

	var newApply = new JobApplied(company, dateApplied, response, notes);

	if (i !== originalLength) {
		jobArray.push(newApply);
	};

	createElements(newApply);

	form.reset()};

function createElements(newApply) {
	var trackerDiv = document.createElement('div'),
			divContain = document.createElement('div'),
			divRow     = document.createElement('div'),
			divCol     = document.createElement('div'),
			h1Company  = document.createElement('h1'),
			pDate      = document.createElement('p'),
			pResponse  = document.createElement('p'),
			pNotes     = document.createElement('p');

	divCol.className    = "col-sm-12";
	pDate.className     = "col-sm-4";
	pResponse.className = "col-sm-8";
	pNotes.classname    = "col-sm-12";

	if (originalLength == i){
		var companyTextNode  = document.createTextNode(newApply.company);
		var dateTextNode     = document.createTextNode("Date: " + newApply.dateApplied);
		var responseTextNode = document.createTextNode("Response: " + newApply.response);
		var notesTextNode    = document.createTextNode("Notes: " + newApply.notes);

		jobDiv.insertBefore(divCol, jobDiv.childNodes[0]);

		jobArray.unshift(newApply);
	} else{
		var companyTextNode  = document.createTextNode(jobArray[i].company);
		var dateTextNode     = document.createTextNode("Date: " + jobArray[i].dateApplied);
		var responseTextNode = document.createTextNode("Response: " + jobArray[i].response);
		var notesTextNode    = document.createTextNode("Notes: " + jobArray[i].notes);

		jobDiv.appendChild(divCol);
	};

	h1Company.appendChild(companyTextNode);
	pDate.appendChild(dateTextNode);
	pResponse.appendChild(responseTextNode);
	pNotes.appendChild(notesTextNode);

	divCol.appendChild(h1Company);
	divCol.appendChild(pDate);
	divCol.appendChild(pResponse);
	divCol.appendChild(pNotes);;
};

document.getElementById('newTracker').addEventListener('click', newTracker, false);
