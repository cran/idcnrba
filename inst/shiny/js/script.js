
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
    
    /* this triggers the error checking observe event when the tab is switched to Analysis */
    $('.nav-link[href="#section-analysis"]').click(function(){
      Shiny.setInputValue('proceed_to_analysis', true);
    })

    /* this sets a page favicon / browser-tab-logo */
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'shortcut icon';
    // base64 below derived from /img/idc_icn.png
    link.href = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKkmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjAtMDktMDlUMTE6MzI6NDUtMDQ6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjAtMDktMDlUMTE6NTA6MjQtMDQ6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTA5LTA5VDExOjUwOjI0LTA0OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNmY4MThkZS1lODVmLTRhMjctOThjZC0yMDM5ODkwNDNmNjAiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDowOTA2ODQ4Zi04NWMzLTUyNDMtOWYwOC1iOWM0MTJjZmUwNWMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjNjNjOTk3Zi1jZjJkLTRmOTEtODBmMy1iNTE0OGZhOWZhZDUiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgdGlmZjpPcmllbnRhdGlvbj0iMSIgdGlmZjpYUmVzb2x1dGlvbj0iNzIwMDAwLzEwMDAwIiB0aWZmOllSZXNvbHV0aW9uPSI3MjAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6Q29sb3JTcGFjZT0iMSIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjMyIiBleGlmOlBpeGVsWURpbWVuc2lvbj0iMzIiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmM2M2M5OTdmLWNmMmQtNGY5MS04MGYzLWI1MTQ4ZmE5ZmFkNSIgc3RFdnQ6d2hlbj0iMjAyMC0wOS0wOVQxMTozMjo0NS0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKE1hY2ludG9zaCkiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjA0MjAxODdkLWRjZWUtNDJkNS1hNGIwLTAwNTQyZTY3ZTNiOSIgc3RFdnQ6d2hlbj0iMjAyMC0wOS0wOVQxMTozNzozNS0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmEzNGZmYWIwLWZkZjctNDY2OS05MDRkLTJhMzBkMTljNTYzNyIgc3RFdnQ6d2hlbj0iMjAyMC0wOS0wOVQxMTo1MDoyNC0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iZGVyaXZlZCIgc3RFdnQ6cGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjI2ZjgxOGRlLWU4NWYtNGEyNy05OGNkLTIwMzk4OTA0M2Y2MCIgc3RFdnQ6d2hlbj0iMjAyMC0wOS0wOVQxMTo1MDoyNC0wNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmEzNGZmYWIwLWZkZjctNDY2OS05MDRkLTJhMzBkMTljNTYzNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpjNjNjOTk3Zi1jZjJkLTRmOTEtODBmMy1iNTE0OGZhOWZhZDUiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjNjNjOTk3Zi1jZjJkLTRmOTEtODBmMy1iNTE0OGZhOWZhZDUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7eqRe6AAAE4klEQVRIiXVWTWyUVRQ957yv0FLa9EdolQYJkAiJjULcGtEialAXBiTErRqbCEjYKAtc6EbFhLhSY2CBfwSXopig0VhjdIGQADEVjYggKT8t/WFmaKfj4t73vgfoZDbzffPOvfecc+99bFs1iJs+JAkSJEFQoAhSJAUIIkkiQCJFkRApUGJAECFKoMig4n/QSTYcnQIhEgItBi0aqRTS4CAR8pwUCKL4z9whwHMG6c8hgrBaYmUgIcoQPbwkUQJEiUUO7sfsp6HLoI0liGQoX8lqChE90KMKiCXGAAQi6SW6JR5JszCWNQNp1FsSIgUJlJR4C5CMIucBLNEZq3bey0hRWAYgoROSUvoMZaTiFs8YSsOrSYlbmCCapAGUrJRoGLidAnOpiwRdottPlb7MaMmN5DLAKUoypC8YWBgzlOlsYfyMozBjzFHcqUphgrdC2RPWJWShpKRINGht4nSXXjRV5Z1Bt5Crmj8hg/+0ggqUBgcSuvlS0SchmYQkJSIkwSNoNA+ZCqLEwh0iQjx28NWJqdqDz75hokvY9dwT6++/xzpjolI7NvzXvkNDv1+4KNFqYsDsbKN7Tuv2zesGVq/snN86ca36w6nf3v3q23OjYwwsmD5AX0/X+FQ1oxtdHfP7FnZWatMz9XpPd/uKO3ufWrN62zsff/PLryZMo97o7W4/sGuwp7O9Nj1z+vzI4gVdj97Xv6CjbfD9DykU3kFWhDedkHgHAGzb88mRn0+2zpu7ZePA808+8Obg0wM7dk9WqgycrtVffmZ9T2f70dNndnxwYGyy0oywZcPaj4Z+ksum0rb2iQPAxQdg4levX9/96eFTf55vm9f80KoVDAQxv7Nl4N6VAF478Pl4tRrmaKYZe744cnlqMjZHJESij4xAuZ0Ve1sK7vHhvy8AWNjVThGz6Gqf11SE2UbjzMXLsTMYc6d1tzU6EStw3xMKiKPJHUlxeV8PgJGxcQpq0nilMl2vi1x2+22G7jYNPt6VJp+kKIG9jtLDfd3S3LRj0yN3L1k0ca363YlhSaHg5Hjt+5PDAHZufLyjrbUxO1vU9NJjDy/vXWhOK7KWSRoQhLFkJbz94qaZmXrL3KYihNr0zCt7P5uq1YyKoiW8dfBw/5K+VUsXH9q59ezl0UXdHc1NTf1LF72wd3/s5Liqzo2MTlRq+fYYnbx27tKYifPPlavH/zi7/+sfz4xcUhw4c5qLC1fHN7/+3tYNa9f037Wsd8GViakvj57YNzTkXr9j3XbGronHbJIoW60UbZTaE9kgU3SHdbJ8G1vbO8mFoyubPD4tbPb6SSsow8JNR8qvKeeDD0WcYiVRSpvL/sS0sJKnU76xvlS6LR/fd5B1skKZRZx0cfrH+iSZ/5SAssSzvQRrQCiN62DGxK3H5HPRHFVSR1lOsmTBOP3TZma8eYQ0iwLJeL2RsgP5zono/sTHOKR4MAnAeD9DkfZRqj2lQBEB3oJx9xq/0Se4IQPfhj7soQbEQkrvXDc417DLoUrSIAGErGK/HihKhbjDaf4x4AKh9AxCXGLBzZ4RFS9raYokVe2V6xzjxUVZZMyUpKcNXsqQuzCjOz33xO3aSaQ7WZFm9Q2HZW7LVImWd78RJgxFUxhMFxzmF60iR4wyZp0ZnFAq7wD3fjSeCZNd0awCAOS/LI3bzNg536sAAAAASUVORK5CYII=';
    document.getElementsByTagName('head')[0].appendChild(link);

    /* set tooltips on page load */
    refresh_tooltips();

  }, 500);


  $(".btn-analysis").click(function() {
  	$(".btn-analysis").removeClass("btn-selected");
  	$(this).addClass("btn-selected");
  });


  /* tooltips can't be added globally once when the page is loaded because some
  elements are added and destroyed as Shiny renders outputs. */
  var refresh_tooltips = function() {
    if(typeof nrba_tooltips === 'undefined') {
      return;
    }
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
  };

  $(document).on('shiny:value', function() {
    window.setTimeout(function() {
      refresh_tooltips();
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
 
  i = 0;
  setInterval(function() {
      i = ++i % 4;
      $(".progress-message").html("Running Analysis"+Array(i+1).join("."));
  }, 500);

});




