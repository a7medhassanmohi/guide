//~ 1
// Convert array of objects to one object
const files = [
  { id: 1, fileName: "test.js", storedFileName: "1_test.js" },
  { id: 2, fileName: "sample.js", storedFileName: "2_sample.js" },
  { id: 3, fileName: "test.js", storedFileName: "3_test.js" },
];

const filesAsObj = {
  1: { id: 1, fileName: "test.js", storedFileName: "1_test.js" },
  2: { id: 2, fileName: "sample.js", storedFileName: "2_sample.js" },
  3: { id: 3, fileName: "test.js", storedFileName: "3_test.js" },
};

//~answer
//ex 1
const result = files.reduce((acc, curr, i) => {
  acc[curr.id] = curr;
  return acc;
}, {});
//ex 2
const _result = {};
for (let [key, item] of files.entries()) {
  result[item.id] = item;
}

//~.............................................................................
//~...............................................................................

/* problem:
 ** Write a function that checks if a service is allowed for the user.
 ** inputs: user, serviceRecord.
 ** output: true if the service slug is present in the allowed services hook on the user object, false otherwise.
 */

// The user object contains a hook that is called allowedServices that represents the services that are allowed for the user.
// serviceName maps to serviceSlug on the service record.
const user = {
  clientHooksData: {
    allowedServices: [
      {
        ServiceName: "SIT-02",
        ServiceStatus: "1",
      },
      {
        ServiceName: "SPR-15",
        ServiceStatus: "1",
      },
      {
        ServiceName: "SPR-19",
        ServiceStatus: "1",
      },
    ],
  },
};

// The serviceRecord contains data about the service two of which are
// serviceSlug(unique identifier for each service),
// serviceLabel(the name of the service usually in arabic)
const serviceRecord1 = {
  serviceSlug: "SNOT-01",
  serviceLabel: "استعلام عن سريان محرر مميكن",
};

const serviceRecord2 = {
  serviceSlug: "SPR-15",
  serviceLabel: "استعلام عن سريان محرر مميكن",
};

function isAllowed(user, serviceRecord) {
  // Write your code here

  const {
    clientHooksData: { allowedServices },
  } = user;
  return allowedServices.some(
    (it) => it["ServiceName"] === serviceRecord["serviceSlug"]
  );
}

// console.log({ [serviceRecord1.serviceSlug]: isAllowed(user, serviceRecord1) }); // should give false
// console.log({ [serviceRecord2.serviceSlug]: isAllowed(user, serviceRecord2) }); // should give true

// console.log(isAllowed(user, serviceRecord1));

//~..........................................................
//~..........................................................
// Sum arrays into one array
const arr_1 = [1, 2, 3, 4, 5];
const arr_2 = [5, 0, 2, 8, null];

//Sum => [6, 2, 5, 12, 5];

const sumArrays = (arr1, arr2) => {
  // write your code here
  return arr1.map((it, i) => {
    return (it || 0) + (arr2[i] || 0);
  });
};

// console.log("Sum: ", sumArrays(arr_1, arr_2));

//~.............................................................................

// Swap day with month in the following array
const invoices = [
  { date: "01-10-2022", amount: 120 },
  { date: "01-11-2022", amount: 239 },
  { date: "01-12-2022", amount: 134 },
];
const swapped = [
  { date: "10-01-2022", amount: 120 },
  { date: "11-01-2022", amount: 239 },
  { date: "12-01-2022", amount: 134 },
];

const swap = (arr) => {
  // write your code here
  return arr.map((it) => {
    const swapDate = it.date.split("-");
    [swapDate[0], swapDate[1]] = [swapDate[1], swapDate[0]];
    return { ...it, date: swapDate.join("-") };
  });
};

// console.log(swap(invoices));

//~................................................................

// Check if token has expired

const token1 = {
  createdAt: "2022-04-26T13:22:00.00Z",
  ttl: 232523432434, // in ms
};

const token2 = {
  createdAt: "2022-04-25T13:22:00.00Z",
  ttl: 563374, // in ms
};

const hasExpired = (token) => {
  /* 
  1- convert createdAt to ms
  2- add createdAt to ttl and assign  it to new variable called valid time
  3- convert date now to ms
  4- if  date now > valid time  >>> expire  else  not expire
  */
  let createdAtMs = new Date(token.createdAt).getTime();
  let validTime = createdAtMs + token.ttl;
  let now = Date.now(); //date since 1970 in ms
  return now > validTime;
};

// console.log("token 1 has expired: ", hasExpired(token1));
// console.log("token 2 has expired: ", hasExpired(token2));

// ..................................................................................................

/* problem:
 ** Write a function that return an object of a label and value, where the label is the key and value is the doc_count of the buckets.
 ** You should replace the Key with the corresponding one in Arabic, where.
 ** NEW => "طلبات جديدة"
 ** Processing => "طلبات قيد التنفيذ"
 ** Approved => "طلبات منفذة"
 ** Rejected => "طلبات ملغاة"
 */

