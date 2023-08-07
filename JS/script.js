var firstName = document.querySelector('#firstname')
var middleName = document.querySelector('#middlename')
var lastName = document.querySelector('#lastname')
var DOB = document.querySelector('#dob')
var studentID = document.querySelector('#studentid')
var streetAddress = document.querySelector('#address')
var city = document.querySelector('#city')
var state = document.querySelector('#state')
var country = document.querySelector('#country')
var zipCode = document.querySelector('#zipcode')
var email = document.querySelector('#email')
var course = document.querySelector('#courses')
var level = document.querySelector('#level')
var language = document.querySelector('#language')
var startDate = document.querySelector('#startdate')

var submitBtn = document.querySelector('#submitbtn')
var popupMenu = document.querySelector('.popup')
var confirmbtn = document.querySelector('#confirm')


var dFirstName = document.querySelector('#dfirstname')
var dMiddleName = document.querySelector('#dmiddlename')
var dLastName = document.querySelector('#dlastname')
var dDOB = document.querySelector('#ddob')
var dStudentID = document.querySelector('#dstudentid')
var dStreetName = document.querySelector('#dstreetname')
var dCity = document.querySelector('#dcity')
var dState = document.querySelector('#state')
var dCountry = document.querySelector('#country')
var dZip = document.querySelector('#dzipcode')
var dEmail = document.querySelector('#demail')
var dLanguage = document.querySelector('#dlanguage')
var dStartDate = document.querySelector('#dstartdate')
var dCourse = document.querySelector('#dcourse')
var dLevel = document.querySelector('#dlevel')





submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    dFirstName.innerHTML = firstName.value
    dMiddleName.innerHTML = middleName.value
    dLastName.innerHTML = lastName.value
    dDOB.innerHTML = DOB.value
    dStudentID.innerHTML = studentID.value
    dCity.innerHTML = city.value
    dState.innerHTML = state.value
    dCountry.innerHTML = country.value
    dStreetName.innerHTML = streetAddress.value
    dZip.innerHTML = zipCode.value
    dEmail.innerHTML = email.value
    dCourse.innerHTML = course.value
    dLevel.innerHTML = level.value
    dLanguage.innerHTML = language.value
    dStartDate.innerHTML = startDate.value



    popupMenu.classList.add('show')
})




confirmbtn.addEventListener('click', () => {
    popupMenu.classList.remove('show')
    document.querySelector('form').reset()

})