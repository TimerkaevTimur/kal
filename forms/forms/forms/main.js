// // // console.log(document.forms);

// // let form = document.forms.registration
// // // console.log(form.elements.name);
// // // let elem = document.querySelectorAll('.input')
// // // console.log(elem);

// // // console.log(form.elements.select.value);

// // // let option = form.elements.select.options[3]
// // // option.selected = true

// // // form.elements.select.selectIndex = 1

// // // form.elements.select.value = '2'

// // // let select = form.elements.select
// // // let option = new Option('Niznekamsk', '4')

// // // select[3] = option
// // // select[select.options.length] = option

// // // select[select.options.length] = new Option('Niznekamsk2', select.options.length + 1)

// // let email = form.elements.email
// // let error = document.querySelector('.error')
// // let agree = form.elements.agree
// // let errorAgree = document.querySelector('.errorAgree')

// // email.addEventListener('blur', () => {
// //     if(!email.value.includes('@') || !email.value.includes('.')) {
// //         error.innerHTML = 'Email error'
// //     }
// // })

// // email.addEventListener('focus', () => {
// //     error.innerHTML = ''
// // })


// // agree.addEventListener('blur', () => {
// //     if(!agree.checked) {
// //         errorAgree.innerHTML = 'Поставь галочку'
// //     }
// // })

// // agree.addEventListener('focus', () => {
// //     errorAgree.innerHTML = ''
// // })


// // // form.addEventListener('focusin', () => console.log('focusin'))
// // // form.addEventListener('focusout', () => console.log('focusout'))
// // // form.addEventListener('focus', () => console.log('focus'))
// // // form.addEventListener('blur', () => console.log('blur'))


// // // email.addEventListener('input', () => console.log(email.value))
// // // agree.addEventListener('change', () => console.log(agree.value))

// // let sub = (event) => {
// //     event.preventDefault()
// //     alert('OnSubmit')
// //     console.log(document.querySelector('.input'))
// // }

// let input = document.querySelector('.input')
// let newElem ;

// input.addEventListener('click', () => {

//     newElem = document.createElement('textarea') 
//     newElem.innerHTML = input.textContent
//     newElem.onblur = blurText
//     input.replaceWith(newElem)

// })

// function blurText () {
//     input.textContent = newElem.value
//     newElem.replaceWith(input)
// }


// const BASE_URL = 'https://jsonplaceholder.typicode.com'

// let newPost = {
//     "userId": 1,
//     "title": "New post",
//     "body": "New text"
// }

// function sendInfo () {
//     fetch(`${BASE_URL}/posts`,
//         {
//             method: 'POST',
//             headers: {
//                 'Content-type': 'application/json'
//             },
//             body: JSON.stringify(newPost)
//         } 
//     )
//     .then(data => data.json())
//     .then(data => postPrint(data))
// }

// function postPrint (post){
//     let elem = document.querySelector('.wrap')
//     elem.insertAdjacentHTML('beforeend',
//         `<h1>${post.title}</h1>
//         <p>${post.body}</p>`
//     );
// }


// async function  printUsers () {
//     let data = await fetch(`${BASE_URL}/users`);
//     if (data.ok) {
//         let info = await data.json()
//         console.log(info)
//         users = info
//         let people = users.map(user => {
//             return document.querySelector('.wrap').insertAdjacentHTML('beforeend',
//                 `<h1>${user.name}</h1>`
//             )
//         })
//     }
// }

// const getUsers =  () => {
//     fetch(`${BASE_URL}/users`)
//     .then(data => data.json())
//     .then(data => printUsers(data))
// }
    

//1
// let input = document.querySelector('td')
// let newElem ;

// input.addEventListener('click', () => {
//     newElem = document.createElement('textarea') 
//     newElem.innerHTML = input.textContent
//     newElem.onblur = blurText
//     input.replaceWith(newElem)

// })

// function blurText () {
//     input.textContent = newElem.value
//     newElem.replaceWith(input)
// }

//2
let amount  = document.getElementById('#firstpay').value
let interest  = document.getElementById('#term').value
let years = document.getElementById('#procent').value

function count() {
    var monthlyInterest = interest / 100 / 12;
    var payments = years * 12;
    var x = Math.pow(1 + monthlyInterest, payments);
    var monthlyPayment = (amount * x * monthlyInterest) / (x - 1);
    var totalPayment = (monthlyPayment * payments).toFixed(0);
    var html = "<h2>Результаты</h2>";
    html +=
      "<p>Ежемесячный платеж: <span class='sum'>" +
      monthlyPayment +
      "</span></p>";
    html +=
      "<p>Общая сумма платежа: <span class='sum'>" + totalPayment + "</span></p>";
      document.getElementById("results").innerHTML = html;
}

