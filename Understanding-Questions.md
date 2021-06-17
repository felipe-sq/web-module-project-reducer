# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* The number is passed as an argument to applyNumber through the click handler.
* Within the reducer, the switch case runs through APPLY_NUMBER, creating a copy of state and inserting the passed number as “action.payload” to be used.
* Depending on the selected operation (“+”, “*” or “-”), the state.total and action.payload (the number passed in through applyNumber) will be passed to calculateResult.
* Within calculateResult, an action will be triggered via the switch case based on the selected operation (i.e., state.total + action.payload, state.total * action.payload, etc.).

* TotalDisplay shows the total plus 1.
