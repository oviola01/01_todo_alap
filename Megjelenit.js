class TodoView{
    constructor(LIST, szulo){
        this.toView=LIST;
        this.where=szulo;
        let content = this.letItViewed();
        this.where.html(content);
    }

    letItViewed(){
        let myText="<table>"
        for(let i=0; i<this.toView.length; i++){
            myText+=`<td>`;
            myText+=`<tr>${this.toView[i]}</tr>`;
            myText+=`</td>`;
        }
        myText+="</table>"
    }


}

export default TodoView;