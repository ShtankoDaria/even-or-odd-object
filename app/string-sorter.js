const stringSorter = {
  state: {
    active: "evens",
    evens: ["2", "4"],
    odds: ["1", "3"],
    nany: ["x", "y"]
  },
  setActive: function(newActive) {
    // set the new active array
    this.state.active = newActive;
  },
  addString: function(newString) {
    // add the new string to the correct array
    //const userInput = document.getElementById("input").value;
    if (isNaN(newString)) {
      if (!this.state.nany.includes(newString)) {
        this.state.nany.push(newString);
      }
    } else if (Number(newString) % 2 === 1) {
      if (!this.state.odds.includes(newString)) {
        this.state.odds.push(newString);
      }
    } else if (!this.state.evens.includes(newString)) {
      this.state.evens.push(newString);
    }
  },
  renderActiveList: function() {
    // return the active array rendered to a list
    const currentDisplayed = this.state.active;
    return this.state[currentDisplayed];
  },
  renderCurrent: function() {
    //create DOM element
    const initialLi = document.createElement("li");
    const currentDisplayed = this.state.active;
    initialLi.innerHTML = this.state[currentDisplayed];
    return initialLi;
  }
};
