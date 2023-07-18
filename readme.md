# Star Wars Battle Game

Star Wars Battle Game fetches character data from the Star Wars API (swapi) to randomly generate and display two players on cards. The user then battles the players against one another to see who wins. Results are random and based on a hardcoded array of possible responses. The winner is displayed underneath the two players.

Note: character 17 on the Star Wars API yields no data. If the 'generate' button yields no character data, simply click the button again.

## Purpose

Fun and games.

## How to Use the Website

Click the 'Start!' button on the landing page (index.html) or navigate to the 'battle' page (battle.html) using the top navigation bar. Then click "generate" for Player 1 and Player 2. Once you have generated 2 characters, click "Battle!" to see the results.

## Requirements and Features

### Visually Appealing

Colors are Star Wars themed.
Semantic code using header, main, footer, and section tags.
Each html page uses a standard grid layout. The battle.html page has its own unique grid layout in desktop view.

### Responsiveness

Mobile-first design with media query for desktop. Top navigation hamburger menu for mobile switches to static layout on desktop layout.
Accessibility includes a skip link at the top of the web pages.

### Features

Feature 1 (list 1): Use arrays, objects, sets or maps to store and retrieve information that is displayed in your app.
-Character objects and the battle responses array are populated with data retrieved from an API. Both are displayed on the DOM. Character objects store the character data and the battle responses array stores the possible outcomes of the battles.

Feature 2 (list 1): Analyze data that is stored in arrays, objects, sets or maps and display information about it in your app.
-The battle responses array is analyzed (randomly) and displayed on the DOM, triggered by a click event.

Feature 3 (list 1): Calculate and display data based on an external factor (ex: get the current date, and display how many days remaining until some event).
-Landing page (index.html) has a countdown to the release of the upcoming show, Ahsoka. Current date is displayed on each page.

Feature 4 (list 2): Retrieve data from a third-party API and use it to display something within your app.
-Data from the Star Wars API (swapi) is retrieved with an async/await function and displayed on the battle.html page.
