// hint: use a "change" event
document
  .getElementById("active-array-selection")
  .addEventListener("change", function() {
    debugger;
    //change active
    const ind = document.getElementById("active-array-selection").selectedIndex;
    //stringSorter.state.active = this.children[ind].value;
    stringSorter.setActive(this.children[ind].value);

    //create DOM for appropriate elements
    const initialItem = stringSorter.renderCurrent();
    document.getElementById("active-array-selection").appendChild(initialItem);
    //this.appendChild(initialItem);

    log.push({
      setActive: JSON.parse(JSON.stringify(stringSorter.state.active))
    });
  });
