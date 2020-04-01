function resetHandler() {
  debugger;
  // reset state
  stringSorter.setActive("evens");
  stringSorter.state.evens = ["2", "4"];
  stringSorter.state.odds = ["1", "3"];
  stringSorter.state.nany = ["x", "y"];
  // reset DOM
  document.getElementById("selected").innerHTML = "";
  const initialItem = stringSorter.renderCurrent();
  document.getElementById("selected").appendChild(initialItem);
  // log handler
  log.push({ handler: "reset" });
}
document.getElementById("reset-button").addEventListener("click", resetHandler);
