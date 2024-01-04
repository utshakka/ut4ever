// This wrapping stuff is called an IIFE, just makes it run immediately
(() => {
  // URLs used across multiple pages
  var _installerUrl = 'https://downloads.ut4ever.box.ca/game%20files/UT4%20Installer%20-%20v1.1.0.zip';
  var _installerVideoUrl = 'https://www.youtube.com/watch?v=uPOS3832ssk';
  var _stockGameUrl = 'https://downloads.ut4ever.box.ca/game files/UT4.zip';
  var _stockEditorUrl = 'https://downloads.ut4ever.box.ca/game%20files/UnrealTournamentEditor.zip';
  var _latestUuUrl = 'https://github.com/timiimit/UT4UU-Public/releases/download/v10.1.6/UT4UU-v10_1_6.zip';
  var _latestUuVersion = 'v10.1.6';
  var _masterServerUuVideoUrl = 'https://www.youtube.com/watch?v=HHsvce0PNkE';
  var _masterServerUuInstructionsUrl = 'https://ut4.timiimit.com/Instructions/UT4UU';
  var _masterServerStockInstructionsUrl = 'https://ut4.timiimit.com/Instructions/StockUT4';
  var _masterServerStockVideoUrl = '';
  var _hubGuideUrl = 'https://downloads.ut4ever.box.ca/server/HubGuide.pdf';

  const urlArray = ['installerUrl', 'installerVideoUrl', 'stockGameUrl', 'stockEditorUrl',
                    'latestUuUrl', 'masterServerUuVideoUrl', 'masterServerUuInstructionsUrl', 'masterServerStockInstructionsUrl', 'masterServerStockVideoUrl',
                    'hubGuideUrl'];
  const textArray = ['latestUuVersion'];

  urlArray.forEach(insertURLToHTML);
  textArray.forEach(insertTextToHTML);

  // Iterate through each global var above and try to insert as link if
  // id exists on that page
  function insertURLToHTML(item)
  {
    let underscore = '_';
    let globalVar = underscore.concat(item);
    if (document.getElementById(item))
    {
      (document.getElementById(item)).setAttribute('href', eval(globalVar));
    }
  }

  // Iterate through each global var above and try to insert as text if
  // id exists on that page
  function insertTextToHTML(item)
  {
    let underscore = '_';
    let globalVar = underscore.concat(item);
    if (document.getElementById(item))
    {
      document.getElementById(item).innerHTML = eval(globalVar);
    }
  }
  // // Update the DOM with the variable.
  // document.getElementById('installerUrl').setAttribute('href', _installerUrl);
  // document.getElementById('installerVideoUrl').setAttribute('href', _installerVideoUrl);
  // document.getElementById('stockGameUrl').setAttribute('href', _stockGameUrl);
  // if (document.getElementById('stockEditorUrl'))
  // {
  //   document.getElementById('stockEditorUrl').setAttribute('href', _stockEditorUrl);
  // }
  // document.getElementById('latestUuUrl').setAttribute('href', _latestUuUrl);
  // document.getElementById('latestUuVersion').setAttribute('href', _latestUuVersion);
  // document.getElementById('masterServerUuVideo').setAttribute('href', _masterServerUuVideo);
  // document.getElementById('masterServerUuInstructions').setAttribute('href', _masterServerUuInstructions);
  // document.getElementById('masterServerStockInstructions').setAttribute('href', _masterServerStockInstructions);
  // document.getElementById('masterServerStockVideo').setAttribute('href', _masterServerStockVideo);
  // document.getElementById('test').innerHTML = _test;

      // Set some variables
      window._ut4everTestVariable = 'Some variable content';
      // Update the DOM with the variable. You could use whatever selector you want to get the DOM element(s) (e.g. getElementsByClassName)
      document.getElementById('variableContent').innerHTML = window._ut4everTestVariable;
})();
