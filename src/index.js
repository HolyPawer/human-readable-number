module.exports = function toReadable (number) {

    if (number === 0) return 'zero'

  let readableNumbers = new Map(
      [
          ['1', "one"],
          ['2', "two"],
          ['3', "three"],
          ['4', "four"],
          ['5', "five"],
          ['6', "six"],
          ['7', "seven"],
          ['8', "eight"],
          ['9', "nine"],
          ['10', "ten"],
          ['11', "eleven"],
          ['12', "twelve"],
          ['13', "thirteen"],
          ['14', "fourteen"],
          ['15', "fifteen"],
          ['16', "sixteen"],
          ['17', "seventeen"],
          ['18', "eighteen"],
          ['19', "nineteen"],
          ['20', "twenty"],
          ['30', "thirty"],
          ['40', "forty"],
          ['50', "fifty"],
          ['60', "sixty"],
          ['70', "seventy"],
          ['80', "eighty"],
          ['90', "ninety"],
      ]
  )

        let res = '';
        let hundreds = Math.floor(number / 100);
        let dozens = Math.floor((number - hundreds * 100) / 10);
        let unit = number % 10;

        if (hundreds !== 0) {
            res += readableNumbers.get(hundreds.toString()) + ' hundred';
            if (dozens !== 0 || unit !== 0) {
                res += ' ';
            }
        }
        if (dozens === 1) {
            res += readableNumbers.get(dozens.toString() + unit.toString())
        }
        else {
            if (dozens !== 0) {
                res += readableNumbers.get(dozens.toString() + '0');
                if (unit !== 0) {
                    res += ' ';
                }
            }
            if (unit !== 0) {
                res += readableNumbers.get(unit.toString());
            }
        }
        return res;
}
