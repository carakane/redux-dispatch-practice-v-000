export let state;


export function managePets(state={}, action){
  switch(action.type){
    case '':
      return {};
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action);
  render();
  }

export function render(){
  document.innerHTML = state
}
