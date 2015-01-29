var fs=require("fs");
var quoteFreq=JSON.parse(fs.readFileSync("quotefreq.json","utf8"));
var accumulatefreq=JSON.parse(fs.readFileSync("a.json","utf8"));
var allQuote = 0;
var accumulate = 0;
var out=[];
// for(var i=0; i<quoteFreq.length; i++){
// 	allQuote += quoteFreq[i][1];
// }

// for(var j=0; j<quoteFreq.length; j++){
// 	out.push([quoteFreq[j][0] ,quoteFreq[j][1] , (quoteFreq[j][1] / allQuote).toFixed(5)]);
// }

for(var i=0; i<quoteFreq.length; i++){
	accumulate += parseFloat(accumulatefreq[i][2]);
	out.push([i+1,accumulatefreq[i][0], accumulatefreq[i][1], accumulatefreq[i][2], accumulate ]);
}

fs.writeFileSync("accumulatefreq.json",JSON.stringify(out,""," "),"utf8");