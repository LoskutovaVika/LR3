let N, arr= [], total = 2;

//ввод исключительно положительного числа
do{
    N = Number(prompt('Введите положительное число N',0));
} while (N<0);


//Создание массива, состоящего из элементов от 1 до N
for (let i=1; i <= N; i++){
    arr.push(i);
}

//итоговый результат
for (let i = 0; i < arr.length; i++){
    total = total + (N + arr[i])*2
}
alert(total)