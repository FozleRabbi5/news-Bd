const loadCategory = () =>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data  => loadCategoryName(data.data.news_category))
    .catch(error => console.log(error))
};
const loadCategoryName = (names) =>{
    const ul = document.getElementById('menu-bar');
    for(const name of names){
        const {category_name,category_id} = name;
        const li = document.createElement('li');
        li.innerHTML= ` 
        <li class="nav-item">
        <a  class="nav-link active ms-5" aria-current="page" onclick="loadNewsApi('${category_id}')">${category_name}</a>
        </li>
        `;
        ul.appendChild(li);
    }; 
};

loadCategory();


