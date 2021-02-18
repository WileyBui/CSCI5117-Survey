from flask import Flask, render_template, request, g, redirect, url_for, jsonify
import datetime
import db
import json

app = Flask(__name__)
@app.before_first_request
def initialize():
    db.setup()

@app.route('/')
def survey_root():
    return render_template("main.html")

@app.route('/survey')
def survey_consent():
    return render_template("survey.html")

@app.route('/survey', methods=['POST'])
def survey_form_post():
    with db.get_db_cursor(True) as cur:
        major = request.form.get("major", "---")
        year = request.form.get("year", None)
        reason = request.form.get("optionsRadios", None)
        suggestion = request.form.get("suggestion", None)
        suggestion = None if suggestion == '' else suggestion
        
        cur.execute("INSERT INTO survey (student_major, student_year, student_reason, student_suggestion) values (%s, %s, %s, %s)", (major, year, reason, suggestion))
        
        return redirect(url_for('survey_results'))
    

@app.route('/decline')
def survey_declined():
    return render_template("decline.html")

@app.route('/thanks')
def survey_thanks():
    return render_template("thanks.html")

@app.route('/record', methods=['GET'])
def survey_results():
    with db.get_db_cursor() as cur:
        cur.execute("SELECT * FROM survey;")
        
        names = cur#[record[0] for record in cur]

        return render_template("results.html", names=names)
    

def datetime_handler(x):
    # this helper method is copied from https://stackoverflow.com/a/35870294/
    if isinstance(x, datetime.datetime):
        return x.isoformat()
    raise TypeError("Unknown type")


@app.route('/api/results', methods=['GET'])
def survey_api_results():
    # this method contents are mainly copied from
    # https://stackoverflow.com/a/43796849/14651198
    reverse = request.args.get("reverse", False)

    with db.get_db_cursor() as cur:
        if not reverse:
            cur.execute("SELECT * FROM survey;")
        else:
            cur.execute("SELECT * FROM survey ORDER BY survey_id DESC;")
            
        row_headers = [x[0] for x in cur.description]
        rv          = cur.fetchall()
        json_data   = []
        
        for result in rv:
            json_data.append(dict(zip(row_headers,result)))

        json_output = json.dumps(json_data, default=datetime_handler)
        
        # json sort_keys
        return json_output