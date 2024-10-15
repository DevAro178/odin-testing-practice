describe("capitalize", () => {
  const capitalize = (str) => {
    let [x, ...rem] = str;

    return x.toUpperCase() + rem.join("");
  };
  test("holo should return Holo", () => {
    expect(capitalize("holo")).toMatch(/Holo/);
  });
});

describe("reverseString", () => {
  const reverseString = (str) => {
    let [...temp] = str;
    return temp
      .map((e, i) => {
        return temp[temp.length - 1 - i];
      })
      .join("");
  };

  test("Holiday should return yadiloH", () => {
    expect(reverseString("Holiday")).toMatch(/yadiloH/);
  });
});
describe("Calculator", () => {
  const calculator = (function () {
    let add = (x, y) => {
      return x + y;
    };

    let subtract = (x, y) => {
      return x - y;
    };

    let multiply = (x, y) => {
      return x * y;
    };

    let divide = (x, y) => {
      return x / y;
    };

    return { add, subtract, multiply, divide };
  })();
  test("1 + 2 =3", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });
  test("1 - 2 = -1", () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
  });
  test("1 * 2 = 2", () => {
    expect(calculator.multiply(1, 2)).toBe(2);
  });
  test("1 / 2 = 1/2", () => {
    expect(calculator.divide(1, 2)).toBe(1 / 2);
  });
});
describe("CeaserCipher", () => {
  const CeaserCipher = (str, steps) => {
    let [...chars] = str;
    return chars
      .map((e, i) => {
        const val = e.charCodeAt(0);
        if (val >= 65 && val <= 90) {
          var cipherVal = val + steps;
          if (cipherVal > 90)
            return String.fromCharCode(65 + (cipherVal - 90 - 1));
          else return String.fromCharCode(cipherVal);
        } else if (val >= 97 && val <= 122) {
          var cipherVal = val + steps;
          if (cipherVal > 122)
            return String.fromCharCode(97 + (cipherVal - 122 - 1));
          else return String.fromCharCode(cipherVal);
        } else return e;
      })
      .join("");
  };

  test("xyz->abc", () => {
    expect(CeaserCipher("xyz", 3)).toMatch(/abc/);
  });

  test("HeLLo->KhOOr", () => {
    expect(CeaserCipher("HeLLo", 3)).toMatch(/KhOOr/);
  });

  test("Hello, World!->Khoor, Zruog!", () => {
    expect(CeaserCipher("Hello, World!", 3)).toMatch(/Khoor, Zruog!/);
  });
});

describe("analyzeArray", () => {
  const analyzeArray = (arr) => {
    let obj = {
      average: arr[0],
      min: arr[0],
      max: arr[0],
      length: arr.length,
    };

    arr.map((e, i) => {
      if (e < obj.min) obj.min = e;
      if (e > obj.max) obj.max = e;
    });

    obj.average = parseInt(
      arr.reduce((prev, cur) => {
        return prev + cur;
      }) / arr.length
    );

    return obj;
  };
  test("[1,8,3,4,2,6] as Input", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
});
