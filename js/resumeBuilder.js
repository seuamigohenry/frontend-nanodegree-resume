/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name": "Henry Hsu",
	"role": "Web Developer",
	"contacts": {
		"mobile":"55 11 95736 7469",
		"email": "henry.hsu@me.com",
		"github": "seuamigohenry",
		"twitter": "@seuamigohenry",
		"location": "Sao Paulo",
	},
	"welcomeMessage": "Hello my friend",
	"skills": [
		"awesomeness", "delivering things", "your good friend"
	],
	"biopic": "images/fry.jpg",
	"display": function(){
		var formattedName = HTMLheaderName.replace("%data%", this.name);
		var formattedRole = HTMLheaderRole.replace("%data%", this.role);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

		var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
		var formattedTwitter = HTMLtwitter.replace("%data%", this.contacts.twitter);
		var formattedGithub = HTMLgithub.replace("%data%", this.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);

		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedTwitter);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedLocation);

		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedGithub);
		$("#footerContacts").append(formattedLocation);

		var formattedBioPic = HTMLbioPic.replace("%data%", this.biopic);
		$("#header").append(formattedBioPic);

		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
		$("#header").append(formattedWelcomeMsg);

		$("#header").append(HTMLskillsStart);

		this.skills.forEach(function(skill) {
			var formattedSkill = HTMLskills.replace("%data%", skill);
			$("#skills").append(formattedSkill);
		});
	} 
};

bio.display();

var education = {
	"schools": [
		{
			"name": "Ecole Polytechnique",
			"location": "Paris",
			"degree": "Engineering",
			"majors": [ "Applied Math" ],
			"dates": "2008-2011",
			"url": "polytechnique.edu"
		},
		{
			"name": "ITA",
			"location": "SJC",
			"degree": "Engineering",
			"majors": [ "Computer Engineering" ],
			"dates": "2005-2007",
			"url": "ita.br"
		}
	],
	"onlineCourses": [
		{
			"title": "Web Development",
			"school": "udacity",
			"date": "2016",
			"url": "udacity.com"
		}
	],
	"display": function(){
		this.schools.forEach(function(school) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
			var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
			$(".education-entry:last").append(formattedSchoolNameDegree);

			var formattedSchoolDate = HTMLschoolDates.replace("%data%", school.dates);
			$(".education-entry:last").append(formattedSchoolDate);

			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
			$(".education-entry:last").append(formattedSchoolLocation);

			school.majors.forEach(function(major) {
				var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
				$(".education-entry:last").append(formattedSchoolMajor);
			});
			
		});
		$("#education").append(HTMLonlineClasses);
		this.onlineCourses.forEach(function(course) {
			$("#education").append(HTMLschoolStart);
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
			var formattedTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
			$(".education-entry:last").append(formattedTitleSchool);
			
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.date);
			$(".education-entry:last").append(formattedOnlineDates);

			var formattedOnlineURL = HTMLonlineURL.replace("%data%", course.url);
			$(".education-entry:last").append(formattedOnlineURL);
		});
	}
};

education.display();

var work = {
	"jobs": [
		{
			"title": "Strat",
			"employer": "GM",
			"dates": "2015 - 2016",
			"location": "Sao Paulo",
			"description": "hello friend",
		},
		{
			"title": "iOS developer",
			"employer": "BluegreenApple",
			"dates": "2015 - 2016",
			"location": "Sao Paulo",
			"description": "hello friend",
		}
	],
	"display": function(){
		work.jobs.forEach(function(job) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
			
			var formattedEmployerTitle = formattedEmployer + formattedTitle;

			var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedWorkDates);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedWorkDescription);
		});
	}
};

work.display();

var projects = {
	projects: [
		{
			"title": "windsurf",
			"dates": "2015",
			"description": "windsurf rocks",
			"images": [ "images/fry.jpg" ],
		},
		{
			"title": "sailing",
			"dates": "2016",
			"description": "sailing rocks",
			"images": [ "images/fry.jpg" ],
		}
	],
	"display": function(){
		this.projects.forEach(function(proj) {
			$("#projects").append(HTMLprojectStart);
			var formattedProjTitle = HTMLprojectTitle.replace("%data%", proj.title);
			$(".project-entry:last").append(formattedProjTitle);
			var formattedProjDate = HTMLprojectDates.replace("%data%", proj.dates);
			$(".project-entry:last").append(formattedProjDate);
			var formattedProjDesc = HTMLprojectDescription.replace("%data%", proj.description);
			$(".project-entry:last").append(formattedProjDesc);
			proj.images.forEach(function(img) {
				var formattedProjImage = HTMLprojectImage.replace("%data%", img);
				$(".project-entry:last").append(formattedProjImage);
			});
		});	
	}
};

projects.display();

$("#mapDiv").append(googleMap);
