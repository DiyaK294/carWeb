function displayCars() {
  let cars = JSON.parse(localStorage.getItem("storedCars"))
  let str = ""
  if (cars.length > 0) {
    console.log("I am working")
    for (let i in cars) {
      str = str + ` <div class="car-card">
                  <img src="${cars[i].carImage}" alt="">
                  <div>
                      <h1>${cars[i].carName}</h1>
                      <h3>${cars[i].carBrand}</h3>
                      <p>${cars[i].carDescription}</p>
                      <div>
                      <button onClick = "deleteCar(${i})" id="deleteBtn">Delete</button>
                      <button onClick = "editCar(${i})" id="editBtn">Modify</button>
                      </div>
                  </div>
              </div>`
    }
    document.getElementById("carsContainer").innerHTML = str
  }
  else {
    str = "<p class ='no-car-mess'>No cars availible <a href='addcar.html'>Click Here</a> to add a car</p>"
    document.getElementById("carsContainer").innerHTML = str
  }
}

displayCars()

function deleteCar(i) {
  let confirmation = confirm("Are you sure you want to delete this car?")
  if (confirmation) {
    let cars = JSON.parse(localStorage.getItem("storedCars"))
    cars.splice(i, 1)
    localStorage.setItem("storedCars", JSON.stringify(cars))

    displayCars()
  }

}

function editCar(i) {
  let confirmation = confirm("Are you sure you want to edit this car?")
  if (confirmation) {
    localStorage.setItem("editCarNum", i)
    window.location = "modify.html"
  }
}