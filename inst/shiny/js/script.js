
$(document).ready(function(){

  window.setTimeout(function() {

    /* support flexdashboard page links as actual hyperlinks using the data-href provided */
    $('external_link').each(function() {
      $(this).parent().replaceWith('<a href="' + this.dataset.href + '" target="_blank">' + this.textContent + '</a>')
    });

    /* move navbar logo to top-left of page where text title is placed by flexdashboard */
    $('.navbar-brand').empty();
    $('#navbar_logo').appendTo($('.navbar-brand'));
    $('.navbar-right').remove();


  }, 500);


  $(".btn-analysis").click(function() {
  	$(".btn-analysis").removeClass("btn-selected");
  	$(this).addClass("btn-selected");
  });


  /* tooltips can't be added globally once when the page is loaded because some
  elements are added and destroyed as Shiny renders outputs. */
  $(document).on('shiny:value', function() {
    window.setTimeout(function() {
      for(item of nrba_tooltips) {
        const elem_id = item[0];
        let tooltip_text = item[1];
        const elem = document.getElementById(elem_id);
        if(elem !== null) {
          elem.title = tooltip_text;
          /* add tooltip to checkbox element's parent label node */
          if(elem.type == 'checkbox') {
            elem.parentNode.title = tooltip_text;
          }
        }
        /* add tooltip to elements with "-label" convention added by shiny/bootstrap/selectize.js */
        const elem_shiny_labelled = document.getElementById(elem_id + '-label');
        if(elem_shiny_labelled !== null) {
          elem_shiny_labelled.title = tooltip_text;
        }
      }
    }, 250);
  })

  /* This replaces the generic "Specify Analysis" title with the selected analysis label and description*/
  $(".btn-analysis").click(function() {
  	var title_text = "<u>" + "<b>" + $(this).text() + "</b>" + "</u>";
  	var replacement_text = title_text + "<br>" + $(this).attr("description");
  	$(".specify-analysis > .chart-title").html(replacement_text);
  });

  $("body").on("shown.bs.tab", "a[data-toggle='tab']", function(e) {
    Shiny.setInputValue("active_tab", $(e.target).parent().index());
 });
});




