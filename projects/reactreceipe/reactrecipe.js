

class DataStorage {
    static DATA_KEY = "george_recipes"; // DATA_KEY is a variable property which holds a string for localstorage desigantion
 
    initialData(){
      return [{
        id:1,
        title:'Ciorba de burta',
        ingredients: ['1k de burta','legume','2 litir de apa'],
        description:'Cirba de la buna fiarta de dimineata'
      },{
        id:2,
        title:'Ciorba de persioare',
        ingredients: ['orez','carne de vita','apa','legume'],
        description:'se face rar nu se fierbe de dimineata'
      },{
        id:3,
        title:'Ciorba de fasole',
        ingredients: ['fasole ','apa ','niste carne ','condimente'],
        description:'cirba de fasole mai rar'
      },{
        id:4,
        title:'Ciorba de oaie',
        ingredients: ['carne de oaie','legume',''],
        description:'se fierbe fasolea si gata supa'
      }];
    } // end of initialData, an array of objects with predifined recipes
    
    saveData(rec){
      localStorage.setItem(DataStorage.DATA_KEY,JSON.stringify(rec));
    }//save data is a function to set item in local storage using the data key first parameter
    // and make jeson the argument of the function, as second parameter

    resetData(){
       let recipes = this.initialData();
       saveData(recipes);
       return recipes;
    } // let a variable to hold initial data from the method
      //save the data in local sotrage via save data 
      // and return it


}//end of class Data Storage

//DataStorage.DATA_KEY = "george_recipes"; // DATA_KEY is a variable property which holds a string for localstorage desigantion
