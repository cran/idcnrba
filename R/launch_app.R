#' @title Launch the IDC NRBA application
#'
#' @description Launches an interactive application
#' for conducting nonresponse bias analysis.
#'
#' @param maxRequestSize Number defining the maximum allowed filesize (in megabytes)
#' for uploaded files, defaults to 50MB
#' @param debug Logical value. If \code{debug = TRUE},
#' then tracing output will be displayed in the R console
#' so that the user can see the values being passed
#' between the R session running the application
#' and the browser displaying the application.
#' @param shiny.server Setting this parameter to \code{TRUE} will return the app in the form of an
#' object rather than invoking it. This is useful for deploying this app via \code{shiny-server}.
#' @return Launches an interactive Shiny app; the function does not return a value.
#' @details The application is a graphical user interface
#' developed using the \emph{shiny} and \emph{rmarkdown} frameworks.
#' This application requires Pandoc to be installed.
#' If the application is run from within RStudio,
#' then Pandoc should automatically be available,
#' as Pandoc is bundled with RStudio installations.
#' @export
#'
#' @examples
#' if (interactive()) {
#'   launch_app()
#' }
launch_app <- function(maxRequestSize = 50, debug = FALSE, shiny.server = FALSE) {

  # Recursively call `launch_app()` from within `shiny::runApp()`
  if(!shiny.server) {
    shiny::runApp(launch_app(maxRequestSize, debug, shiny.server = TRUE))
  }

  # Check that user specified a valid value of `maxRequestSize`
  if (!is.numeric(maxRequestSize)) {
    stop("argument 'maxRequestSize' must be numeric!\n")
  }
  if (maxRequestSize < 1) {
    maxRequestSize <- 10
  }

  # Ensure that the RMarkdown file can be found
  app_dir <- system.file("shiny", package = "idcnrba")
  if (app_dir == "") {
    stop("Could not find application directory. Try re-installing `idcnrba`.", call. = FALSE)
  }

  # Set maximum Shiny request size
  options(shiny.maxRequestSize = ceiling(maxRequestSize)*1024^2)

  # Set debugging option
  # For more extensive debugging,
  # one can use the following: options(shiny.fullstacktrace = debug)
  options(shiny.trace = debug)

  # Run the interactive RMarkdown file
  rmarkdown::run(file.path(app_dir, file = "app.Rmd"),
                 shiny_args = list(launch.browser = TRUE))
}
