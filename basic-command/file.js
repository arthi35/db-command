const fs =require("fs");//by using this inbuilt node js package we can create any type of file
const quote="Where there is a will there is a way!!!😎"
fs.writeFile("./awesome.html",quote,(err)=>{
    console.log("Completed Writing👍");
});
const quote2="Live more worry Less🙂"
for(let i=1;i<=10;i++){
    fs.writeFile(`./backup/text-${i}.html`,quote2,(err)=>{
        console.log("Completed Writing👍");
    });
}
const quote3="Happy Women's Day";
console.log(process.argv);
const noOfFiles=process.argv[2];
for(i=1;i<=noOfFiles;i++){
    fs.writeFile(`./backup/text-${i}.html`,quote3,(err)=>{
        console.log("Completed Writing👍");
    });
}
fs.readFile("./cool.txt","utf8",(err,content)=>{
    if(err){
        console.log("❌",err)
    }
    console.log("📚",content);
})
const nicequote="\n Make everyday little less ordinarily😊";

fs.appendFile("./nice.txt",nicequote,(err)=>{
    console.log("write👍");
});

//so instead of writefile we should use append to add a file
// fs.writeFile("./nice.txt",nicequote,(err)=>{
//     console.log("write👍");
// });
//remove or delete file
fs.unlink("./delete-file.css",(err)=>{
    console.log("Deleted Successfully")
})
//read and delete all files in backup
fs.readdir("./backup",(err,files)=>{
console.log(files);
files.forEach((filename)=>fs.unlink(`./backup/${filename}`,(err)=>{
    console.log("Deleted Successfully")
}))
})