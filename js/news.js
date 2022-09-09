const loadNewsApi = (category_id) =>{
    console.log(category_id)
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    fetch(url)
    .then(res => res.json())
    .then (data => loadNews(data.data))
    .catch(error => console.log(error))
};
const loadNews = (allNews) =>{
    // toggleSpinner(true);
    const divContainer = document.getElementById('news-container');
    divContainer.innerText=``;

    const itemDiv= document.getElementById('item-length');
    itemDiv.innerText =``;
        const h1 = document.createElement('h1');
        h1.innerText = `${allNews.length} items found.`; 
        itemDiv.appendChild(h1);

    for (const news of allNews){

        // console.log(news);
        const {_id,title,thumbnail_url,details,author,total_view} = news;

        const {name,published_date,img} =author;
        // console.log(_id);
   
        const div = document.createElement('div');
    div.classList.add('card','mt-3');
    div.innerHTML=`
            <div class="row g-0">
                    <div class="col-4 col-md-4">
                        <img src="${thumbnail_url}" class="img-fluid rounded-start m-2" alt="...">
                    </div>
                <div class="col-8 col-md-8">
                <div class="card-body">
                    <h2 class="card-title">${title}</h2>
                    <p class="card-text">${details.slice(0,300)}...</p>
                    <button type="button" class="btn btn-primary mb-2" onclick="loadModal('${_id}')" data-bs-toggle="modal" data-bs-target="#exampleModal">more</button>
                <div class="container d-flex g-1">
                <div class="d-flex ">
                        <img src="${img}" class="author-img rounded-circle" alt="">
                        <div class="ms-2">
                            <h6>${name ? name : 'no data available'}</h6>
                            <p>${published_date ? published_date : 'no data available'}</p>
                        </div>
                    </div>
                    <div class="m-0">
                         <p><i class="fa-regular fa-eye"></i>${total_view ? total_view : 'no data available'}</P>
                    
                    </div>
                    </div>
                </div>
                </div>
            </div>
    `;
    divContainer.appendChild(div);
    };
    toggleSpinner(false);
};
const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none')
    }
    else{
        loaderSection.classList.add('d-none');
    }
}
loadNewsApi('01');