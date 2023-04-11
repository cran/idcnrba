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
