import { TODOLIST } from "./adatok.js";
import TodoView from "./Megjelenit.js";

$(function(){
    const WHERE=$(".tarolo");
    new TodoView(TODOLIST,WHERE);
    }
)