log "Hello, I am in the script"
set i to 0
repeat while i < 5
    set i to i + 1
    delay 1
    tell application "System Events" to keystroke "k"
    tell application "System Events" to keystroke "return"
end repeat
