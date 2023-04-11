library(survey)
library(idcnrba)
library(testthat)
library(dplyr)

types <- read.csv(system.file("types.csv", package = "idcnrba"))
routines <- read.csv(system.file("routines.csv", package = "idcnrba"))
parameters <- read.csv(system.file("parameters.csv", package = "idcnrba"))
parameters_html_crosswalk <- read.csv(system.file("parameters_html_crosswalk.csv", package = "idcnrba"))
output_table_dictionary <- read.csv(system.file("output_table_dictionary.csv", package = "idcnrba"))

# types <- read.csv("C:/projects_etc/R-NRBA/r-nrba/inst/types.csv")
# routines <- read.csv("C:/projects_etc/R-NRBA/r-nrba/inst/routines.csv")
# parameters <- read.csv("C:/projects_etc/R-NRBA/r-nrba/inst/parameters.csv")
# parameters_html_crosswalk <- read.csv("C:/projects_etc/R-NRBA/r-nrba/inst/parameters_html_crosswalk.csv")
# output_table_dictionary <- read.csv("C:/projects_etc/R-NRBA/r-nrba/inst/output_table_dictionary.csv")

types <- types %>% mutate_if(is.character, function(x) trimws(x))
routines <- routines %>% mutate_if(is.character, function(x) trimws(x))
parameters <- parameters %>% mutate_if(is.character, function(x) trimws(x))
parameters_html_crosswalk <- parameters_html_crosswalk %>% mutate_if(is.character, function(x) trimws(x))
output_table_dictionary <- output_table_dictionary %>% mutate_if(is.character, function(x) trimws(x))

parameters <- inner_join(parameters, parameters_html_crosswalk, by = c("type", "routine_name", "parameter"),
                         multiple = "all")
input_vars <- parameters[parameters$parameter_label == "Input Variable",]

# t1
routine_name <- "calculate_response_rates"
routine_label <- routines[which(routines$routine_name == routine_name), "routine_label"]
type <- types$type[which(types$type_label == routine_label)]
t_input_vars <- input_vars[which(input_vars$routine_name == routine_name),] # primary key
t_input_vars <- t_input_vars[which(t_input_vars$type == as.integer(type)),]

test_that("t1_CSV_TEST", {
  expect_true(type == 1)
  expect_true("analysis_response_rates_group" == t_input_vars$html_id[1])
})

# t2
routine_name <- "chisq_test_ind_response"
routine_label <- routines[which(routines$routine_name == routine_name), "routine_label"]
type <- types$type[which(types$type_label == routine_label)]
t_input_vars <- input_vars[which(input_vars$routine_name == routine_name),] # primary key
t_input_vars <- t_input_vars[which(t_input_vars$type == as.integer(type)),]

test_that("t2_CSV_TEST", {
  expect_true(type == 2)
  expect_true("chisq_aux_variables" == t_input_vars$html_id[1])
})

# t3_1
routine_name <- "t_test_vs_external_estimate"
routine_label <- routines[which(routines$routine_name == routine_name), "routine_label"]
type <- types$type[which(types$type_label == routine_label)]
t_input_vars <- input_vars[which(input_vars$routine_name == routine_name),] # primary key
t_input_vars <- t_input_vars[which(t_input_vars$type == as.integer(type)),]

test_that("t3_1_CSV_TEST", {
  expect_true(type == 5)
  expect_true("t3_y_var" == t_input_vars$html_id[1])
})

# t3_2
routine_name <- "chisq_test_vs_external_estimate"
routine_label <- routines[which(routines$routine_name == routine_name), "routine_label"]
type <- types$type[which(types$type_label == routine_label)]
t_input_vars <- input_vars[which(input_vars$routine_name == routine_name),] # primary key
t_input_vars <- t_input_vars[which(t_input_vars$type == as.integer(type)),]

test_that("t3_2_CSV_TEST", {
  expect_true(type == 5)
  expect_true("t3_y_var" == t_input_vars$html_id[1])
})

# t4_1
routine_name <- "t_test_resp_vs_full"
routine_label <- routines[which(routines$routine_name == routine_name), "routine_label"]
type <- types$type[which(types$type_label == routine_label)]
t_input_vars <- input_vars[which(input_vars$routine_name == routine_name),] # primary key
t_input_vars <- t_input_vars[which(t_input_vars$type == as.integer(type)),]

