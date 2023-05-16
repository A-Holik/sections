let toggleSwitch = document.querySelector("#toggle-1");

let state = localStorage.getItem('toggleState'); 
const enable = () => {
  localStorage.setItem('toggleState', 'enabled');
  console.log("local, checked");
  toggleSwitch.checked = true;
}
const disable = () => {
  localStorage.setItem('toggleState', 'disabled');
  console.log("local, not checked");
  toggleSwitch.checked = false;
}
if (state === 'enabled') { 
  enable();
}
toggleSwitch.addEventListener('change', function() {
  if (this.checked) {
   enable();
  } else {
    disable();
  }
});

// this is a example to simulate on/off saving state, but use backend to use this for advanced event handling.
// e.g. functionality  of your smart home