function generateHashtag (str) {
  
    if (str === '')
      return false
    
    let counter = 0;
    str.split("").some(c => {
      if (c === ' ') {
        counter++; 
        return false;
      }
      else 
        return true;
    })
    
    
    if (counter === str.length)
      return false;
    
    const splited = str.split(" ");
    
    for (let i = 0; i < splited.length; i++) {
      if (splited[i] === '')
        continue;
      let splitedWord = splited[i].split("");
      splitedWord[0] = splitedWord[0].toString().toUpperCase();
      splited[i] = splitedWord.join("");
    }
    
    const joined = splited.join("");
    
    joined[0] = joined[0].toString().toUpperCase();
    
    const result = "#" + joined;
    
    
    if (result.length > 140)
      return false;
    
    return result;
  
  }