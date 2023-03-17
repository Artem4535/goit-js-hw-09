import Notiflix from "notiflix";

const refs = {
  form: document.querySelector('.form'),
  btn: document.querySelector('button')
}



refs.form.addEventListener('submit', onBtnSubmit)


function onBtnSubmit(e)  {
    e.preventDefault();

     let delay = Number(e.currentTarget.delay.value);
     const step = Number(e.currentTarget.step.value);
    const amount = Number(e.currentTarget.amount.value);

    for (let position = 1; position <= amount; position += 1) {
        createPromise(position, delay).then(({ position, delay }) => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
  });
        
        delay += step
        
    }

    e.currentTarget.reset()
}




  function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    
    setTimeout(() => {
      if (shouldResolve) {
     resolve({position, delay})
  } else {
   reject({position, delay})
  }
    }, delay);
  
  })
      
  
 
}





