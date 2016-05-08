var sample_data =[{"group": "Bernie Sanders", "value": 150, "name": "berniesanders"}, {"group": "Bernie Sanders", "value": 150, "name": "vote"}, {"group": "Bernie Sanders", "value": 100, "name": "feelthebern"}, {"group": "Bernie Sanders", "value": 100, "name": "inspired"}, {"group": "Bernie Sanders", "value": 100, "name": "people"}, {"group": "Bernie Sanders", "value": 50, "name": "democratic"}, {"group": "Bernie Sanders", "value": 50, "name": "breaking"}, {"group": "Bernie Sanders", "value": 50, "name": "floorfight"}, {"group": "Bernie Sanders", "value": 50, "name": "hoodie"}, {"group": "Bernie Sanders", "value": 50, "name": "beat"}, {"group": "Donald Trump", "value": 300, "name": "vote"}, {"group": "Donald Trump", "value": 250, "name": "gop"}, {"group": "Donald Trump", "value": 250, "name": "hillary"}, {"group": "Donald Trump", "value": 250, "name": "clinton"}, {"group": "Donald Trump", "value": 250, "name": "suppo"}, {"group": "Donald Trump", "value": 250, "name": "people"}, {"group": "Donald Trump", "value": 200, "name": "white"}, {"group": "Donald Trump", "value": 200, "name": "pay"}, {"group": "Donald Trump", "value": 200, "name": "republican"}, {"group": "Donald Trump", "value": 200, "name": "president"}, {"group": "Hillary Clinton", "value": 500, "name": "trump"}, {"group": "Hillary Clinton", "value": 250, "name": "going"}, {"group": "Hillary Clinton", "value": 250, "name": "hillaryclinton"}, {"group": "Hillary Clinton", "value": 200, "name": "foxnews"}, {"group": "Hillary Clinton", "value": 200, "name": "bill"}, {"group": "Hillary Clinton", "value": 150, "name": "sheriffclarke"}, {"group": "Hillary Clinton", "value": 150, "name": "vote"}, {"group": "Hillary Clinton", "value": 150, "name": "ffweekend"}, {"group": "Hillary Clinton", "value": 150, "name": "sta"}, {"group": "Hillary Clinton", "value": 150, "name": "people"}]

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

getJSON("http://twitter-primary.herokuapp.com/treemap",function(err, data) {
      sample_data1 =  data;  
});

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




