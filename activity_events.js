const full_text = document.querySelector("#full_text")
const title = document.querySelector("#title")
const date = document.querySelector("#date")
const cover_img = document.querySelector("#cover_img")
const short_description = document.querySelector("#short_description")
const is_activity_event = document.querySelector("#is_activity_event")
const fb_link = document.querySelector("#fb_link")
const submit_form = document.querySelector(".submit_form")

submit_form.onsubmit = (e) => {
    e.preventDefault()
    let str_arr = full_text.value.split("\n")

    const blob = new Blob([JSON.stringify(str_arr)], { type : 'application/json' });

    storage.child(`/${is_activity_event.value}/${title.value}`).put(blob).then((snapshot) => {
        storage.child(`${is_activity_event.value}/${title.value}`).getDownloadURL().then((url) => {
          console.log(url);

          db.collection(is_activity_event.value).doc(title.value).set({
            'event_name': title.value,
            'full_text': url,
            'date': date.valueAsDate,
            'img_link': cover_img.value,
            'isEvent_block': is_activity_event.value == 'event_block',
            'short_description': short_description.value,
            'fb_link': fb_link.value
          }).then((snap) => {
            alert("Activity/Event added")
          }).catch(err => {
            alert(err)
            console.log(err)
          })
        })
    });
      

    console.log(blob)
    console.log(JSON.stringify(str_arr))
}