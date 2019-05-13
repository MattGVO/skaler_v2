INSERT INTO cred(
    email,
    password
) VALUES(
    ${email},
    ${hash}
);

INSERT INTO user_info(
    email
) VALUES(
    ${email}
) returning *;