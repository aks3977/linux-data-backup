import React,{useState,useEffect} from 'react';

import './App.css';

function App() {
  
  const [items,setItems] = useState([]);
  const [inputValue, setInputValue] = useState([]);

  const [dropdown,setDropDown] = useState();
  


  useEffect(()=>{
    console.log('render');
    fetch(`http://localhost:5000/policy`)
    .then(response => response.json())
    .then(json => setItems(json))
    .catch(err =>{console.log(err)});
  },[])

  const getFinancialYears = (currentYear, month) => {
    if(currentYear > 2021) {
      return []
    }
    let years = []
    let updatedYear = currentYear
    if(month>=4){
      while(updatedYear < 2022) {
        years.push(`${updatedYear} - ${updatedYear+1}`)
        updatedYear += 1
      }
    } else {
        while(updatedYear <= 2022) {
        years.push(`${updatedYear - 1} - ${updatedYear}`)
        updatedYear += 1
      }
    }
    return years
  }
  
  

  return (
    <div className="App">
      <label>Select the Financial Year</label>
      <select name="years" id="years">
        {inputValue.map((item)=>{
          return(
            <option value={item}>{item}</option>
          )
        })}
      </select>
      <br/>
      <br/>

      {
      items.map((item)=>{
        const month = parseInt(item.policy_issuance_date.split("/")[1], 10)
        const year = item.policy_issuance_date.split("/")[2]
        let financialYear = parseInt(year,10);
        let financialYearArray = getFinancialYears(financialYear, month)
        return(
          <div>
          <input type="radio"  value={financialYear} name="radioButton" 
          onChange={(e)=>{
            setInputValue(financialYearArray);          
          }}/>
          <b>{item.policy_name}</b>
        </div>
        )
        
      })
      }
    </div>
  );
}

export default App;
