# Survey Server

- [About](#About)
- [Link to Site](#Link-to-Site)
- [Navigation](#Navigation)
- [How to Get Started](#How-to-Get-Started)
- [Survey Requirements](#App-Design-Requirements)
    - [Data Storage](#Data-Storage)
    - [Challenge Task](#Challenge-Task)
    - [Technical Requirements and Restrictions](#Technical-Requirements-and-Restrictions)

## About
This project's purpose is to use Pure.css, Flask, Jinja, Chart.js, PostgreSQL, and Heroku to create a survey for CSCI5117 students of where they are in their study careers. The administrator can see the whole picture of the survey by going to the chart summary page that uses the Chart.js library, which can be viewed in the Navigation section.

## Link to Site
* Survey site: <https://wileybui-survey.herokuapp.com/>
* Challenge Task site: <http://wileybui-survey.herokuapp.com/admin/summary>

## Navigation
* `/` - This is the main page of the survey, where it asks the user if they are willing to consent to participate in our survey. If so, they may click **Consent** to redirect to the *Survey* page. Otherwise, they may click **Decline** to redirect to its corresponding *Decline* page.
        ![Main page](site_images/main.png?raw=true "Main page")
* `/survey` - This is the core of the implementation, where the user must enter their major in the textbox. Additionally, they may also want to select the year that they are currently in college, as well as selecting the reason why they're taking CSCI 5117. If he/she has any suggestions about the site, he/she may click on `I have a suggestion for this survey` checkbox to fill out the suggestion.
        ![Survey page](site_images/survey.png?raw=true "Survey page")
* `/decline` - User gets redirected to this page when they don't want to participate in our survey.
        ![Decline page](site_images/decline.png?raw=true "Decline page")
* `/thanks` - Once the user is finished with their survey, they are redirected to this page as a way to thank them.
        ![Thanks page](site_images/thanks.png?raw=true "Thanks page")
* `/api/results` - Returns the JSON contents of all the survey responses that we have collected to date (sorted by the oldest to the newest date).
        ![JSON API Results page](site_images/api_results.png?raw=true "JSON API Results page")
* `/api/results?reverse=true` - Similarly, this page returns the JSON contents of all the survey responses that we have collected to date, but it's sorted by the newest to the oldest date.
        ![JSON API Results (Reversed) page](site_images/api_results_reverse.png?raw=true "JSON API Results (Reversed) page")
* `/admin/summary` - Shows the bar and pie graphs of the overall results from the surveys. The graphs show what year the current students are in, the number of surveys filled out each day, the majors who are taking CSCI 5117, and the reasons why they are taking CSCI 5117. The graphs are from the [Chart.js](https://www.chartjs.org) library. Furthermore, the user may click the checkbox on the bottom of the page if they may choose to display the entire database.
        ![Admin summary page](site_images/summary.png?raw=true "Admin summary page")

## How to Get Started
In order to run this project, one must install `Python, pip, pipenv, flask, gunicorn, and psycopg2`. Additionally, one must set up Heroku's PostgresSQL properly.

Assuming you've installed Python, pip, and pipenv, to set up, use
```console
pipenv install
pipenv shell
pipenv install flask gunicorn psycopg2
heroku create
heroku ps:scale web=1
heroku addons:create heroku-postgresql:hobby-dev
heroku pg:psql
```

After finishing the commands above, one must copy the DATABASE_URL from Heroku's settings to the .env file.

Finally, to run the app, use
```console
FLASK_APP=server.py FLASK_ENV=development flask run
```

To push to Heroku, use
```console
git add .
git commit -m "Message goes here"
git push heroku main
```

<br />

# App Design Requirements
[Requirements written by [Daniel Kluver](https://cse.umn.edu/cs/daniel-kluver), from the University of Minnesota]

Your survey app must have the following URLs/pages:

* `/` -- the root page describes the survey and asks the user to consent to participate. It has two buttons at the bottom: "consent" (go to /survey) and "decline" (go to /decline).
* `/survey` -- asks the user a few questions, then a "next" button (go to /thanks). The input types must include:
    * text input -- this field is "required" and has a minimum length of 3 characters. The user cannot proceed without filling it out -- use html5 validation.
    * a group of 3 or more radio buttons
    * select box with 3 or more options
    * checkbox
    * finally, there must be one "conditional" field of type textarea that appears or disappears depending on the state of the checkbox input.
* `/decline` -- a page that says "thanks anyway" or something like that
* `/thanks` -- says thank you to the user for completing the survey
The pages above must share a template with a header that is consistent throughout. 

The app must be styled using https://purecss.io/ (with additional custom CSS, if you wish). The survey form fields should be styled according to https://purecss.io/forms/.

The app must have one more URL:

* `/api/results` -- This URL is an API endpoint that returns a JSON representation of all the survey responses that you have collected to date (see below for data storage requirements). By default, it should return all responses (natural order by primary key is fine). This endpoint should support the following query parameter:
    * `?reverse=true` -- if the user includes this query parameter the results are instead ordered by most recent first


## Data Storage
Your postgres database only needs a single table to store survey responses. It should include a field for each survey question, as well as an auto-incrementing primary key (e.g., `id SERIAL PRIMARY KEY`) and a timestamp. 

The json representation of survey responses should include the id and timestamp fields, along with all of the responses. You may use [python](https://docs.python.org/3/library/json.html) or [postgres](https://hashrocket.com/blog/posts/faster-json-generation-with-postgresql) to encode the json, it's up to you.

## Challenge Task
Completing the previous steps correctly will earn you an A- (90%).  If you wish to push yourself to earn the final 10%, complete this section.

Add one more page to complete the challenge task:

* `/admin/summary` -- this web page shows an aggregated summary of the survey results:
    * text answers are shown individually
    * for each choice/checkbox question: one summary chart (e.g., [bar chart](https://www.chartjs.org/samples/latest/charts/bar/vertical.html))
    * one additional [time series chart](https://www.chartjs.org/samples/latest/scales/time/financial.html) that shows the number of survey responses per day
    * the charts must be rendered with http://www.chartjs.org


## Technical Requirements and Restrictions:
- The app must be hosted on heroku.
- The server must be written in Flask, using Jinja for templating.
- The server must use heroku's Postgre database for data storage.
- The client must use Pure CSS for styling.
- The client may use vanilla JavaScript or jQuery.