let prix=parseInt(document.getElementById("prixPeches"))
let nombre=document.getElementById("nbPeches");
let sousTotal=document.getElementById("soustotalpeche");

class Fruit
{
    constructor(nom = "Item", prix ="Prix", nombre = 0, sousTotal = "0")
    {
        this.nom = nom;
        this.prix = prix;
        this.nombre=nombre;
        this.sousTotal=sousTotal;
    }
    toString()
    {
        return this.nom + " " + this.prix + "\n" + this.nombre + " " + this.sousTotal + " 0."
    }


}

const fruit1=new Fruit("mmm","0",2,"555");