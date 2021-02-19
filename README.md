## Student Information
* Wiley Bui, buixx206@umn.edu

## Link to Site
* <https://wileybui-survey.herokuapp.com/>

## Challenge Task
* I started the challenge task: [yes]
* I completed the challenge task: [yes]
    * <http://wileybui-survey.herokuapp.com/admin/summary>

## Navigations
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

## Documentations
In order to run this project, one must install Python, pip, pipenv, flask, gunicorn, and psycopg2. Additionally, one must set up Heroku's PostgresSQL properly.

Assuming you've installed Python, pip, and pipenv. To set up:
1. pipenv install
1. pipenv shell
1. pipenv install flask gunicorn psycopg2
1. heroku create
1. heroku ps:scale web=1
1. heroku addons:create heroku-postgresql:hobby-dev
1. heroku pg:psql

After finishing the commands above, one must copy the DATABASE_URL from Heroku's settings to the .env file.

To run:
1. FLASK_APP=server.py FLASK_ENV=development flask run

To push to Heroku:
1. git add .
1. git commit -m "Message goes here"
1. git push heroku main
