Learning objectives
This project is designed to test your ability to work with rendering and state management using React. Before taking on this project, you should be comfortable with the learning objectives listed below:

Installing packages via NPM
Running tests from the command line
Writing React function components
Using hooks like useState()
Debugging React code through console output
Steps to complete
To complete this project, you must do the following:

Write code that passes all the tests in the Qualified assessment in this checkpoint.
Write code that passes all of the requirements in the project rubric below, and submit your GitHub repo link to the Thinkful team in the next checkpoint.
Remember to sync this Qualified project with your local machine so that you can commit it to GitHub in the next checkpoint.

Project rubric
For your project to pass, all of the following statements must be true.

All tests are passing in Qualified.
All props are treated as read-only.
Audio plays when the focus timer expires.
Audio plays when the break timer expires.
All state is updated using callbacks to avoid race conditions. Allowable exceptions are cases where the next state is not determined by the current state. For example, when disabling the timer, it is okay to just call setIsTimerRunning(false).
There are at least three components.
Each component has a single responsibility.
The main Pomodoro is free of any conditional display logic. This means that there aren't any if statements in the render function; each component determines its own visibility.
Project feedback
The following lists outline some things that you may receive feedback on. They are presented to you here for learning purposes.

Here are some things that you can do to get feedback as having done something exceptionally well:

Use of prop.types. You haven't learned about prop types yet, so any use shows that you are researching independently.
Use of <> and </>. You haven't learned fragments yet, so any use shows that you are researching independently.
Use of any pure functions.
Use of any clear and informative variable or function names
No conditional logic embedded in the render functions (returned JSX). Although there is nothing wrong with using conditional statements embedded in JSX, avoiding them generally makes the code easier to understand and change over time.
Having a single-state variable for the active session. This would be an object with multiple properties rather than multiple variables for the label, percent complete, time remaining, and so forth.
If you do any of the following, you may receive feedback on them as things to improve. Doing any of these will not cause you to fail the assignment or need to produce revisions.

Use of any non-pure functions that can be changed into pure functions.
Use of any variable or function names that can be improved (such as highly abbreviated names).
Use of if statement to bound lower and upper limits of the focus or break duration. This is because using Math.min() and Math.max() appropriately eliminates the need for if statements with numeric boundaries.
Use of if statements in the returned JSX. Although there is nothing wrong with using conditional statements embedded in JSX, avoiding them generally makes the code easier to understand and maintain.
Use of components with multiple responsibilities or multiple reasons to re-render. For example, if the time format or the upper bound for the focus duration change, consider how many components would need to re-render.
Lots of conditional logic embedded in the useInterval() hook. Most logic should be broken out into small, single-responsibility pure functions that mutate the state as necessary.
