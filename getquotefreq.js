var fs=require("fs");
var quote=JSON.parse(fs.readFileSync("quote.json","utf8"));//quote
var out=[];
var out_dy=[];

var countFreq = function(item2beCount,result) {
	var found = false;
	if(result.length == 0) result.push([item2beCount,0]);
	for(var i=0; i<result.length; i++) {	
		if(result[i][0] == item2beCount) {
			result[i][1]++;
			found = true;
		}
		if(!found && i==result.length-1) result.push([item2beCount,0]);
	}
}

for(var i=0; i<quote.length; i++) {
	var q=quote[i].split("．");//q=["紅樓夢","第十七回"]
	var quoteTitle=q[0];       // so q[0] would be the quote title
	if(quoteTitle.length == 1 || quoteTitle.match("朝") ) {
		//countFreq(quoteTitle,out_dy);
		countFreq(q[0]+"．"+q[1]+"．"+q[2],out); //if q[0] is dynasty then q[1] would be the author q[2] would be title
	} else countFreq(quoteTitle,out);
}

out.sort(function(a,b){
	return b[1]-a[1];
});
// out_dy.sort(function(a,b){
// 	return b[1]-a[1];
// });

// console.log(out);
// console.log("------------------");
// console.log(out_dy);
fs.writeFileSync("quotefreq.json",JSON.stringify(out," "," "),"utf8");

