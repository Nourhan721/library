let btn = document.querySelector('#addbtn')
let myLibrary=[];


function Book(title,author,pages,read){

    this.title=title,
    this.author=author,
    this.pages=pages,
    this.read=read
}
Book.prototype.toggleRead=function(){
    this.read=!this.read
}
function toggleRead(index){
    myLibrary[i].toggleRead();
    render();
}
function render(){
    let shelf = document.getElementById('shelf')
    shelf.innerHTML =''
    for(i=0;i<myLibrary.length;i++){
        let book=myLibrary[i]
        let bookshelf=document.createElement('div')
        bookshelf.setAttribute('class','book-card glass')
        bookshelf.innerHTML=`
        <div class=cardheader>
        <h2 class='title'>${book.title}</h2>
        <h4 class='author'>${book.author}</h4>
        </div>
        <div class='cardbody'>
        <p>${book.pages}</p>
        <p class='status'>${book.read?"read":"Not Read"}</p>
        <button class='removebtn glass' onClick='remove(${i})'>remove</button>
        </div>`
        shelf.appendChild(bookshelf)
    }
}
function remove(index){
    myLibrary.splice(index,1)
    render()
}

document.querySelector('#addForm').addEventListener('submit',function(event){
    event.preventDefault()
    addBookTolibrary()
})

function addBookTolibrary(){
    let title=document.querySelector('#title').value
    let author=document.querySelector('#author').value
    let pages=document.querySelector('#pages').value
    let read=document.querySelector('#read').checked
    let newbook = new Book(title,author,pages,read)
    console.log(newbook)
    myLibrary.push(newbook)
    render()
}

btn.addEventListener('click',function(){
    let form=document.querySelector('#addForm')
    form.style.display='block'
}
)
