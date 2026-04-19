// for global package use 
// npm install -g package name
// npm like package name


const figlet=require("/usr/local/lib/node_modules/figlet")//       ./nhi lgate hai folder ke liye


figlet("Deepanshu Kumar", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});