let inputField = document.getElementById('item-input');
let addButton =  document.getElementById('item-button');
let ul =  document.getElementById('items');
let removeButtons = document.getElementsByClassName('remove');
// poderia tambem pegar for document.querySelectorAll()


addButton.addEventListener("click", createItemList, false);

function createItemList(){
    let li = document.createElement('li');    
    let text = document.createTextNode(inputField.value);
    let xButton = document.createElement('button');

    xButton.innerHTML = 'X';
    xButton.className = 'remove';
    
    li.appendChild(xButton);
    li.appendChild(text); 

    ul.appendChild(li);
    inputField.value = "";
    buttonEvents(); 
    // funcao que carrega os eventos, entao apos colocar as
    // listas na 'ul' foi preciso  chamar esta funcao 'aqui' para que os eventos carreguem 
    // para estas novas listas criadas

}

function buttonEvents(){
    debugger
    Array.prototype.forEach.call(removeButtons, function(removeButton){
        console.log(removeButton)
        removeButton.addEventListener("click", removeItemList, false);
    })

    
}

function removeItemList(){
debugger
   this.parentElement.remove();
}