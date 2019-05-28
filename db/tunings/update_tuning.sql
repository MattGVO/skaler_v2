UPDATE tuning
SET 
tuning_name = ${newName},
notes = ${notes}
WHERE user_id = ${id}
AND tuning_name = ${name};

SELECT tuning_name, notes
FROM tuning
WHERE user_id = ${id};