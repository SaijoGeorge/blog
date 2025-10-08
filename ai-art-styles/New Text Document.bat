@echo off
setlocal enabledelayedexpansion

echo Renaming files to lowercase...
echo.

REM Loop through all .webp files in the current directory
for %%F in ("image of a mango in *.webp") do (
    set "filename=%%~nxF"
    
    REM Use PowerShell to convert filename to lowercase
    for /f "delims=" %%L in ('powershell -Command "'!filename!'.ToLower()"') do set "lowercase=%%L"
    
    REM Only rename if the name actually changed
    if not "!filename!"=="!lowercase!" (
        echo Renaming: %%F
        echo       to: !lowercase!
        ren "%%F" "!lowercase!"
        echo.
    )
)

echo Done!
pause