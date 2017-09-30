export let state;

 
export function managePets(){
  switch(action.type){
    case '':
      return {};
    default:
      return state;
  }
}

export function dispatch(action){
  state = changeState(state, action);
  render();
  }

export function render(){
  document.innerHTML = state
}
