import { Injectable } from '@angular/core';
import { services } from 'src/assets/data/data';
import { data,sof,potting,organic,soil,coco,Succulents,BonsaiPlants,FloweringPlants,Creepers, Herbs, AromaticFragrantplants} from 'src/assets/data/data';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getServices(){
    return services;
  }
  giveData(){
    return data
  }
    giveSof(){
     return sof
   }
  giveSucculentsData(){
    return Succulents
  }
  giveBonsaiPlantsData(){
    return BonsaiPlants
  }
  giveFloweringPlantsData(){
     return FloweringPlants
  }
  giveCreepersData(){
    return Creepers
  }
  giveHerbsData(){
    return Herbs
}
giveAromaticFragrantplantsData(){
  return AromaticFragrantplants
}
 givepottingSof(){
   return potting
 }
 giveorganicSof(){
   return organic
 }
 givesoilSof(){
   return soil
 }
 givecocoSof(){
   return coco
 }
 }
