class Shoe{

    constructor(id, name, company, price, image, description, reviews=[]){
        this.id = id
        this.name = name
        this.company = company
        this.price = price
        this.image = image
        this.description = description
        this.reviews = reviews
    }

    buildShoeList(){
        let ul = document.querySelector('#shoe-list')
        let li = document.createElement('li')
        li.className = 'list-group-item'
        li.innerText = this.name
        li.dataset.id = this.id
        li.addEventListener('click', handleClick)
        ul.appendChild(li)
    }
    renderShoe(){
        let reviewForm = document.querySelector('#form-container')
        document.querySelector('#reviews-list').innerHTML = ""
        reviewForm.innerHTML=""
        let img = document.querySelector('#shoe-image')
        img.src = this.image
        
        let shoeName = document.querySelector('#shoe-name')
        shoeName.innerText = this.name
        
        let shoeDescription = document.querySelector('#shoe-description')
        shoeDescription.innerText = this.description
        
        let shoePrice = document.querySelector('#shoe-price')
        shoePrice.innerText = `$` + this.price
        
        let reviews = document.querySelector('#main-shoe > h5')
        
        let form = document.createElement('form')
        form.id = "new-review"
        form.dataset.id = this.id
        form.addEventListener('submit', handleForm)
        
        let formDiv = document.createElement('div')
        formDiv.class = "form-group"
        
        let formInput = document.createElement('textarea')
        formInput.className = "form-control"
        formInput.id = "review-content"
        formInput.rows = 3
        
        let submit = document.createElement('input')
        submit.type = "submit"
        submit.className = "btn btn-primary"
        
        formDiv.appendChild(formInput)
        formDiv.appendChild(submit)
        form.appendChild(formDiv)
        reviewForm.appendChild(form)
        
        let userReviews = this.reviews
        buildReviews(userReviews)
        
    }
}
    
function buildReviews(userReviews){
    let reviewList = document.querySelector('#reviews-list')
    userReviews.forEach(review=>{
        let li = document.createElement('li')
        li.className = 'list-group-item'
        li.innerText = review.content
        reviewList.appendChild(li)
    })
}