# Practice SQL Interview Questions
(Questions and Solutions taken from https://www.toptal.com/sql/interview-questions)


## Question 1

Given the following tables

![sql tables][sql-tables]

Write a query to get the list of users who took the training lesson more than once in the same day, grouped by user and training lesson, each ordered from the most recent lesson date to oldest date.

#### Scratchboard answer

```sql
  SELECT
    u.user_id,
    username,
    training_id,
    training_date,
    count ( user_training_id ) as count
  FROM
    users u JOIN training details t ON t.user_id = u.user_id
  GROUP BY
    user_id,
    training_id,
    training_date
  HAVING
    count( user_training_id ) > 1
  ORDER BY
    training_date DESC;
```

### Solution

![sql solution][sql-solution]

<!-- Question 1 Links -->
[sql-tables]: ./images/sql_tables.png
[sql-solution]: ./images/sql_solution.png


## Question 2

The above solution users a `HAVING` clause. Explain the difference between the  `WHERE` and `HAVING` clauses.

### Solution

When `GROUP_BY` is not used, the `WHERE` and `HAVING` clauses are essentially equivalent.

However, when `GROUP_BY` is used:
* The `WHERE` clause is used to filter records from a result. The filtering occurs before any groupings are made.
* The `HAVING` clause is used to filter values from a group (ie. to check conditions after aggregation into groups has been performed).

[Another explanation](http://javarevisited.blogspot.com/2013/08/difference-between-where-vs-having-clause-SQL-databse-group-by-comparision.html)

- `WHERE` clause is used to filter rows before you aggregate them and then `HAVING` clause comes in picture for final filtering.
