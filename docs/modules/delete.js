
const Delete = (delBtn,delItmParent,navArr,elem)=>{
    let deleteBtn = document.querySelectorAll(`.${delBtn}`);

    deleteBtn.forEach( i=> i.addEventListener('click', e=>{
        delItmParent.removeChild(e.target.parentElement);
        uniqueDelete(navArr,e.target.parentElement,elem)
    }))

    const uniqueDelete = (arr,clickBtn,elem) =>{ 
        arr.forEach(i=>{
            if(parseInt(clickBtn.id) === i.id){
                const index = arr.findIndex(e=> e.id === i.id);
                arr.splice(index,1);
                elem.textContent = arr.length;
            }
        })
    }
}

export {Delete}