DROP TABLE cred, user_info, tuning

CREATE TABLE cred (
    id SERIAL PRIMARY KEY,
    email TEXT NOT NULL,
    password TEXT NOT NULL
);
CREATE TABLE user_info(
    id SERIAL PRIMARY KEY,
    email TEXT NOT NULL
)
;
CREATE TABLE tuning(
    user_id INTEGER NOT NULL REFERENCES user_info(id),
    tuning_name VARCHAR(80) NOT NULL
);
