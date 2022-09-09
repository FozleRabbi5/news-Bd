const loadModal = (_id)=>{
    const url = `https://openapi.programming-hero.com/api/news/${_id}`;
    fetch(url)
    .then(res => res.json())
    .then(data=>modalShow(data.data))
    .catch(error => console.log(error))
}
const modalShow = (modalTexts) =>{
    // console.log(modalText)
    const modalTitle = document.getElementById('newsModal');
    const modalDetails = document.getElementById('modal-details');
    for(const modalText of modalTexts){
        console.log(modalText);
        const {title,details} = modalText;
        console.log(title);
        modalTitle.innerText=title;
        modalDetails.innerText= details;
    }

}
loadModal();