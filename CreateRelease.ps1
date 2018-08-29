 $version = Get-Content -Raw -Path Source/manifest.json | ConvertFrom-Json | Select -ExpandProperty version
 $scriptPath = $PSScriptRoot
 $source = "$($scriptPath)/Source"
 $destination = "$($scriptPath)/Releases/release-$($version).zip"
 if (Test-Path $destination) {
    Remove-Item $destination -Force
 }
 
 Add-type -assembly "system.io.compression.filesystem"
 [io.compression.zipfile]::CreateFromDirectory($source, $destination)