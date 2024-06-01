import { useState } from "react"

const useValidator = (initialState) => {
  const [validator, setValidator] = useState(initialState);
  
  const isAllValid = () => {
    const listLogic = Object.values(validator).map((val) => val.isValid);

    let counter = 0;  
    
    for (let status of listLogic) {
      !status ? counter += 1 : null;
    }

    return counter > 0 ? false : true;
  }

  return { validator, setValidator, isAllValid }
}

export default useValidator;