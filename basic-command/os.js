const os=require("os");//Inbuilt package in nodejs
console.log("Total Memory:",os.totalmem());
console.log("Total Memory in GB:",os.totalmem()/1024/10224/1024);
console.log("Free Memory in GB:",os.freemem()/1024/10224/1024);
console.log("Os version:",os.version());
console.log("Total CPU:",os.cpus());
