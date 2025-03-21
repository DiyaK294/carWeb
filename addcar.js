let carName =  document.getElementById("carName")
let carBrand = document.getElementById("carBrand")
let carImage = document.getElementById("carImage")
let carDescription = document.getElementById("carDescription")
let form = document.getElementById("addCarForm")
form.addEventListener("submit", function(e){
    e.preventDefault() 
    if(!carName.value) {
        alert("Car Name cannot be empty!")
        return
    } 

    if(!carBrand.value) {
        alert("Car Brand cannot be empty!")
        return
    }

    if(!carImage.value) {
        alert("Car Image URL cannot be empty!")
        return
    }

    if(!carDescription.value) {
        alert("Car Description cannot be empty!")
        return
    }

    let cars = JSON.parse(localStorage.getItem("storedCars")) || []
    cars.push({
        carName: carName.value , 
        carBrand: carBrand.value ,
        carImage: carImage.value , 
        carDescription: carDescription.value
    })
    localStorage.setItem("storedCars" , JSON.stringify(cars))
    carName.value = ""
    carBrand.value = ""
    carImage.value = ""
    carDescription.value = ""
    window.location = "gallery.html"
})
