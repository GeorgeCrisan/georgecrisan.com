class DataStorage {
  static DATA_KEY = 'george_recipes'; // DATA_KEY is a variable property which holds a string for localstorage desigantion

   initialData() {
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

   saveData(red){
     localStorage.setItem(this.DATA_KEY,(JSON.stringify(red)));
   }//save data is a function to set item in local storage using the data key first parameter
    // and make json the argument of the function, as second parameter

    resetData(){
      let recipes = this.initialData();
      console.log(recipes);
      this.saveData(recipes);
      return recipes;
    }

    readData(){
      let data = JSON.parse(localStorage.getItem(this.DATA_KEY));
      return (data && data.length) ? data : this.initialData();
    }
}//end of DataStorage*********************************************************************************************


const ModalWrapper = (props) => {
   const handleBackgroundClick = (e) =>{
     if(e.target === e.currentTarget)
       props.hideModal();
   }

   const onOk = () =>{
     props.onOk();
     props.hideModal();
   }

   const okButton = props.showOk ? (<button onClick={onOk} disabled={props.okDisabled}> {props.okText} </button>) : null;

   return(
      <div className='overlay'>
        <div onClick={handleBackgroundClick} className='content'>
         <header>
          <h1>{props.title}</h1>
         </header>
         {props.children}
         {okButton}
         </div>
       </div>  
   );
}//end of modal wrapper

ModalWrapper.propTypes = {
       title: PropTypes.string,
       showOk: PropTypes.bool,
       okText: PropTypes.string,
       okDisabled: PropTypes.bool,
       width: PropTypes.number,
       style: PropTypes.object,
       children: PropTypes.oneOfType([
         PropTypes.array,
         PropTypes.element,
         PropTypes.string
       ]).isRequired,
       hideModal: PropTypes.func,
       onOk: PropTypes.func
};


ModalWrapper.defaultProps = {
   title: '',
   showOk: true,
   okText: 'OK',
   onDisabled: false,
   width: 400,
   onOk: () =>{}
};  // I am declaring de default props for Modal wrapper 

const ModalSelector = (props) => {
  switch (props.currentModal){
    case 'edit':
    case 'add':
      return <ChangeDataModal {...props}/>; // spread operator
    case 'view':
      return <ViewDataModal {...props} />;
    default:
      return null;  
  }
}

class ChangeDataModal extends React.Component {
    
}


ReactDOM.render(<App />,
document.getElementById('wrapper'));