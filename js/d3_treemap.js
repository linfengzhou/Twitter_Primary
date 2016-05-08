
var sample_data =[{"group": "Bernie Sanders", "name": "berniesanders","value": 150}, {"group": "Bernie Sanders", "name": "vote", "value": 150}]

var sample_data1 = null;

var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("get", url, true);
    xhr.responseType = "json";
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        callback(null, xhr.response);
      } else {
        callback(status);
      }
    };
    xhr.send();
};



function make_viz(data){
var visualization = d3plus.viz()
    .container("#viz")
    .data(sample_data1)
    .type("tree_map")
    .dev(true)
    .color("group")               // groups colored to show ungrouping
    .id({
      "value": ["group","name"],
      "grouping": false            // grouping set to false ungroups parent nesting
    })
    .labels({"align": "left", "valign": "top"})
    .depth(1)
    .size("value")
    .text({"name":"name","group":"group"})
    .font({ "family": "Palanquin"})
    .tooltip({"Candidates":["group"]}) 
    .draw() 
}

getJSON("http://twitter-primary.herokuapp.com/treemap",function(err, data) {
      sample_data1 =  data; 
      make_viz(sample_data1);
});

