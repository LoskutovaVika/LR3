let NumberOne, count = Number(),  arr = [];

do{ 
    NumberOne = Number(prompt('Введите число:', 0));
    arr.push(NumberOne);
} while (NumberOne !=0);

for (let i=0; i < arr.length; i++){
    if ((arr[i] < 0) && (arr[i] % 2 !== 0)){
        count++;
    }
}
alert(`Набор введенных чисел: ${arr}` +`\n`
+`Кол-во отрицательных и нечетных чисел в наборе: ${count}`)