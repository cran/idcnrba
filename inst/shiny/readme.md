
## Debugging

```{r}
# Enable Shiny tracing (run once per session)
options(shiny.trace = TRUE)

# Run Shiny instance
rmarkdown::run("inst/shiny/app.Rmd")

# Run shiny instance in browser
rmarkdown::run("inst/shiny/app.Rmd", shiny_args = list(launch.browser = TRUE))
```
