const gm = require('gm')

const SCALES = [8, 16, 32]

const BORDER_WIDTH = 2

const SIDE = 32
const L = SIDE + 2 * BORDER_WIDTH

const ORIGIN = 4
const X = Y = ORIGIN - BORDER_WIDTH

SCALES.forEach(scale => {
    gm('resources/rpgportraits.png')
    
        //
        .crop(L, L, X, Y)

        .filter('Point')
        .resize(SIDE * scale)

        .write(`out/avatar_${scale}x.png`, () => {})
})