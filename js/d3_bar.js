<<<<<<< HEAD
var long_short_data = [{"values": [{"value": -0.25907043793948553, "label": "Nagetive"}, 
{"value": 0.28658381194247645, "label": "Positive"}], 
"key": "Bernie Sanders"}, 
{"values": [{"value": -0.349467604283576, "label": "Nagetive"}, 
{"value": 0.34797534818368125, "label": "Positive"}], 
"key": "Donald Trump"}, 
{"values": [{"value": -0.22442652067652058, "label": "Nagetive"}, 
{"value": 0.2646664741767354, "label": "Positive"}], 
"key": "Hillary Clinton"}]
=======
var long_short_data1 = [
  {
    "key": "Nagetive",
    "color": "#d67777",
    "values": [
      { 
        "label" : "Hilary Cliton" ,
        "value" : -1.8746444827653
      } , 
      { 
        "label" : "Donald Trump" ,
        "value" : -8.0961543492239
      } , 
      { 
        "label" : "Bernie Sanders" ,
        "value" : -0.57072943117674
      } 
    ]
  },
  {
    "key": "Positive",
    "color": "#4f99b4",
    "values": [
      { 
        "label" : "Hilary Cliton" ,
        "value" : 25.307646510375
      } , 
      { 
        "label" : "Donald Trump" ,
        "value" : 16.756779544553
      } , 
      { 
        "label" : "Bernie Sanders" ,
        "value" : 18.451534877007
      } 
    ]
  }
]
>>>>>>> master

    var chart;
    nv.addGraph(function() {
        chart = nv.models.multiBarHorizontalChart()
            .x(function(d) { return d.label })
            .y(function(d) { return d.value })
            .yErr(function(d) { return [-Math.abs(d.value * Math.random() * 0.3), Math.abs(d.value * Math.random() * 0.3)] })
<<<<<<< HEAD
            .barColor(d3.scale.category10().range())
            .duration(250)
=======
            .duration(250)
            .showControls(false)
>>>>>>> master
            .margin({left: 100});

        chart.yAxis.tickFormat(d3.format(',.2f'));

        chart.yAxis.axisLabel('Sensitive Scores');
        chart.xAxis.axisLabel('Candidates').axisLabelDistance(20);

        d3.select('#chart1 svg')
            .datum(long_short_data)
            .call(chart);

        nv.utils.windowResize(chart.update);

        chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });
        chart.state.dispatch.on('change', function(state){
            nv.log('state', JSON.stringify(state));
        });
        return chart;
    });
<<<<<<< HEAD
=======

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


var long_short_data = null ;

getJSON("http://twitter-primary.herokuapp.com/bar",function(err, data) {
      long_short_data= data;  
});
>>>>>>> master
