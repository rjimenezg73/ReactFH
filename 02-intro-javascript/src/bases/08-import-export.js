import heroes, {owners} from '../data/heroes';


//console.log(heroes);

/*
const getHeroeById = (id) => {
  return heroes.find((h) => {
    if(h.id === id){
      return true;
    }else{
      return false;
    }
  });
}*/

// Resumiendo la función anterior
export const getHeroeById = (id) => heroes.find((h) => h.id === id);


//console.log(getHeroeById(3));

export const getHeroesByOwner = (owner) => heroes.filter((ow) => ow.owner ===owner);
//console.log(getHeroesByOwner('Marvel'));

