
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * @param  {string} texxt
 * @param  {string} text data typed by the user
 * @returns {void}
 */
li=["do some exercise","buy some groceries","Water plants"];
dn = ["✓", "✓", " "];

function onDataReceived(text) {
  start=text.startsWith("hello");
  start1=text.startsWith("add");
  start2=text.startsWith("remove");
  start3=text.startsWith("edit");
  start4=text.startsWith("check");
  start5=text.startsWith("uncheck");

  if (text === 'quit\n'|| text ==='exit\n') {
    quit();
  }
  else if(start)
  {
    
    hello(text);
    
  }
  else if(text === 'help\n'){
    help();
  }
  else if(text === 'list\n'){
    list();
  }else if(text==='add\n'){
    
    console.log("***error you have to add something***");
  }
  
  else if(start1){
    
    add(text);
  }
  else if(start2){
    remove(text);
  }
  else if(start3){
    
    edit(text);
  }
  else if(start4){
    
    check(text);
  }
  else if(start5){
    
    uncheck(text);
  }
  else{
    unknownCommand(text);
  }

}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(texxt){
  var s2=texxt.split(" ")
  var rep=texxt.replace("\n","")
  if(Boolean(s2[1])==false){
  console.log('hello!')
  }else {
    console.log(rep.trim()+"!")
  }

}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}
/**
 * Displays Help Menu.
 *
 * @returns {void}
 */
function help(){
  console.log("These are my supported commands:\n **help** --> Displays help menu \n **hello** --> says hello! \n **hello+(input name)** --> says (hello name!) \n **quit/exit** --> quits app \n **list**-->displays your tasks \n **add+(the task you enter)**--> adds task to list \n **remove+(task number)--> Deletes task from list \n **edit+(task number)+(new task)**--> replaces existing task with another \n **check + (task number)**--> places a check next to done tasks \n **uncheck +(task number)**--> removes checks next to tasks")
  
  
  }
  function add(text) {
    sub= text.substr(4,text.length);
    
    li.push(sub)
  }
  
  function list(){
    
    for(var i=0;i<li.length;i++){

      console.log(i+1+"-"+" "+dn[i]+" "+li[i])


    }

   
  }function remove(texxt) {
    var s3=texxt.split(" ")
   var a= parseInt(s3[1]);
   if(Number.isInteger(a)){
   for(var i=0;i<li.length;i++){
    if(a-1===i){
      var b=a-1;
    li.splice(b,1);
    }else {console.log("error: the task number you entered doesnt exist")}
   }
  }else{console.log("error:Please Enter remove + number")}
  }

  function edit(texxt) {
    var s4=texxt.split(" ")
   var a= parseInt(s4[1]);
    var sub= texxt.substr(7,texxt.length);
    var rep=sub.replace("\n","")
    if(Number.isInteger(a)){
      for(var i=0;i<li.length-1;i++){
       if(a-1===i){
         var b=a-1;
         li.splice(b, 1,rep);
       }
      }
      
      }else{console.log("error:Please Enter edit + number + new task")}
    }
    function check(x) {
      z=x.split(" ");
      var a= parseInt(z[1]);
      if(Number.isInteger(a)){
      dn[a - 1] = "✓";
      list();
    }
    }
    function uncheck(x) {
      z=x.split(" ");
      var a= parseInt(z[1]);
      if(Number.isInteger(a)){
      dn[a - 1] = " ";
      list();
      }
    }
    
  
// The following line starts the application
startApp("Khalil Zaarour")
