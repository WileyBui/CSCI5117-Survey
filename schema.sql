drop table survey;

create table survey(
  survey_id SERIAL    PRIMARY KEY,
  time_stamp          TIMESTAMP NOT NULL DEFAULT(NOW()),
  student_major       varchar(64),
  student_year        varchar(64),
  student_reason      varchar(124),
  student_suggestion  varchar(1024)
);


INSERT INTO survey (student_major, time_stamp) values ('Computer Science', NOW() - interval '4 day');
INSERT INTO survey (student_major, time_stamp) values ('Computer Science', NOW() - interval '4 day');
INSERT INTO survey (student_major, time_stamp) values ('Computer Science', NOW() - interval '4 day');
INSERT INTO survey (student_major, time_stamp) values ('Computer Science', NOW() - interval '4 day');
INSERT INTO survey (student_major, time_stamp) values ('Computer Science', NOW() - interval '4 day');
INSERT INTO survey (student_major, time_stamp) values ('Computer Science', NOW() - interval '3 day');
INSERT INTO survey (student_major, time_stamp) values ('Computer Science', NOW() - interval '2 day');
INSERT INTO survey (student_major, time_stamp) values ('Computer Science', NOW() - interval '2 day');
INSERT INTO survey (student_major, time_stamp) values ('Computer Science', NOW() - interval '2 day');
INSERT INTO survey (student_major, time_stamp) values ('Computer Science', NOW() - interval '1 day');
INSERT INTO survey (student_major, time_stamp) values ('Computer Science', NOW() - interval '1 day');
INSERT INTO survey (student_major, time_stamp) values ('Computer Science', NOW() - interval '1 day');
INSERT INTO survey (student_major, time_stamp) values ('Computer Science', NOW() - interval '1 day');
INSERT INTO survey (student_major, time_stamp) values ('Computer Science', NOW() - interval '1 day');
INSERT INTO survey (student_major, time_stamp) values ('Computer Science', NOW() - interval '1 day');
INSERT INTO survey (student_major, time_stamp) values ('Computer Science', NOW() - interval '1 day');
INSERT INTO survey (student_major, time_stamp) values ('Computer Science', NOW() - interval '1 day');
INSERT INTO survey (student_major, time_stamp) values ('Computer Science', NOW() - interval '1 day');