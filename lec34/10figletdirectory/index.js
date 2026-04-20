// npm install package name
// npmjs website se download krna hai
/*node_modules contains actual installed packages
package.json contains project info and dependencies
package-lock.json locks exact versions of dependencies*/
/* or ka node module nhi bhejte hai or na hi github pe push krte hai because 
package.json se hi hm log node module ko bapus install kr sakte hai
bus terminal mei ((((((npm install))))))) se sabhi jitne bhi hai sabhi ke module ek 
sath download ho jate hai*/


const figlet=require("figlet")//       ./nhi lgate hai folder ke liye


figlet("Deepanshu Kumar", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});