const fs=require('fs');
const biodata={
    name:'dhiraj kumar tiwari',
    age:21,
    course:'B-tech'
}
const jsondata=JSON.stringify(biodata);
fs.writeFile('json1.json',jsondata,(err)=>{
    console.log(err)
})
fs.readFile('json1.json','utf-8',(err,data)=>{
    const objdata=JSON.parse(data)
    console.log(objdata)
    console.log(data);
})