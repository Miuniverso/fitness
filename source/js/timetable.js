// timetable

var workouts = document.querySelectorAll(".timetable__workout");

var times = document.querySelectorAll(".timetable__time");

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
  })

  // При снятии наведения с тренировки

  workouts[i].addEventListener("mouseout", function(event) {
    var target = event.target;
    target.closest(".timetable__day-item").classList.remove("timetable__day-item--active");
    var workoutsList = target.closest(".timetable__workout-list").children;
    var nodes = Array.prototype.slice.call(workoutsList);
    var time = nodes.indexOf(target);

    times[time].classList.remove("timetable__time--active");
  })
}

// toggle days list

var btn = document.querySelector(".timetable__btn");
var days = document.querySelectorAll(".timetable__day-item");
var daysWrapper = document.querySelector(".timetable__day-list");

// console.log(days)
var timesWrapper = document.querySelector(".timetable__time-list");

btn.addEventListener("click", function() {
  btn.classList.toggle("timetable__btn--active");

  for (var i = 1; i < days.length; i++) {
    days[i].classList.toggle("timetable__day-item--visible");
    // days[i].addEventListener("click", function(event) {
    //   console.log(event.target.textContent);
    // })
    // if (days[i].classList.contains("timetable__day-item--visible")) {
    //   break;
    // }
  }

  for (var i = 0; i < workouts.length; i++) {
    workouts[i].classList.toggle("visually-hidden");
  }

  for (var i = 0; i < days.length; i++) {
    days[i].addEventListener("click", function(event) {
      event.preventDefault();
      // нажатый день из списка развиваю на строки и выбираю первую (с названием)
      var titleDay = event.target.textContent.split('\n')[0];
      daysWrapper.firstElementChild.textContent = titleDay;

      for (var i = 1; i < days.length; i++) {
        days[i].classList.toggle("timetable__day-item--visible");
        btn.classList.remove("timetable__btn--active");
        timesWrapper.classList.remove("timetable__time-list--disabled");
        console.log(daysWrapper.firstElementChild);
        // daysWrapper.firstElementChild.firstElementChild.classList.add();
      }

      event.target.firstElementChild.classList.add("timetable__time-list--visible")
    })
  }



  timesWrapper.classList.toggle("timetable__time-list--disabled");
})
