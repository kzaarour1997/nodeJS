
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
function onDataReceived(text) {
  st=text.startsWith("hello");
  if (text === 'quit\n'|| text ==='exit\n') {
    quit();
  }
  else if(st)
  {
    
    hello(text);
    
  }
  else if(text === 'help\n'){
    help();
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

// The following line starts the application
startApp("Khalil Zaarour")
