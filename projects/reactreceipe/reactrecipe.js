

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

    readData(){
       let data = JSON.parse(localStorage.getItem(DataStorage.DATA_KEY));
       return (data && data.length) ? data : this.initialData();
    }  


}//end of class Data Storage !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/************Check what it does modal please ********/

const ModalWrapper = (props) => {
    const handleBackgroundClick = (e) =>{
      if(e.target === e.currentTarget) 
          props.hideModal();
    } //end of handleBackgroundClick

    const onOk = ()=>{
      props.onOk();
      props.hideModal();
    }//end of onOk

    const okButton = props.showOk ? (<button onClick={onOk} disabled={props.okDisabled}>{props.okText} </button>): null;

    return (
      <div className='overlay'>
        <div noClick={handleBackgroundClick} className='content'>
         <header>
           <h1>{props.title}</h1>
         </header>
        </div>
      </div>
    );
}// end of ModalWrapper

/************Check what it does modal please ********/