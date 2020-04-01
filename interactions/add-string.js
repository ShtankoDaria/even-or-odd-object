document.getElementById("save-button").addEventListener("click", function() {
  debugger;
  const elem = document.getElementById("input").value;
  stringSorter.addString(elem);

  log.push({ addString: JSON.parse(JSON.stringify(elem)) });
});
