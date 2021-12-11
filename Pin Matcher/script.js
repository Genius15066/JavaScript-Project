document.getElementById('generate-pin').addEventListener('click', function () {
   document.getElementById('match').classList.remove('match')
   document.getElementById('not-match').classList.remove('not-match')
   const random = randomNumber();
   console.log(random);
   document.getElementById('random-text').value = random;
})


function randomNumber() {
   const number = Math.round(Math.random() * 10000);
   if (number > 999 && number < 10000) {
      return number;
   }
   else {
      return randomNumber();
   }
}

function getNumber(num) {
   let inputNum = document.getElementById('input-num-id').value;
   const getInputNumber = inputNum + num;
   document.getElementById('input-num-id').value = getInputNumber;
}

document.getElementById('submit-btn').addEventListener('click', function () {
   let pinNumber = parseInt(document.getElementById('input-num-id').value);
   let input = parseInt(document.getElementById('random-text').value);


   if (pinNumber == input) {
      document.getElementById('match').classList.add('match');
      document.getElementById('try').addEventListener('click', function () {
         document.getElementById('input-num-id').value = "";
         document.getElementById('match').classList.remove('match')
      })
   
   }
   else {
      document.getElementById('not-match').classList.add('not-match');
      document.getElementById('try').addEventListener('click', function () {
         document.getElementById('input-num-id').value = "";
         document.getElementById('not-match').classList.remove('not-match')
      })
   }
})


