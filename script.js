/*Создайте булевскую переменную, в которой запишите ответ на утверждение: «Вы мужчина?». Если да, то поставьте true, если нет, то поставьте false.
Запишите условие, в котором проверьте значение булевской переменной, и если оно истинно, то выведите на страницу «Я мужчина», иначе выведите на страницу «Я женщина».
Создайте переменную, в которой укажите Ваш возраст.
Создайте скрипт, который будет выводить словесную интерпретацию возраста. Если меньше 18, то выведите «У меня юный возраст», если 18 и больше до 30, то «Я молодой», если от 31 до 50 – «Я взрослый», если от 51 до 80, то «Я зрелый», если больше 80, то «Я старый».
Проверьте скрипт, поставив возраст из разных интервалов.
*/


//1
var bool = false;
if(bool == true)
	document.write("Я мужчина");
else
	document.write("Я женщина");
	document.write("<br>")

//2
var age = 16;
if(age < 18)
	document.write("У меня юный возраст");
else if (18 <= age <= 30)
	document.write("Я молодой");
else if (30 < age <= 50)
	document.write("Я всрослый");
else if (50 < age <= 80)
	document.write("Я зрелый");
else
	document.write("Я старый");

	



	

