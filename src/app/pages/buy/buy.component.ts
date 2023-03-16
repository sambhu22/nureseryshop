import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { AromaticFragrantplants,FloweringPlants,Succulents,BonsaiPlants,Creepers,potting,organic,soil,coco} from 'src/assets/data/data';
@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent {

  buyProduct:any
  constructor(private hero:HeroService ) {}
  ngOnInit(){
    let id=localStorage.getItem('buyId')
    let Herbs = this.hero.giveHerbsData()
    let Succulents=this.hero.giveSucculentsData() 
    let BonsaiPlants=this.hero.giveBonsaiPlantsData()
    let Creepers=this.hero.giveCreepersData()
    let AromaticFragrantplants=this.hero.giveAromaticFragrantplantsData()
    let FloweringPlants=this.hero.giveFloweringPlantsData()
    let Potting=this.hero.givepottingSof()
    let Organic=this.hero.giveorganicSof()
    let Soil=this.hero.givesoilSof()
    let Coco=this.hero.givecocoSof()


    Herbs.map(data => {
      if(id===data.id){
        this.buyProduct=data
      }
    })
    Succulents.map(data => {
      if(id===data.id){
        this.buyProduct=data
      }
    })
    BonsaiPlants.map(data => {
      if(id===data.id){
        this.buyProduct=data
      }
    })
    Creepers.map(data => {
      if(id===data.id){
        this.buyProduct=data
      }
    })
    AromaticFragrantplants.map(data => {
      if(id===data.id){
        this.buyProduct=data
      }
    })
    
   
    FloweringPlants.map(data => {
      if(id===data.id){
        this.buyProduct=data
      }
    })
    
    Potting.map(sof => {
      if(id===sof.id){
        this.buyProduct=sof
      }
    })

    Soil.map(sof => {
      if(id===sof.id){
        this.buyProduct=sof
      }
    })
    Organic.map(sof => {
      if(id===sof.id){
        this.buyProduct=sof
      }
    })
    coco.map(sof => {
      if(id===sof.id){
        this.buyProduct=sof
      }
    })
    
    
    
  }

}
