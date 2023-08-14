function bingo(ticket, win){
  
    let miniWins = 0;
    
    ticket.forEach((t, index) => {
      const len = t[0].length;
      
      for (let i = 0; i < len; i++) {
        if(t[0].charCodeAt(i) === t[1])
          miniWins++;
          
      }
    })
    
    if (miniWins >= win)
      return "Winner!";
    
    return "Loser!";
  }