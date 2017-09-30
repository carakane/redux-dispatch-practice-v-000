export let state;

export function managePets(state={pets: []}, action){
  switch(action.type){
    case 'ADD_PET':
      return {pets: [...state.pets, action.pet]};
    case 'REMOVE_PET':
      return {pets: state.pets.filter(element => element.id !== action.id)};
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
