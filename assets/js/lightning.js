if (localStorage.getItem('dark-mode') === 'true') {
  darkmode_enable()
}

function darkmode() {
  if (localStorage.getItem('dark-mode') === 'false') {
    darkmode_enable();
  } else if (localStorage.getItem('dark-mode') === null) {
    darkmode_enable();
  } else {
    darkmode_disable();
  }
}

function darkmode_enable()  {
  DarkReader.setFetchMethod(window.fetch)
  DarkReader.enable({
    brightness: 100,
    contrast: 90,
    sepia: 10
  });
  localStorage.setItem('dark-mode', 'true');
}

function darkmode_disable() {
  DarkReader.disable();
  localStorage.setItem('dark-mode', 'false');
}