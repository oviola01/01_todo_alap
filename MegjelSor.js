class MegjelSor{
    /*táblázat egyetlen sorát jelenti, ezen sor viselkedését írja le */
    #adat={};
    constructor(sorom, hova){
        this.#adat=sorom;
        this.szuloElem=hova;
        this.justoneRow();

        this.sorElem=this.szuloElem.children("tr:last-child")
        //rákattintva az pipára vagy a kukára történjen valami
       // this.pipaElem=$(".kesz:last"); //csak az utoljára hozzáadott pipa kell
       this.pipaElem=this.sorElem.children("td").children(".done");
       console.log(this.pipaElem);

        //eseménykezelés
        this.pipaElem.on("click",()=>{
            console.log(this);
        })
    }

    justoneRow(){
        let txt=`<tr>`;
        for (const key in this.#adat) {
             txt+=`<td>${this.#adat[key]}</td >`;
        }
        txt+=`<td><span class="done"> ✔️ <span class="bin"> 🗑️ </td>`
        txt+=`</tr>`;
        this.szuloElem.append(txt);
        }
    }


export default MegjelSor;