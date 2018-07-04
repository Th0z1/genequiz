import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public timer = 0;
  name;
  score = 0;
  Aaron;
  BassVoice;
  MadonnaLouiseCiccone;
  Jukebox;
  Fivelines;
  answer:string;
  answers:string;
  answer1:string;
  answer2:string;
  answer3:string;
  answer4:string;
  answer5:string;
  answer6:string;
  answer7:string;
  answer8:string;
  answer9:string;
  South_West_Town;
  South_African_Western_Town: boolean;
  Soggy_Western_Town;
  South_Western_Townships:string;
  South_Western_Townshipss:Boolean;
  Kgalagadi_Transfrontier_Park;
  Madikwe_Game_Reserve;
  Kruger_National_Park;
  Kruger_National_Parkk:string;
  Pilanesberg_Game_Reserve;
  Easter_Island;
  Marion_Island;
  Robben_Island;
  Robben_Islandd:string;
  Msikaba_Island;
  Uranium;
  Cocao_Beans;
  Oil;
  Gold;
  Goldd:string;
  flag1;
  flag2;
  flag3;
  flag4;
  flag44:string;
  Oxygen;
  Hydrogen_sulphide;
  Hydrogen_sulphidee:string;
  Carbon_dioxide;
  Nitrogen;
  Phosphorous;
  Bromine;
  Brominee:string;
  Chlorine;
  Helium;
  copper;
  magnesium;
  magnesiumm:string;
  iron;
  calcium;
  NaAlO2;
  H2O;
  H2O0:string;
  Al2O3;
  CaSiO3;
  Sodium_carbonate
  Sodium_carbonatee:string;
  Calcium_bicarbonate;
  Sodium_bicarbonate;
  Calcium_carbonate;
  value: number;
  intervalVar:number;
  No:boolean;



  constructor(public navCtrl: NavController) {
    this.value = 0;             
    this.startTimer()
    // this.No=true;
  }
  startTimer(){
    var intervalVar = setInterval(function(){
      // alert(this.timer++);
      this.timer++;
    }.bind(this),1000)
    console.log(intervalVar);
    // intervalVar.toExponential(0);
    
  }
  stopTimer(){
    var intervalVar = setInterval(function(){
      // alert(this.timer++);
      this.timer = 0
    }.bind(this),1)
    console.log(intervalVar);
    // intervalVar.toExponential(0);
    
  }
  onSubmit() {
    this.value = 1;
    console.log(this.score)
  this.stopTimer();

 if(this.Aaron){
  this.Aaron = 'Aaron';
   this.score = this.score +=1; 
 }else{
   this.Aaron = 'Aaron';
 }
 if(this.BassVoice){
  this.BassVoice = 'Bass Voice';
   this.score = this.score +=1;
   
 }else{ 
  this.BassVoice = 'Bass Voice';
}
 if(this.MadonnaLouiseCiccone){       
  this.MadonnaLouiseCiccone = 'Madonna Louise Ciccone';
  this.score = this.score +=1;
  }else{
    this.MadonnaLouiseCiccone = 'Madonna Louise Ciccone';
  }
  if(this.Jukebox){
    this.score = this.score +=1;
}else{
  this.Jukebox = 'Jukebox';
}
if(this.Fivelines){
  this.score = this.score +=1;
}else{
  this.Fivelines = 'Five Lines';
  
}
if(this.South_West_Town==true){
  this.answers = "South Western Townships";

}else
  if(this. South_African_Western_Town==true){
    this.answers = "South Western Townships";
  }else
  if(this.Soggy_Western_Town==true){
    this.answers = "South Western Townships";
  }else
  
    if(this. South_Western_Townships){
      this.score = this.score +=1;
      this.answers = "South Western Townships";
      this.South_Western_Townships = '';
    }
    if(this.Kgalagadi_Transfrontier_Park==true){
      this.answer1 = "Kruger National Park";
    
    }else
      if(this. Madikwe_Game_Reserve==true){
        this.answer1 = "Kruger National Park";
      }else
      if(this.Pilanesberg_Game_Reserve==true){
        this.answer1 = "Kruger National Park";
      }else
      
        if(this. Kruger_National_Park){
          this.score = this.score +=1;
          this.answer1 = "Kruger National Park";
          this.Kruger_National_Park = '';
        }
        if(this.Easter_Island==true){
          this.answer2 = "Robben Island";
        
        }else
          if(this.Marion_Island==true){
            this.answer2 = "Robben Island";
          }else
          if(this.Msikaba_Island==true){
            this.answer2 = "Robben Island";
          }else
          
            if(this. Robben_Island){
              this.score = this.score +=1;
              this.answer2 = "Robben Island";
              this.Robben_Island = '';
            }
            if(this.Uranium==true){
              this.answer3 = "Gold";
            
            }else
              if(this.Cocao_Beans==true){
                this.answer3 = "Gold";
              }else
              if(this.Oil==true){
                this.answer3 = "Gold";
              }else
              
                if(this.Gold){
                  this.score = this.score +=1;
                  this.answer3 = "Gold";
                  this.Gold = '';
                }


            if(this.flag1==true){
              this.answer4 = "11";
            
            }else
              if(this.flag2==true){
                this.answer4 = "11";
              }else
              if(this.flag3==true){
                this.answer4 = "11";
              }else
              
                if(this. flag4){
                  this.score = this.score +=1;
                  this.answer4 = "11";
                  this.flag4 = '';
                }
                if(this.Nitrogen==true){
                  this.answer5 = "Hydrogen Sulphide";
                
                }else
                  if(this.Carbon_dioxide==true){
                    this.answer5 = "Hydrogen Sulphide";
                  }else
                  if(this.Oxygen==true){
                    this.answer5 = "Hydrogen Sulphide";
                  }else
                  
                    if(this. Hydrogen_sulphide){
                      this.score = this.score +=1;
                      this.answer5 = "Hydrogen Sulphide";
                      this.Hydrogen_sulphide = '';
                    }
                    if(this.Phosphorous==true){
                      this.answer6 = "Bromine";
                    
                    }else
                      if(this.Chlorine==true){
                        this.answer6 = "Bromine";
                      }else
                      if(this.Helium==true){
                        this.answer6 = "Bromine";
                      }else
                      
                        if(this. Bromine){
                          this.score = this.score +=1;
                          this.answer6 = "Bromine";
                          this.Bromine = '';
                        }
                        if(this.copper==true){
                          this.answer7 = "Magnesium";
                        
                        }else
                          if(this.iron==true){
                            this.answer7 = "Magnesium";
                          }else
                          if(this.calcium==true){
                            this.answer7 = "Magnesium";
                          }else
                          
                            if(this. magnesium){
                              this.score = this.score +=1;
                              this.answer7 = "Magnesium";
                              this.magnesium = '';
                            }
                            if(this.NaAlO2==true){
                              this.answer8 = "H2O";
                            
                            }else
                              if(this.Al2O3==true){
                                this.answer8 = "H2O";
                              }else
                              if(this.CaSiO3==true){
                                this.answer8 = "H2O";
                              }else
                              
                                if(this. H2O){
                                  this.score = this.score +=1;
                                  this.answer8 = "H2O";
                                  this.H2O = '';
                                }
                                if(this.Calcium_bicarbonate==true){
                                  this.answer9 = "Sodium Carbonate";
                                
                                }else
                                  if(this.Sodium_bicarbonate==true){
                                    this.answer9 = "Sodium Carbonate";
                                  }else
                                  if(this.Calcium_carbonate==true){
                                    this.answer9 = "Sodium Carbonate";
                                  }else
                                  
                                    if(this. Sodium_carbonate){
                                      this.score = this.score +=1;
                                      this.answer9 = "Sodium Carbonate";
                                      this.Sodium_carbonate = '';
                                    }








  // this.No=false;
  
}

}
