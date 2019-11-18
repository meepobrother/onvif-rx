
const xmlString = `<tt,:Demo></tt:Demo><tt,:Demo></tt:Demo>`
const res = xmlString.replace(/(\<.*?),(.*?\>)/gmi, '$1$2')

debugger;
