// Get a reference to the embedded report HTML element
var embedContainer = $('#embedContainer')[0];
 
// Get a reference to the embedded report.
report = powerbi.get(embedContainer);
 
// Refresh the displayed report
report.refresh()
    .then(function (result) {
        Log.logText("Refreshed");
    })
    .catch(function (errors) {
        Log.log(errors);
    });