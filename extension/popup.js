// adding a new bookmark row to the popup
const addNewBookmark = () => {};

const viewBookmarks = () => {};

const onPlay = e => {};

const onDelete = e => {};

const setBookmarkAttributes =  () => {};

document.addEventListener("DOMContentLoaded", () => {});

const loggedIn = true;

const buildPopup = () => {
    const popup = document.getElementById ("popup-content");

    if (loggedIn) {
        const loggedInHeader = document.createElement("div");
        loggedInHeader.innerHTML = "You are logged in";
        popup.appendChild(loggedInHeader);
    } else {
        const loggedOutHeader = document.createElement("div");
        loggedOutHeader.innerHTML = "You are not logged in";
        popup.appendChild(loggedOutHeader);
    }

}

buildPopup();

window.onload = function() {
    chrome.identity.getAuthToken({interactive: true}, function(token) {
      console.log(token);
    });

    chrome.identity.getProfileUserInfo({accountStatus:"ANY"}, function(user) {
      console.log(user);
    });
};
