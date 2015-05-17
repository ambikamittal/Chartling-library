//Chart object

function Chart(chartCfg){
	this.chartCfg = chartCfg;
	this.createChart(chartCfg);
}

// Create chart with the input information
Chart.prototype.createChart =	function(chartCfg){
	var starttag = "<div class='headingContainer'>Fruit Sales</div><div class='textRotate'>Pounds of Fruit Sold</div>";
	var closetag = "<div class='headingContainer' style='padding-top:50px;'>Fruits</div>";
	var maintmplt = "<ol class='chart'>";
	var item = ''

	for(title in chartCfg.name){
			item += "<li><span title='"+ chartCfg.name[title] +"' style='height:"+ chartCfg.data[title] +"px;'></span></li>";
	}
	var htmltmplt = starttag + maintmplt +item + "</ol>" +closetag;
	document.write(htmltmplt);
}
