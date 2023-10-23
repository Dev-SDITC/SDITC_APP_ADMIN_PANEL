const role_reqs = document.querySelector("#role_reqs");

db.collection("role_req").onSnapshot(snap => {
    let changes = snap.docChanges();
    changes.forEach((change) => {
        if (change.type === "added") {
            showData(change.doc)
        } else if (change.type === "removed") {
            document.getElementById(change.doc.id).remove()
        }
    })
})

function showData(doc) {

    var user_doc_id = doc.id
    var data = doc.data()

    var reqDivCode = document.createElement("div")
    reqDivCode.classList.add("col-md-5", "reqDiv", "border", "rounded", "p-3", "m-3")
    reqDivCode.setAttribute("id", user_doc_id)

    reqDivCode.innerHTML = `
    <p>Name: ${data['name']}<br>
    Email: ${data['email']}<br>
    Role: ${data['req']}<br>
    UID: ${data['uid']}
    </p>
    <button type="submit" class="btn btn-primary" onclick="acceptReq('${data['uid']}', '${data['req']}', '${user_doc_id}')">Accept</button>
    <button type="submit" class="btn btn-danger" onclick="deleteReq('${user_doc_id}')">Reject</button>`

    role_reqs.appendChild(reqDivCode)
}

function acceptReq(uid, role, doc_id) {
    if (confirm("Do you want to accept?") == true) {
        db.collection("users").doc(uid).update({
            'role': role
        }).then((snap) => {
            // alert("Role Updated");
            db.collection("role_req").doc(doc_id).delete().then((snap) => {
                alert("Role Updated")
            }
            ).catch(err => {
                alert(err)
                console.log(err)
            })
        })
            .catch(err => {
                alert(err)
                console.log(err)
            })
    }
}


function deleteReq(doc_id) {
    if (confirm("Do you want to reject?") == true) {
        db.collection("role_req").doc(doc_id).delete().then((snap) => {
            alert("Role rejected")
        }).catch(err => {
            alert(err)
            console.log(err)
        })
    }
}