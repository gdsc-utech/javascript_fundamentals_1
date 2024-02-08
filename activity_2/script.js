// cardNum is the index of the card that was clicked
// 0 for the first card, 1 for the second, and so on...
function handleLikeClick(cardNum) {
    console.log('like button clicked');

    // get the cardNum-th like button
    const likeButton = document.getElementsByClassName('like-btn')[cardNum]

    // if the like button is already liked, unlike it
    // adding or removing the 'liked' class will affect the appearance of the like button
    if (likeButton.classList.contains('liked')) {
        likeButton.classList.remove('liked');
    }
    else {
        likeButton.classList.add('liked');
    }
}

// arrow function syntax
const handleCommentClick = (cardNum) => {
    console.log('comment button clicked');

    // get the cardNum-th comment section
    const commentSection = document.getElementsByClassName('comments')[cardNum]

    // prompt the user to enter a comment
    const comment = prompt('Enter your comment');

    if (comment === null || comment === '') {
        // if the user clicked 'cancel' or entered an empty string, do nothing
        return; // exit the function
    }

    // add the comment to the comment section
    commentSection.innerHTML += `<li>${comment}</li>`;
}

async function handleShareClick(cardNum) {
    console.log('share button clicked');

    // get the text of the cardNum-th card
    const text = document.getElementsByClassName('text')[cardNum].innerText;

    const shareData = {
        title: "View My Post",
        text: text,
        url: "https://example.com/post/1234",
    };
    
    try {
        // share using Web Share API
        await navigator.share(shareData);
        alert("shared successfully");
    } catch (err) {
        alert("Error");
    }
}