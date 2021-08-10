const SETTING = {
    name: "LUCKY LOTTO!",
    count: 6,
    maxNumber: 45
  };
  const result = new Set(); //Set으로 중복없는 배열만들기
  const { maxNumber, count } = SETTING; // destructuring을 활용해서 변수전달
  function getRandomNumber(maxNumber) {
    while (result.size < count) {
      result.add(Math.ceil(Math.random() * maxNumber));
    }
    return Array.from(result).sort(function (a, b) {
      return a - b;
    });
  }
  console.log(getRandomNumber(maxNumber));