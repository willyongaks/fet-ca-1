const likeBtn = document.getElementById("liveToastBtn");
const boredBtn = document.getElementById("boredBtn");
const url = "https://www.boredapi.com/api/activity/"


// boredBtn.addEventListener('click', handleClick => {
//     console.log(handleClick)
   
// })


boredBtn.addEventListener("click", handleClick);

function handleClick(event){
    console.log(event)
}




async function getActivity() {

    const response = await fetch(url);
    const result = await response.json();

    console.log(result)
}

// getActivity();