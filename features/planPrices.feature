Feature: Validate Business and Personal & Family pricing page

Scenario: Validate Business plans and pricing
Given user opens homepage
When user clicks plans
Then plans are displayed
And Free price contains 0 euros
And standard price contains xx euros
And premium price contains xxx euros