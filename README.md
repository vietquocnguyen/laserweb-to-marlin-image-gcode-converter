# LaserWeb4 (image to gcode) to Marlin converter

I added a laser to my 3D Printer and plugged the laser in the part cooling fan port. I used LaserWeb4 to convert a raster image to GCODE. The Generated GCODE used **G1 X100 Y100 `S100`** where `S100` is the power of the laser. Marlin doesn't recognize this. So I had to separate the commands to two lines. `M106 S100` to se the laser power and `G1 X100 Y100` to perform the movement.

## Installation
`npm install -g laserweb-to-marlin-image-gcode-converter`

## Usage

`laserweb-to-marlin-image-gcode-converter <input file> [output file]`

**Note: If the `output file` is not specified, it'll print to stdout**

![](images/diff.png?raw=true)