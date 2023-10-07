import MegjelSor from "./MegjelSor.js";

class TodoView{
    #myLIST=[];
    constructor(LIST, szulo){
        this.#myLIST=LIST;
        szulo.append(`<table class="tablestyle">`)
        this.tableElem=szulo.children("table"); //szülőelemben lévő táblázatokat adja vissza
        this.letItViewed();
    }

    letItViewed(){
        let myText=""
        for(let i=0; i<this.#myLIST.length; i++){
            new MegjelSor(this.#myLIST[i],this.tableElem);
        }
    }
    

}

export default TodoView;