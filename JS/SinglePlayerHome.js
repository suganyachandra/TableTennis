class SinglePlayerHome{
      constructor(){
            this.level1 = createButton('LEVEL1')
            this.level2 = createButton('LEVEL2')
           
            this.back=createImg('Images/backButton.png',
            () => {
                this.back.size(100, AUTO);
            });

            this.submit=createImg('Images/submit.png',
            () => {
                this.submit.size(200, AUTO);
            });
            
      }

        hide(){
            this.level2.hide();    
            this.level1.hide(); 
            this.back.hide();  
            this.submit.hide();
                         
        }

        display(){

           
            this.level1.position(displayWidth/2 - 100, displayHeight/2 - 100)  
            this.level2.position(displayWidth/2 - 100, displayHeight/2)
            this.back.position(100, displayHeight - 300, 50,50);
            this.submit.position(displayWidth - 300, displayHeight - 300, 50,50)
          
            
            this.level1.mousePressed(()=>{
                background("white")     
                this.hide();            
                level1Obj = new Level1();
                level1Obj.display()
                });

                this.back.mousePressed(()=>{
                   
                    singlePlrHome.hide();       
                    homeObj.display();
             
                     console.log("back button is pressed")
                  });
                  this.submit.mousePressed(()=>{
                      alert("select the level")
                  })
        }      
}