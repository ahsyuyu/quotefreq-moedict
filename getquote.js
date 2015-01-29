var fs=require("fs");
var dict=JSON.parse(fs.readFileSync("dict-revised.json","utf8"));//dict-revised
var out=[];
//把所有quote拿出來
for(var i=0; i<dict.length; i++) {
	for(var j=0; j<dict[i].heteronyms[0].definitions.length; j++) {
		if(dict[i].heteronyms[0].definitions[j].quote){
			var q=dict[i].heteronyms[0].definitions[j].quote;
			for(var k=0; k<q.length; k++) {
				//console.log(q[k].substr(0,q[k].indexOf("：")));
				out.push(q[k].substr(0,q[k].indexOf("：")));
			}
		}
	}
}

fs.writeFileSync("quote.json",JSON.stringify(out,""," "),"utf8");