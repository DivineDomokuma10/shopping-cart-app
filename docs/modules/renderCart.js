

const renderCartItms = (elem,cartArr) =>{
    cartArr.forEach(e => {
        if(e.quantity === 0){
            elem.innerHTML += `
            <div id="${e.id}" class="item">
                <div class="item-counter">Zero</div>
                <button class="p pm">+</button>
                <button class="m no-minus">-</button>
                <button class="delete">Delete</button>
            </div>
            `
        }
    });
}

export  {renderCartItms};