//popover

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
});


// Genderselect


  console.log(123)
 const flexRadioDefault1 = document.querySelector('#flexRadioDefault1')
 const flexRadioDefault2 = document.querySelector('#flexRadioDefault2')
 const flexRadioDefault3 = document.querySelector('#flexRadioDefault3')

 const genderSelect = document.querySelector('#genderSelect')

 flexRadioDefault1.addEventListener("change", ()=>{
  genderSelect.classList.add("d-none")
 })
 
 flexRadioDefault2.addEventListener("change", ()=>{
  genderSelect.classList.add("d-none")
 })
 
 flexRadioDefault3.addEventListener("change", ()=>{
  genderSelect.classList.remove("d-none")
 })
