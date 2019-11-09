# FRONTEND exercise - Liraz Yehezkel

## Engineering assumptions:

- There is no specific demand for saving the additional data. Hence, the table's additional data will disappear on page refreshing / switching tabs.
- The buttons on the page that do not require functionality will be non-clickable buttons. 

## Solution thought process:

- Reading and Understanding the exercice's demands.
- Dividing the page to components.
- Understanding the objects contained in the JSON files.

## Production environment:

- Adding a server side application for saving the table's additional data (DB).
- Separating the client's configuration to 'production' and 'development'.

## Parts not handled:

- The CSS could have come out more accurate in some parts, but I decided to leave it because of lack of time.
- I did not create models for the JSON file objects, I preferred to spend the time making things work and making the page look as much as required in this type of exercise and in its allocated time.
- I did not remove the files that were automatically added from the Angular project creation and were not used because I preferred to spend the time on things that were more meaningful to the exercise.

## Execution instructions:

- Open cmd or IDE on the project directory
- Run:
```
 npm install
```
```
 npm start
```
- Open browser on http://localhost:4200