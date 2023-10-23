const donerName = document.querySelector("#name"),
blood_type = document.querySelector("#blood_type"),
locality = document.querySelector("#locality"),
city_name = document.querySelector("#city_name"),
age = document.querySelector("#age"),
phone = document.querySelector("#phone"),
submit_form = document.querySelector(".submit_form");

submit_form.onsubmit = (e) => {
    e.preventDefault();
    let birth_year = new Date().getFullYear() - age.value;
    db.collection('blood_info').doc(phone.value).set({
        'name': donerName.value,
        'phone': phone.value,
        'blood_type': blood_type.value,
        'address': [locality.value, city_name.value],
        'birth_year': birth_year,
    }).then((snap) => alert("Blog added")).catch(err => {
        alert(err)
        console.log(err)
      })
}