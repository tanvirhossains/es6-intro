// module 31-2


//first option to give style by using click
document.getElementById('add-border').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    container.style.border = '3px solid yellow'
})



//second option using click option 
function addBackgroundColor() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.background = 'lightblue'
    }
}

document.getElementById('add-friend').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');// এই লাইন টা সব ডিব কে নিয়ে কাজ করার জন্য
    friendDiv.innerHTML = `
         <h3 class="friend-name">New Friend
        <p>Libero, ducimus?</p>
`
container.appendChild(friendDiv)
})
