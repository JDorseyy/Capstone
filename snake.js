function snake () {
  
    
    let pets = ["Max", "Blue", "Rax", "Sandy", "Ed"];
  
    
    let highNumber = pets.length;
  
    for (let i = 0; i < highNumber; i++) {
      alert(`The snakes are ${pets[i]}`);
    }
  }
  
 
  
  pythonButton.onclick = snake;