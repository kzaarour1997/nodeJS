
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
li=["do some exercise","buy some groceries"];
function onDataReceived(text) {
  start=text.startsWith("hello");
  start1=text.startsWith("add");

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
  else if(text === 'remove\n'){
    remove();
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
    console.log(rep+"!")
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
  console.log("These are my supported commands:\n **help** --> Displays help menu \n **hello** --> says hello! \n **hello+(input name)** --> says (hello name!) \n **quit/exit** --> quits app")
  
  
  }
  function add(text) {
    sub= text.substr(4,text.length);
    
    li.push(sub)
  }
  
  function list(){
    
    for(var i=0;i<li.length;i++){

      console.log(i+"-"+li[i])


    }

   
  }

// The following line starts the application
startApp("Khalil Zaarour")
