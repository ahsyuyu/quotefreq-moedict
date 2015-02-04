var fs=require("fs");
var e=JSON.parse(fs.readFileSync("everybequotedtitle.json","utf8"));//everybequotedtitle
var out=[];
var found = false;

var countFreq = function(item2beCount,result) {
	var found = false;
	if(result.length == 0) {
		result.push(item2beCount);
		return "";
	}
	var resLength = result.length;
	for(var i=0; i<resLength; i++) {	
		if(result[i][0] == item2beCount[0]) {
			result[i][1] += (", "+item2beCount[1]);
			// result[i].splice(1,1);
			// result[i].push(res);
			found = true;
		}
		if(!found && i==result.length-1) result.push(item2beCount);
	}
}



for(var i=0; i<e.length; i++) {	
	countFreq(e[i],out)
}

//引用五次以下就只顯示詞條數目
var outLength=out.length;
for(var j=0; j<outLength; j++){
	if(out[j][0]<5){
		var titles = out[j][1].split(",");
		out[j][1] = titles.length;
	}
}


//console.log(out);
fs.writeFileSync("bequotedtitle.json",JSON.stringify(out,""," "),"utf8");