test_that("t4_1_CSV_TEST", {
  expect_true(type == 4)
  expect_true("t4_y_var" == t_input_vars$html_id[1])
})

# t4_2
routine_name <- "t_test_resp_vs_elig"
routine_label <- routines[which(routines$routine_name == routine_name), "routine_label"]
type <- types$type[which(types$type_label == routine_label)]
t_input_vars <- input_vars[which(input_vars$routine_name == routine_name),] # primary key
t_input_vars <- t_input_vars[which(t_input_vars$type == as.integer(type)),]

test_that("t4_2_CSV_TEST", {
  expect_true(type == 4)
  expect_true("t4_y_var" == t_input_vars$html_id[1])
})

# t5
routine_name <- "t_test_of_weight_adjustment"
routine_label <- routines[which(routines$routine_name == routine_name), "routine_label"]
type <- types$type[which(types$type_label == routine_label)]
t_input_vars <- input_vars[which(input_vars$routine_name == routine_name),] # primary key
t_input_vars <- t_input_vars[which(t_input_vars$type == as.integer(type)),]

test_that("t5_CSV_TEST", {
  expect_true(type == 9)
  expect_true("t5_wt_adj_comparison_vars" == t_input_vars$html_id[1])
})

# t6
routine_name <- "predict_response_status_via_glm"
routine_label <- routines[which(routines$routine_name == routine_name), "routine_label"]
type <- types$type[which(types$type_label == routine_label)]
t_input_vars <- input_vars[which(input_vars$routine_name == routine_name),] # primary key
t_input_vars <- t_input_vars[which(t_input_vars$type == as.integer(type)),]

test_that("t6_CSV_TEST", {
  expect_true(type == 3)
  expect_true("t6_numeric_predictors" %in% t_input_vars$html_id &&
              "t6_categorical_predictors" %in% t_input_vars$html_id &&
                nrow(t_input_vars) == 2)
})

# t7
routine_name <- "predict_outcome_via_glm"
routine_label <- routines[which(routines$routine_name == routine_name), "routine_label"]
type <- types$type[which(types$type_label == routine_label)]
t_input_vars <- input_vars[which(input_vars$routine_name == routine_name),] # primary key
t_input_vars <- t_input_vars[which(t_input_vars$type == as.integer(type)),]

test_that("t7_CSV_TEST", {
  expect_true(type == 7)
  expect_true("t7_outcome_variable" %in% t_input_vars$html_id &&
              "t7_numeric_predictors" %in% t_input_vars$html_id &&
              "t7_categorical_predictors" %in% t_input_vars$html_id &&
                nrow(t_input_vars) == 3)
})

# t8
routine_name <- "get_cumulative_estimates"
routine_label <- routines[which(routines$routine_name == routine_name), "routine_label"]
type <- types$type[which(types$type_label == routine_label)]
t_input_vars <- input_vars[which(input_vars$routine_name == routine_name),] # primary key
t_input_vars <- t_input_vars[which(t_input_vars$type == as.integer(type)),]

test_that("t8_CSV_TEST", {
  expect_true(type == 8)
  expect_true("t8_y_var" %in% t_input_vars$html_id &&
                "t8_predictor_variable" %in% t_input_vars$html_id)
})

# t9
routine_name <- "t_test_of_weight_adjustment"
routine_label <- routines[which(routines$routine_name == routine_name), "routine_label"]
type <- types$type[which(types$type_label == routine_label)]
t_input_vars <- input_vars[which(input_vars$routine_name == routine_name),] # primary key
t_input_vars <- t_input_vars[which(t_input_vars$type == as.integer(type)),]
test_that("t9_CSV_TEST", {
  expect_true(type == 9)
})

# overall CSV checks
test_that("Every value of `is_percentage = 'Maybe'` has a determiner column", {
  n_missing_percent_determiner <- output_table_dictionary |>
    subset(tolower(is_percentage) == "maybe") |>
    subset(is.na(percent_determiner)) |>
    nrow()
  expect_lt(object = n_missing_percent_determiner,
            expected = 1)
})
