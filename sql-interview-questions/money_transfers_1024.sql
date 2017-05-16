-- Write a query in SQL that returns a list of accounts that have received at least 1024 USD in at most three transfers. In other words, an account name is to be listed if there exist some three (or fewer) transfers, with the recipient equal to the account name, such that the sum of the transferred amounts is not less that 1024 USD. Note that there can be more than three transfers to that account, as long as some three or fewer transfers amount to at least 1024 USD. The table should be ordered by name (in ascending order).

SELECT
    t1.recipient
FROM transfers AS t1
WHERE (
    SELECT COUNT(*)
    FROM transfers t2
    WHERE
        t2.recipient = t1.recipient
        AND t2.amount >= t1.amount
) <= 3
GROUP BY t1.recipient
HAVING SUM(t1.amount) >= 1024
ORDER BY t1.recipient;
