from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/')
def survey_root():
    return render_template("main.html")

    # user_name = request.args.get("userName", "unknown")
    # return render_template('main.html', user=user_name)
    
@app.route('/survey')
def survey_consent():
    return render_template("survey.html")

@app.route('/decline')
def survey_declined():
    return render_template("decline.html")

@app.route('/thanks')
def survey_thanks():
    return render_template("thanks.html")