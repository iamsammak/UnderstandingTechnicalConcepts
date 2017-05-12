Personal Pitch
  - start with entertainment



Http is part of the application layer
TCP is part of the transport layer

http stands for hypertext transfer protocol
tcp stands for transmission control protocol

HTTP is a request and response protocol
Using HTTP Verbs when you enter a URL in your web browser, an HTTP command is sent to the web server to fetch and transfer the requested web page information

TCP will take the data split it into packets and transfer the packets over the either via IP protocol and reassemble the packets once it arrives at the target destination


SQL

Write a query to get the list of users who took the training lesson more than once in the same day, grouped by user and training lesson, each ordered from the most recent lesson date to oldest date.

Well lets break the problem down.
`We want a list of users`
  SELECT
    u.user_id
    username
`who took the training lesson`
  SELECT
    training_id
`more than once in the same day`
  - have a count for the training_date
  - can't be training_date see we are grouping by that
  - maybe user_training_id
  **COME BACK AT THE END**
`grouped by user, training lesson`
  GROUP BY
    user_id,
    training_id
`each ordered from the most recent lesson date to oldest date`
  ORDER BY
    training_date DESC
  - which means we also need to display training date
  SELECT
    training_date
  - and group by too
  GROUP BY
    training_date
-back to "more than once in the same day"
  SELECT
    count ( user_training_id ) count
  HAVING
    count (user_training_id) > 1


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

only when `GROUP BY` is used
- `WHERE` clause is used to filter rows before you aggregate them and then `HAVING` clause comes in picture for final filtering.






withRouter allows you to push your string into the router params

ownProps look up that


Coding Challenges

Write a README
include what you didn't get to or instructions on your demo

try it before you turn it in, clone the repo, try the instructions


Sample Challenge
  Prompt: write a function that takes in the state of a chessboard and a color and returns that color's valid moves

https://github.com/ScottDuane/HumbleBundleChess

front end only, api has restriction on what kind of calls it can do
