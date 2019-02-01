# FriendFinder

## Introduction
Hello! FriendFinder is a web application that connects users with their most compatible friend from an existing set of candidates. A user enters the program and answers a few survey questions, scoring each from 1 to 5 and is then matched with another user that has the least amount of differences in their question answers. The algorithm to match users takes into account the difference in score for each question, calculates the cumulative difference and then compares this cumulative difference to other differences calculated from other potential matches. The user is matched with someone who has the least cumlative difference out of the existing candidates. The current user's answers and data are then stored in a local array with the other candidates, so new users can potentially be matched with even more candidates. The current candidates are Harry Potter characters, because who doesn't love Harry Potter? :)

Please read on for more information!

## Technologies
Node.js - JavaScript if/else statements, loops, module import, client data gathering<br/>
Express - get/post routing<br/>
HTML and CSS - Bootstrap for styling, survey construction and modals


## Methodology 
The general methodology for this project involving gathering user input, constructing an array of answers and then comparing that answers array with existing user's answers array. The match was calculated using the algorithm described above. 

However, the most crucial part of the application was working with node.js and express to start a local server and construct get and post routes to handle user entered urls and user inputs. This was my first full stack project and required that I not only master backend logic but also do so by connecting various files that separated routes and stored data. 

Please reach out with any questions!
