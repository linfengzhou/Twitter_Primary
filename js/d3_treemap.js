<<<<<<< HEAD
var sample_data =[{"group": "Bernie Sanders", "name": "hillary", "value": 79}, {"group": "Bernie Sanders", "name": "clinton", "value": 66}, {"group": "Bernie Sanders", "name": "feelthebern", "value": 60}, {"group": "Bernie Sanders", "name": "york", "value": 51}, {"group": "Bernie Sanders", "name": "vote", "value": 50}, {"group": "Bernie Sanders", "name": "nyprimary", "value": 40}, {"group": "Bernie Sanders", "name": "trump", "value": 33}, {"group": "Bernie Sanders", "name": "brooklyn", "value": 29}, {"group": "Bernie Sanders", "name": "remember", "value": 28}, {"group": "Bernie Sanders", "name": "nyu", "value": 27}, {"group": "Donald Trump", "name": "vote", "value": 105}, {"group": "Donald Trump", "name": "f**k", "value": 82}, {"group": "Donald Trump", "name": "coachella", "value": 81}, {"group": "Donald Trump", "name": "cruz", "value": 77}, {"group": "Donald Trump", "name": "chanting", "value": 72}, {"group": "Donald Trump", "name": "york", "value": 66}, {"group": "Donald Trump", "name": "realdonaldtrump", "value": 60}, {"group": "Donald Trump", "name": "america", "value": 49}, {"group": "Donald Trump", "name": "https", "value": 44}, {"group": "Donald Trump", "name": "suppo", "value": 38}, {"group": "Hillary Clinton", "name": "trump", "value": 87}, {"group": "Hillary Clinton", "name": "sanders", "value": 68}, {"group": "Hillary Clinton", "name": "bernie", "value": 64}, {"group": "Hillary Clinton", "name": "york", "value": 64}, {"group": "Hillary Clinton", "name": "https", "value": 52}, {"group": "Hillary Clinton", "name": "vote", "value": 38}, {"group": "Hillary Clinton", "name": "crookedhillary", "value": 32}, {"group": "Hillary Clinton", "name": "via", "value": 28}, {"group": "Hillary Clinton", "name": "donald", "value": 27}, {"group": "Hillary Clinton", "name": "america", "value": 26}]
  var visualization = d3plus.viz()
    .container("#viz")
    .data(sample_data)
    .type("tree_map")
    .attrs(sample_data)
=======
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
>>>>>>> master
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
<<<<<<< HEAD
    .draw() 
=======
    .draw() 




>>>>>>> master
