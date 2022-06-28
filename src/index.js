module.exports = function toReadable(number) {
    let readable = "";
    const figure = [
        "zero",
        " one",
        " two",
        " three",
        " four",
        " five",
        " six",
        " seven",
        " eight",
        " nine",
    ];
    const firstTens = [
        " ten",
        " eleven",
        " twelve",
        " thirteen",
        " fourteen",
        " fifteen",
        " sixteen",
        " seventeen",
        " eighteen",
        " nineteen",
    ];
    const tens = [
        "zero",
        " ten",
        " twenty",
        " thirty",
        " forty",
        " fifty",
        " sixty",
        " seventy",
        " eighty",
        " ninety",
    ];

    let hundred = Math.floor(number / 100);
    let ten = Math.floor((number - hundred * 100) / 10);
    let unit = Math.floor(number - hundred * 100 - ten * 10);

    if (hundred > 0) readable = figure[hundred] + " hundred";

    if (ten == 1) {
        readable += firstTens[unit];
        return readable.trim();
    }

    if (ten > 1) readable += tens[ten];
    if (unit > 0) readable += figure[unit];
    if (hundred == 0 && ten == 0 && unit == 0) readable = figure[unit];
    return readable.trim();
};
