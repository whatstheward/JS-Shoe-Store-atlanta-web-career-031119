function getShoes(){
    fetch(BASE_URL)
    .then(res => res.json())
    .then(shoes => shoes.forEach(shoe=>{
        let shoeObj = new Shoe(shoe.id, shoe.name, shoe.company, shoe.price, shoe.image, shoe.description, shoe.reviews)
        shoeObj.buildShoeList()}
    ))}

function handleClick(e){
    let id = e.target.dataset.id
    fetch(BASE_URL +`${id}`)
    .then(res => res.json())
    .then(shoe => {
        let shoeObj = new Shoe(shoe.id, shoe.name, shoe.company, shoe.price, shoe.image, shoe.description, shoe.reviews)
        shoeObj.renderShoe()})
}

function handleForm(e, shoe){
    e.preventDefault()
    console.log(shoe)
    let id = e.target.dataset.id
    let newReview = e.target.querySelector('#review-content').value
    fetch(BASE_URL+`${id}/reviews`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'review': {'content': newReview}
        })
    })
    .then(res => res.json())
    .then(review=> addReview(review))
    .catch(errors=> errors.forEach(error => console.log("ERROR:", error)))
    
}
function addReview(review){
    let reviewList = document.querySelector('#reviews-list')
    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.innerText = review.content
    reviewList.appendChild(li)
}
