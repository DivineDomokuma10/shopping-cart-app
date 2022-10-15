let uniqueArr = [];

const add = (btnClass,cartArr,elem) =>{
    let plusBtn = document.querySelectorAll(`.${btnClass}`);

    const addItm = e => {
        cartArr.forEach(itm =>{
            if(itm.id === parseInt(e.target.parentElement.id) && itm.quantity !== -1){
                itm.quantity++;
                e.target.previousElementSibling.textContent = itm.quantity;
                e.target.previousElementSibling.className = 'counter-num';
                e.target.nextElementSibling.className = 'pm';
            };
        })
        uniqueAdd(cartArr,uniqueArr,e.target.parentElement,elem)
    };

    plusBtn.forEach(btn =>{
        btn.addEventListener('click',addItm);
    });

}

const minus = (btnClass,cartArr,elem) =>{
    let plusBtn = document.querySelectorAll(`.${btnClass}`);

    const minusItm = e => {
        cartArr.forEach(itm =>{
            if(parseInt(e.target.parentElement.id) === itm.id && itm.quantity > 1){
               itm.quantity--;
               e.target.previousElementSibling.previousElementSibling.textContent = itm.quantity;
            }
            else if(parseInt(e.target.parentElement.id) === itm.id && itm.quantity === 1){
                itm.quantity = 0;
                e.target.previousElementSibling.previousElementSibling.textContent = 'Zero';
                e.target.previousElementSibling.previousElementSibling.className = 'item-counter';
                e.target.className = 'no-minus';
            }
        })
        uniqueSub(uniqueArr,e.target.parentElement,elem)

    };

    plusBtn.forEach(btn =>{
        btn.addEventListener('click',minusItm);
    });

}

const uniqueAdd = (cartArr,navArr,clickBtn,navElem) =>{
    cartArr.forEach(cItm=>{
        if(navArr.length===0 && cItm.id === parseInt(clickBtn.id)){
            navArr.push({id: cItm.id, qt: 1});
            navElem.textContent = navArr.length;

        }
        else if(navArr.length > 0 && cItm.id === parseInt(clickBtn.id)){
            checkDuplicate(navArr,clickBtn,navElem)
        }
    });

    function checkDuplicate(checkArr,clickElem,navElem){
        const index = checkArr.findIndex((i,index)=> i.id === parseInt(clickElem.id));
        if(index !== -1){
            checkArr[index].qt++;
            navElem.textContent = checkArr.length;
        }
        else{
            checkArr.push({id: parseInt(clickElem.id), qt:1});
            navElem.textContent = checkArr.length;
        }
    }
}

const uniqueSub = (navArr,clickBtn,navElem) => {
    navArr.forEach(i=>{
        if(parseInt(clickBtn.id) === i.id && i.qt > 1){
            i.qt--;
           
        }
        else if(parseInt(clickBtn.id) === i.id && i.qt === 1){
            const index = navArr.findIndex((e,index) => e.id === parseInt(clickBtn.id));
            navArr.splice(index,1)
            navElem.textContent = navArr.length;
        }
    })
}


export {add,minus,uniqueArr};