
// import flatpickr from "flatpickr";
// // Дополнительный импорт стилей
// import "flatpickr/dist/flatpickr.min.css";


// let selectedDate = null;

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//       console.log(selectedDates[0]);
//        selectedDate = selectedDates[0].getTime();
//       checkData()
//   },
// };

// flatpickr('#datetime-picker', options)

// const refs = {
//    container: document.querySelectorAll('.field'),
//   inputDate: document.querySelector('input#datetime-picker'),
//   btnStart: document.querySelector('button[data-start]'),
//   days: document.querySelector('.value[data-days]'),
//   hours: document.querySelector('.value[data-hours]'),
//   minutes: document.querySelector('.value[data-minutes]'),
//   seconds: document.querySelector('.value[data-seconds]'),
// };









// refs.btnStart.disabled = true;

// function checkData(e) {
//   const currentData = Date.now();

//     if (currentData > selectedDate) {
//         // window.alert('Please choose a date in the future')
//         Notiflix.Notify.success('Gohjb start a timing', {
//             timeout: 500
//         })
//     } else {
//         refs.btnStart.disabled = false;
//     }
// }


// const timer = {
//     intervalId: null,
//     isActive: false,

//     start() {
//         if (this.isActive) {
//             return 
//         }
//         const startTime = Date.now();
//         this.isActive = true 


//         setInterval(() => {
//             const currentTime = Date.now();  
//             const deltaTime = selectedDate - currentTime;
//             const resultTime = convertMs(deltaTime);
//            updateTimer(resultTime)

            
//         }, 1000);
//     }
// }



// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days =formatValue(Math.floor(ms / day));
//   // Remaining hours
//   const hours = formatValue(Math.floor((ms % day) / hour));
//   // Remaining minutes
//   const minutes = formatValue(Math.floor(((ms % day) % hour) / minute));
//   // Remaining seconds
//   const seconds = formatValue(Math.floor((((ms % day) % hour) % minute) / second));

//   return { days, hours, minutes, seconds };
// }

// function formatValue(value) {
//   return String(value).padStart(2, '0');
// }

// function updateTimer({ days, hours, minutes, seconds }) {
//   refs.days.textContent = days;
//   refs.hours.textContent = hours;
//   refs.minutes.textContent = minutes;
//   refs.seconds.textContent = seconds;
// }


// refs.btnStart.addEventListener('click', () => {
//     timer.start()
// })















// class Timer {

//     #onChangeCallback = () => {};
//     constructor({ onChange } = {}) {
//     if (onChange) {
//       this.#onChangeCallback = onChange;
//     }
//   }
   
//     start(year) {
//         setInterval(() => {
//             const delta = new Date(year).getTime() - Date.now();
//             console.log(delta)
//            timer.convertMs(delta)
//         }, 1000);
//     }

//          convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//              const seconds = Math.floor((((ms % day) % hour) % minute) / second);
//             this.#onChangeCallback({
//                     days: Timer.formatValue(days),
//                     hours: Timer.formatValue(hours),
//                     minutes: Timer.formatValue(minutes),
//                     seconds: Timer.formatValue(seconds),
//                 });   
//          }
    
//      static formatValue(value) {
//          return value.toString().padStart(2, '0');
         
//      }
    


  
    
//     }
    
   


    
// const timer = new Timer({onChange: OnCountDownChange})







// function checkData(e) {
//   const currentData = Date.now();

//     if (currentData > selectedDate) {
//         window.alert('Please choose a date in the future')
//     } else {
//         refs.btn.disabled = false;
//     }
// }




// function OnCountDownChange(data) {
// //    refs.days.textContent = days;
// //    refs.hours.textContent = hours;
// //    refs.minutes.textContent = minutes;
// //    refs.seconds.textContent = seconds;
//     // const { days, hours, minutes, seconds } = data;
//     console.log(data)
// }


console.log('sdfsd')