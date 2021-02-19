## Student Information
* Wiley Bui, buixx206@umn.edu

## Link to Site
* <https://wileybui-survey.herokuapp.com/>

## Challenge Task
* I started the challenge task: [yes]
* I completed the challenge task: [yes]
    * <http://wileybui-survey.herokuapp.com/admin/summary>

## Documentations
* `/` - This is the main page of the survey, where it asks the user if they are willing to consent to participate in our survey. If so, they may click **Consent** to redirect to the *Survey* page. Otherwise, they may click **Decline** to redirect to its corresponding *Decline* page.
* `/survey` - This is the core of the implementation, where the user must enter their major in the textbox. Additionally, they may also want to select the year that they are currently in college, as well as selecting the reason why they're taking CSCI 5117. If he/she has any suggestions about the site, he/she may click on `I have a suggestion for this survey` checkbox to fill out the suggestion.
* `/decline` - User gets redirected to this page when they don't want to participate in our survey.
* `/thanks` - Once the user is finished with their survey, they are redirected to this page as a way to thank them.
* `/api/results` - Returns the JSON contents of all the survey responses that we have collected to date (sorted by the oldest to the newest date).
* `/api/results?reverse=true` - Similarly, this page returns the JSON contents of all the survey responses that we have collected to date, but it's sorted by the newest to the oldest date.
* `/admin/summary` - Shows the bar and pie graphs of the overall results from the survey. The graphs show what year the current student is in, the number of surveys filled out each day, the majors who are taking CSCI 5117, and the reason why they are taking CSCI 5117. The graphs are from the [Chart.js](https://www.chartjs.org) library. Furthermore, the user may click the checkbox on the bottom of the page if they may choose to display the entire database.