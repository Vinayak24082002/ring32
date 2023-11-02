function doSomething(){
console.log("**doSomething called from newModule.js**")

}
function againDoSomething(){
    console.log("**againDoSomething called from newModule.js**")
    
    }

    // CRUD -create,read,update,delete

    let arr=[];

    function create(element){
            arr.push(element)
            return arr;
    }

    function read(){
        return arr;
    }
    function update(index, element ){
        arr[index] =element;
        return arr;
    }
    function del(index){
        arr.splice(index, 1);
        //delete 1 value at given index
        return arr;
    }
    module.exports ={
    doSomething,
    againDoSomething,
    create,
    read,
    update, 
    del
};