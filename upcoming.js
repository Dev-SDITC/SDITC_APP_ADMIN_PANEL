const upcoming_title = document.querySelector("#upcoming_title")
const title = document.querySelector("#title")
const date = document.querySelector("#date")
const cover_img = document.querySelector("#cover_img")
const short_description = document.querySelector("#short_description")
const is_activity_event = document.querySelector("#is_activity_event")
const fb_link = document.querySelector("#fb_link")
const submit_form = document.querySelector(".submit_form")

submit_form.onsubmit = (e) => {
    e.preventDefault()
    db.collection('home_page').doc('upcoming_field').set({
        'event_name': title.value,
        'time': date.value,
        'img_link': cover_img.value,
        'show_upcoming': is_activity_event.value == '1',
        'short_description': short_description.value,
        'event_link': fb_link.value,
        'upcoming_title': upcoming_title.value
    }).then((snap) => {
        alert("Upcoming field updated")
    }).catch(err => {
        alert(err)
        console.log(err)
    })
}



const member_count_update_form = document.querySelector(".member_count_update")
const user_count = document.querySelector("#user_count")

member_count_update_form.onsubmit = (e) => {
    e.preventDefault()
    db.collection('users').get().then((snap) => {
        user_count.value = snap.size
        db.collection('home_page').doc('member_count').update({
            'count': snap.size,
        }).then((snap) => {
            alert("User count updated")
        }).catch(err => {
            alert(err)
            console.log(err)
        })
    }).catch(err => {
        alert(err)
        console.log(err)
    })
}