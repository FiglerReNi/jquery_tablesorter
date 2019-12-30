$(function() {

    // call the tablesorter plugin
    $("table").tablesorter({
        // hidden filter input/selects will resize the columns, so try to minimize the change
        widthFixed : true,

        // initialize zebra striping and filter widgets
        widgets: ["zebra", "filter"],

        // headers: { 5: { sorter: false, filter: false } },

        widgetOptions : {

            // extra css class applied to the table row containing the filters & the inputs within that row
            filter_cssFilter: '',

            // If there are child rows in the table (rows with class name from "cssChildRow" option)
            // and this option is true and a match is found anywhere in the child row, then it will make that row
            // visible; default is false
            filter_childRows: false,

            // if true, filters are collapsed initially, but can be revealed by hovering over the grey bar immediately
            // below the header row. Additionally, tabbing through the document will open the filter row when an input gets focus
            filter_hideFilters: false,

            // Set this option to false to make the searches case sensitive
            filter_ignoreCase: true,

            // jQuery selector string of an element used to reset the filters
            filter_reset: '.reset',

            // Use the $.tablesorter.storage utility to save the most recent filters
            filter_saveFilters: true,

            // Delay in milliseconds before the filter widget starts searching; This option prevents searching for
            // every character while typing and should make searching large tables faster.
            filter_searchDelay: 300,

            // Set this option to true to use the filter to find text from the start of the column
            // So typing in "a" will find "albert" but not "frank", both have a's; default is false
            filter_startsWith: false,

            // Add select box to 4th column (zero-based index)
            // each option has an associated function that returns a boolean
            // function variables:
            // e = exact text from cell
            // n = normalized value returned by the column parser
            // f = search filter input value
            // i = column index
        }
        });
});