const reset = rsBtn =>{
    let resetBtn = document.querySelector(`.${rsBtn}`);
    resetBtn.addEventListener('click',()=>{
        location.reload()
    })
}

export {reset};