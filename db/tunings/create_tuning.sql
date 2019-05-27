INSERT INTO tuning (
    user_id,
    tuning_name,
    notes
) VALUES (
    ${id},
    ${tuningName},
    ${notes}
);

SELECT tuning_name, notes
FROM tuning
WHERE user_id = ${id};