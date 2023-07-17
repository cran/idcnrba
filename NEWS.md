# idcnrba 1.0.0

* The minimum required version of the 'nrba' package is now 0.2.0.

* The Setup module of the app now checks for bad inputs and displays informative error messages.

* Whenever an error message appears for a specific analysis type, a modal dialog appears with suggestions for how to resolve common errors for that analysis type.

* The Excel output file is formatted using Excel table styles. Important columns in the output table now have bolded entries to help guide users in interpreting the content.

* The analysis types based on regression analysis now clearly indicate in the footnotes which category is used as the reference level for each categorical predictor variable.

* In the weighting analysis type, the output table footnote clearly documents which variables were used to conduct the weighting adjustment.

* Now using the survey package options `options(survey.lonely.psu = 'adjust')` and `options(survey.adjust.domain.lonely = TRUE)`, so that domains with only a single PSU will have nonzero variance estimates.

* If the user specifies strata population sizes but doesn't specify any weights, then the weights are assumed to all be equal (i.e., equal to `1`).

* Minor updates:

  * Tooltips now appear throughout the app, even before loading a data file.

  * Aside from p-values, the default number of decimals for statistics is now 3 instead of 5.

  * Minor layout improvements for some analysis types.



# idcnrba 0.2.0

* Minor cosmetic improvements and typo fixes.

* Simplified user interface for analyzing an attempted census.

* Simplified user interface for the analysis comparing respondents to the full sample.

* Removed ability to specify replicate weights to use for analysis.

* Improved formatting so that percentages in output tables are consistently formatted as such.

* Bug fixes:

  * Secondary Sampling Units (SSUs) are now correctly incorporated into variance estimation, if specified.

  * For regression analysis type, missing values could sometimes be treated as a valid non-missing category when the user is asked which category of the outcome variable they want to predict.

# idcnrba 0.1.0

* Initial release of the package.
