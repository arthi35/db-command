//double
const double=(num)=>num*2;


const n=process.argv[2];//so our file path is array so we are passing 2 in array in argv
console.log(process.argv);//it is giving command line arguments
console.log(double(n))

//by using this process we can pass value to the double in the terminal
//so through command line we can pass argument
//process is the nodejs global variable