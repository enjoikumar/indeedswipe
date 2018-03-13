# Front End Developer Job Swipe
==========================================
## Some of the important componets in the job section are:
    The screen section, swipe.js, slides.js, and the actions component.

    The screen section are the 'pages' the user will see. Starting with the Welcome screen which will check if the user has logged in before using facebook authentication (AuthScreen). Afterwards the user is shown a map via the Google Maps API (MapScreen), which right now is focused in NYC. There is a button at the bottom 'Search for jobs', which will parse the region for jobs that have the key word 'front end developer' in the Indeed API. After searching, a deck of 10 jobs will be shown to the user (DeckScreen). The user than can swipe left to decline, or right which will add the cards to a Review jobs where the user can apply to the jobs (ReviewScreen), there is also a settings section which just clears the job section.


#### Notes
using react native to show user a form to sign in and sign up
twilio to send message to users
firebase to store user data, including user accounts and correct otp codes
google cloud function will use tiny bits of code that run onet ime on demand, and it has access to data on firebase

Doing serverless computing becasue the functions do exactly one thing, the requests are directed externally to a specific function, code is organized into functions and is an extremely short lived process, runs on cloud machinery. 

Handling a new User:

    Cloud function #1
    1.user enters email and phone
    2.veryify phone is not in user
    3.create a new user record in firebase
    4.respond to request, statng user was created

    Cloud function #2
    5.user requests to login with phone number
    6.generate a code
    7.save the code to the users record
    8.text the code to the user

    Cloud function #3
    9.user enters code
    10.compare codes
    11.mark code as no longer being valid
    12.return a JWT to user


Create firebase project
set up local firebase project
write function to create a user
sign up for twillio
write function to generate and text a user

## Had to delete initial repository because of folder issues. 
## Started project on march 2nd

3/5
-just adding steps to the readme
-mispelled componentWillReceiveProps

3/4
-cards are stylized to stack on top more nicely
-cards are now stackable
-component to push card renderNoMoreCards
-cards pushed up after swipe

3/3
-pushing component for rendering second card
-condensed lef right swipe disapear methos
-card disapears after swipe
-created component for PanResponderRelease
cards reset after half swipe
-drag is consistent for all screen widths
-able to rotate first card: like/dislike
-animated the first card on the screen
-created movement using animates and panresponder

3/2
-created the first few components, including a test deck and a pan responder
-second commit before starting
-first commit, also created animated ball