const input = {
  hits: {
    total: {
      value: 10524, // Total Count
      relation: "eq",
    },
    max_score: null,
    hits: [],
  },
  aggregations: {
    states: {
      buckets: [
        {
          key: "Processing",
          doc_count: 4975,
        },
        {
          key: "Approved",
          doc_count: 3345,
        },
        {
          key: "New",
          doc_count: 1698,
        },
        {
          key: "Rejected",
          doc_count: 506,
        },
      ],
    },
  },
};

const output = [
  { label: "طلبات جديدة", value: 1698 },
  { label: "طلبات قيد التنفيذ", value: 4975 },
  { label: "طلبات منفذة", value: 3345 },
  { label: "طلبات ملغاة", value: 506 },
];

const mapResponse = (input) => {
  // Write your code here
  const newLabel = {
    New: "طلبات جديدة",
    Processing: "طلبات قيد التنفيذ",
    Rejected: "طلبات ملغاة",
    Approved: "طلبات منفذة",
  };
  const {
    aggregations: {
      states: { buckets },
    },
  } = input;
  return buckets.map((it) => {
    return { label: newLabel[it.key], value: it.doc_count };
  });
};

// console.log("result: ", mapResponse(input));

//~ .........................................................................

/* problem:
 ** Write a function that calculates the total price of a service request.
 ** inputs: SettlementAmounts
 ** output: total price
 */

// this object represents the payment data that are received from the GA and the citizen must pay to complete the service
// settlementAccountCode is like the account number of a certain GA
// amount is the required amount to pay in EGP
const settlementAmounts = [
  {
    settlementAccountCode: "123",
    amount: "20",
  },
  {
    settlementAccountCode: "456",
    amount: "15.5",
  },
  {
    settlementAccountCode: "789",
    amount: "30.05",
  },
];

const totalPrice = (settlementAmounts) => {
  return settlementAmounts.reduce((acc, { amount }) => {
    return acc + +amount;
  }, 0);
};

// console.log({ total: totalPrice(settlementAmounts) }); // expected 65.55

//~..............................................................................

// Calculate the sum of numbers received in a comma delimited string
const sumNumbers = (input) => {
  // Write your code here
  return input
    .split(",")
    .reduce((acc, curr) => {
      return acc + +curr;
    }, 0)
    .toFixed(1);
};

// console.log(sumNumbers("1.5, 2.3, 23.1, 4, 25.5, 6, 7.2, 8, 9, 10.9")); // 97.5

//~...............................................................................

/*
  Given an integer num, reverse it twice, and return true if the revered equal num. 
  Otherwise, return false.

  Ex1:
  Input: num = 526
  Output: true
  Explanation: Reverse num to get 625, then reverse 625 to get 526, which equals num.

  Ex2:
  Input: num = 1800
  Output: false
  Explanation: Reverse num to get 81, then reverse 81 to get 18, which doesn't equal num.
*/

const reverseNumber = (num) => {
  // Write your code here

  return (
    +parseInt(num.toString().split("").reverse().join(""))
      .toString()
      .split("")
      .reverse()
      .join("") === num
  );
};
const reverseNumber2 = (num) => {
  function reversed(num) {
    let rev = 0;
    let lastDigit;
    let number = Math.abs(num);
    while (number != 0) {
      lastDigit = number % 10;
      rev = rev * 10 + lastDigit;
      number = Math.floor(number / 10);
    }
    return rev * Math.sign(num);
  }

  return reversed(reversed(num)) === num;
};
// console.log(reverseNumber2(1485870));
// console.log("🚀 ~ reverseNumber", reverseNumber(1800)); // false
// console.log("🚀 ~ reverseNumber", reverseNumber(526)); // true

// ~ .....................................................................

/* 
  Write a function which returns true if 
  given value of number is an integer **without using any inbuilt functions**
*/

const isInt = (num) => {
  return num % 1 === 0;
};

// console.log("🚀 ~ isInt", isInt(4.0)); // true
// console.log("🚀 ~ isInt", isInt(12.2)); // false
// console.log("🚀 ~ isInt", isInt(0.3)); // false
// ~.........................................................................

/*
  Write a function to return a list of elements which contains at least one character as digit
*/

function numInString(array) {
  // Write your code here
  return array.filter((it) => /\d/.test(it));
}

// console.log("🚀 ~ numInString", numInString(["1a", "a", "2b", "b"])); // ['1a', '2b']
// console.log("🚀 ~ numInString", numInString(["abc", "abc10"])); // ['abc10']
// console.log("🚀 ~ numInString", numInString(["abc", "ab10c", "a10bc", "bcd"])); // ['ab10c', 'a10bc']

// ~.......................................................................................................

/* 
  Write a function that accepts two dates and returns the difference between them as number of days
*/

function getDaysBetweenDates(date1, date2) {
  // Write your code here
  const timeStampDate1 = new Date(date1).getTime();
  const timeStampDate2 = new Date(date2).getTime();
  const timeDiff = Math.abs(timeStampDate2 - timeStampDate1);

  return Math.floor(timeDiff / (1000 * 60 * 60) / 24);
}

console.log(
  "🚀 ~ getDaysBetweenDates",
  getDaysBetweenDates("12/2/2020", "12/1/2020")
); // 47
