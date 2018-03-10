## Friend Finder

The Friend Finder web application is a node.js server based program that asks the user to complete a short survey
and finds/displays a compatible friend.

## Functionality 

The overall program architecture makes use of Express.js in order to make various GET and POST calls to the friends database. The program utilizes various API routes in order to both retrieve data on current friends in the database, as well as to post new data to it as well. 

The web app contains two pages, the home page and the survey page. The home page displays a welcoming message and a button to go to the survey page.
The survey page contains all the questions that will help gauge who is the user's most compatible friend. Both of these html pages utilize
the BootStrap CSS library, as well as jQuery to gather the responses chosen by the user. JQuery is also used to send GET and POST requests
to the server. 

The overall logic of the app resides in the apiRoutes.js file. Within the file I gather the current friends array and extract the 
scores array of each friend using a for loop. I then created an additional for loop within that one in order to search through both the 
user score's array and the arrays of previous friends in order to calculate the difference between the scores. The combination with the lowest
difference is returned as the best friend of the user. 

## Libraries Used

The NPM packages used in this project include: 
	-express.js
	-body-parse
	