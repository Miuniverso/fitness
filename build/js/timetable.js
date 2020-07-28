// timetable

var workouts = document.querySelectorAll(".timetable__workout");

var times = document.querySelectorAll(".timetable__time");

var mobileDays = document.querySelectorAll(".timetable__mobile-item");


for (var i = 0; i < workouts.length; i++) {

   // При наведении на тренировку

  workouts[i].addEventListener("mouseover", function(event) {
    var target = event.target;
    // родительский элемент даты активируется
    target.closest(".timetable__day-item").classList.add("timetable__day-item--active");

    // тренировки в конкретном списке тренировок
    var workoutsList = target.closest(".timetable__workout-list").children;
    // для поиска индекса тренировки перевожу коллекцию HTML в массив
    var nodes = Array.prototype.slice.call(workoutsList);

    // получаю индекс тренировки в списке тренировок (от 0 до 3, так как всего
    // тренировок по 4 в каждом столбце)

    var time = nodes.indexOf(target);

    // активирую время с соответствующим индексом
    times[time].classList.add("timetable__time--active");

    // подсветка дня в мобильной версии
    mobileDays[0].classList.add("timetable__mobile-item--active");
  })

  // При снятии наведения с тренировки

  workouts[i].addEventListener("mouseout", function(event) {
    var target = event.target;
    target.closest(".timetable__day-item").classList.remove("timetable__day-item--active");
    var workoutsList = target.closest(".timetable__workout-list").children;
    var nodes = Array.prototype.slice.call(workoutsList);
    var time = nodes.indexOf(target);

    times[time].classList.remove("timetable__time--active");
    mobileDays[0].classList.remove("timetable__mobile-item--active");
  })
}

// toggle days list

var btn = document.querySelector(".timetable__btn");
var days = document.querySelectorAll(".timetable__day-item");
var daysWrapper = document.querySelector(".timetable__day-list");

// console.log(days)
var timesWrapper = document.querySelector(".timetable__time-list");

var workoutGroups = document.querySelectorAll(".timetable__workout-list");
var workoutGroupsArray = Array.prototype.slice.call(workoutGroups);

// console.log(workoutGroupsArray[0]);


// click button

var monday = "Понедельник";

btn.addEventListener("click", function() {

  // возвращение понедельника
  mobileDays[0].textContent = monday;

  // смена картинки в кнопке
  btn.classList.toggle("timetable__btn--active");
  // прозрачность столбика со временем
  timesWrapper.classList.toggle("timetable__time-list--disabled");

  // скрываю все тренеровки
  days.forEach(function(itemDay) {
    itemDay.classList.remove("timetable__day-item--visible");
  })

  // пояление всех дней в списке (смена класса у всех элементов, кроме первого)
  for (var i = 1; i < mobileDays.length; i++) {
    mobileDays[i].classList.toggle("timetable__mobile-item--hidden");
  }

  // смена выбранного дня
  for (var i = 0; i < mobileDays.length; i++) {
    mobileDays[i].addEventListener("click", function(event) {
      mobileDays[0].textContent = event.target.textContent;

      // скрытие всех дней в списке (смена класса у всех элементов, кроме первого)
      for (var i = 1; i < mobileDays.length; i++) {
        mobileDays[i].classList.add("timetable__mobile-item--hidden");
      }

      btn.classList.remove("timetable__btn--active");
      timesWrapper.classList.remove("timetable__time-list--disabled");

      // console.log("Выбрали - " + mobileDays[0].textContent);


      // появление нужного списка тренировок
      var noMobileDays = document.querySelectorAll(".timetable__day-item");

      for (var i = 0; i < noMobileDays.length; i++) {
      // день из списка разбиваю на строки и выбираю первую (с названием)
      var titleDay = noMobileDays[i].textContent.split('\n')[0];

      // если выбранный в мобильном списке день совпадает с днем из старого списка
      if (event.target.textContent === titleDay) {
        // показываю тренировки выбранного дня
          noMobileDays[i].classList.add("timetable__day-item--visible");
        }
      }

    });
  }
})
