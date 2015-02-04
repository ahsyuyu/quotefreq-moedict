var fs=require("fs");
var dict=JSON.parse(fs.readFileSync("dict-revised.json","utf8"));//dict-revised
var out=[];

for(var i=0; i<dict.length; i++) {
	var counter=0;
	for(var j=0; j<dict[i].heteronyms[0].definitions.length; j++) {
		if(dict[i].heteronyms[0].definitions[j].quote){
			counter += dict[i].heteronyms[0].definitions[j].quote.length;
		}
	}
	out.push([counter,dict[i].title]);
}
out.sort(function(a,b){
	return b[0]-a[0];
});

//console.log(out);
//fs.writeFileSync("bequotedtitle.json",JSON.stringify(out,""," "),"utf8");