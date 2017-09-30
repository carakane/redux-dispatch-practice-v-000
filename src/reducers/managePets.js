export let state;


export function managePets(){
}

export function dispatch(action){
  state = changeState(state, action);
  render();
  }

export function render(){
  document.innerHTML = state
}
