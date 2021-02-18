drop table survey;

create table survey(
  survey_id SERIAL    PRIMARY KEY,
  time_stamp          TIMESTAMP NOT NULL DEFAULT(NOW()),
  student_major       varchar(64),
  student_year        varchar(64),
  student_reason      varchar(124),
  student_suggestion  varchar(1024)
);
