// immediately invoked function expression (IIFE)
// we sometimes face the problem with the pollutant of global scope se to remove the problem of global scope pollutant we use IIFE

(
    function chai(){
        // named iife
        console.log("DB connected");
    }
)();


(
    (name)=>{
        console.log(`DB connected second ${name}`);
    }
)("ujjwal")

