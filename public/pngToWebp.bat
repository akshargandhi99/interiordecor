@echo off
setlocal enabledelayedexpansion

for %%f in (*.png) do (
    set "filename=%%~nf"
    magick "%%f" "!filename!.webp"
    if exist "!filename!.webp" (
        del "%%f"
    )
)
