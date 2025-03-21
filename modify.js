let cars =  JSON.parse( localStorage.getItem("storedCars"))
let carNum = localStorage.getItem("editCarNum") 
let editCarName = document.getElementById("carName")
let editCarBrand = document.getElementById("carBrand")
let editCarImage = document.getElementById("carImage")
let editCarDescription = document.getElementById("carDescription")
let form = document.getElementById("editCarForm")
editCarName.value = cars[carNum].carName
editCarBrand.value = cars[carNum].carBrand
editCarImage.value = cars[carNum].carImage
editCarDescription.value = cars[carNum].carDescription
form.addEventListener("submit", function (e) {
    e.preventDefault()
    cars[carNum].carName = editCarName.value
    cars[carNum].carBrand = editCarBrand.value
    cars[carNum].carImage = editCarImage.value
    cars[carNum].carDescription = editCarDescription.value
    localStorage.setItem("storedCars", JSON.stringify(cars))
    window.location = "gallery.html"
})
