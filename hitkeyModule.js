function hitKey(key) {
    var autohotkey = require('child_process').spawn(
        'autohotkey.exe',
        ["hitkey.ahk",
         key]
    );
}

module.exports = hitkey;
