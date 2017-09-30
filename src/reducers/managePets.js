export let state;


export function managePets(state={pets: [{name: '', type: '', id: 0}]}, action){
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
