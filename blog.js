const full_text = document.querySelector("#full_text")
const title = document.querySelector("#title")
const date = document.querySelector("#date")
const cover_img = document.querySelector("#cover_img")
const submit_form = document.querySelector(".submit_form")

submit_form.onsubmit = (e) => {
    e.preventDefault()
    let str_arr = full_text.value.split("\n")

    const blob = new Blob([JSON.stringify(str_arr)], { type : 'application/json' });

    storage.child(`/blog_files/${title.value}`).put(blob).then((snapshot) => {
        storage.child(`blog_files/${title.value}`).getDownloadURL().then((url) => {
          console.log(url);

          db.collection('blog_block').doc(title.value).set({
            'title': title.value,
            'full_text_link': url,
            'date': date.valueAsDate,
            'cover_img_link': cover_img.value,
          }).then((snap) => alert("Blog added")).catch(err => {
            alert(err)
            console.log(err)
          })
        })
    });
      

    console.log(blob)
    console.log(JSON.stringify(str_arr))
}