document.addEventListener("DOMContentLoaded", () => {
 
 const dogBarDiv = document.querySelector("#dog-bar") 
    // const dogBarP = document.createElement("p") // add a p element - when kept up here it only made 1  p 
    // dogBarDiv.appendChild(dogBarP) //adding p to the dog bar div
    // const dogBarSpan = document.createElement("span") // add a span element
    // dogBarP.appendChild(dogBarSpan) // adding the span to the p element, not the div
    
    fetch("http://localhost:3000/pups") // we can only get the pup names from inside the db.json, promise that once you fetch this url...
    .then(response => response.json()) //always the same
    .then(pups => { //then look at my pups object and  when you do...
        pups.map(pups => { //grab my pups object,map  through it and make sure everything is being applide to it. now look at my pups object and do this logic...
            const dogBarP = document.createElement("p") // add a p element every time you see 
            dogBarDiv.appendChild(dogBarP) //adding p to the dog bar div
            const dogBarSpan = document.createElement("span") // add a span for every element  
            dogBarSpan.textContent = pups.name //object.key -- the key name from the object pups.  grab the dogBarSpan and add this as my text content
            dogBarP.appendChild(dogBarSpan) // adding the span to the p element, not the div
            
            
            
            dogBarSpan.addEventListener("click", (e) => { //when a user clicks,
                e.preventDefault()
                const dogInfoDiv = document.querySelector("#dog-info")
                const pupsImg = document.createElement("img") 
                pupsImg.src = pups.image
                dogInfoDiv.appendChild(pupsImg)
                const pupsName = document.createElement("h2")
                pupsName.textContent = pups.name
                dogInfoDiv.appendChild(pupsName)
                
                const button = document.createElement("button")
                button.textContent = pups.isGoodDog? "Good Dog!" : "Bad Dog!" // this is telling  you to go to the object, look at the key. is this a dog? if true, it's the first option. if false, it's the second option
                dogInfoDiv.appendChild(button) 
            })

    })
})
//when it says something iss undefined, it probably means you need to move it within the scope

//right now - the dogs are all populating when I click. so this means, I need to move the const dogInfoDiv, const pupsImg, and Const pupsName up to the global variables at the top

// When a user clicks = add click event on a pup's `span` in the `div#dog-bar`, 
//that pup's info contains the following information: 
//(create  img tag`image`, 
//create h2 tag`name`, and 
//create button - ternary `isGoodDog` status) 
//should show up in the `div` with the
// id of `"dog-info"`. = create a const dog info div Display the pup's info in the `div` with the following
// - a `button` that says `"Good Dog!"` or `"Bad Dog!"` based on whether
//   `isGoodDog` is true or false.











































})