function shadwoo(options) {
    let shadwoo_qsa = document.querySelectorAll(options.myShadwoo);
    if (options.shadwoo_type === 'hard')
        options.shadwoo_type = '0px'
    if (options.shadwoo_type === 'medium')
        options.shadwoo_type = '7px'
    if (options.shadwoo_type === 'soft')
        options.shadwoo_type = '15px'

    var aRgbHex = '1502BE'.match(/.{1,2}/g);
    console.log(aRgbHex); String.prototype.convertToRGB = function () {
        if (this.length != 6) {
            throw "Only six-digit hex colors are allowed.";
        }

        var aRgbHex = this.match(/.{1,2}/g);
        var aRgb = [
            parseInt(aRgbHex[0], 16),
            parseInt(aRgbHex[1], 16),
            parseInt(aRgbHex[2], 16)
        ];
        return aRgb;
    }
    let rgbcolor = options.shadwoo_color.convertToRGB();

    shadwoo_qsa.forEach(image => {
        image.style.boxShadow = `10px 10px ${options.shadwoo_type} 1px rgba(${rgbcolor},0.${options.shadwoo_opacity}`
    })
    if (options.padding) {
        shadwoo_qsa.style.padding = options.padding_value
    }
}
module.exports.shadwoo = shadwoo;