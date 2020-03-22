const incrementor = {
  state: {
    active: "evens",
    evens: ["2", "4"],
    odds: ["1", "3"],
    nany: ["x", "y"]
  },
  renderCurrent: function() {
    const initialLi = document.createElement("li");
    const currentDisplayed = this.state.active;
    initialLi.innerHTML = this.state[currentDisplayed];
    return initialLi;
  }
};
function initialize() {
  debugger;
  // render initial state to DOM
  const initialItem = incrementor.renderCurrent();
  document.getElementById("selected").appendChild(initialItem);
  log.push({
    initialItem,
    initialState: JSON.parse(JSON.stringify(incrementor.state))
  });
}

window.onload = initialize;
