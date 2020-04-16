// javascript document

// this is the url of the json file on the server 
// let url = 'https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/cats.json';


let url = 'https://jeshan26.github.io/COMP1073FinalExam/cats.json';

//  this is the fetchh api using promises to fetch the data of the json from server 
fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObj) {
        

        let cats = jsonObj.cats;
        let section = document.querySelector("section");

        for (let i = 0; i < cats.length; i++) {

            // build html eleements dynamically
            let article = document.createElement("article");

            let h2 = document.createElement("h2");
            let image = document.createElement("img");
            let p1 = document.createElement("p1");
            let p2 = document.createElement("p2");
            let ul = document.createElement("ul");
            // img element is being created for every image of car by passing the actaul source of the image
            image.setAttribute('src',cats[i].image);

            image.setAttribute('alt', cats[i].image);


            
            // image=cats[i].photo; 
            console.log(image);
            h2.textContent = 'Name'+cats[i].name;
            p1.textContent = 'Species :' + cats[i].species + '\n';
            p2.textContent = '\n Age :' + cats[i].age;
            let favFoods = cats[i].favFoods;

            // looping as features contains array

            for (let j = 0; j < favFoods.length; j++) {
                let listitem = document.createElement('li');
                listitem.innerHTML = favFoods[j];
                ul.appendChild(listitem);
            }
            // appending the elements in article and then article to section so that everthing is contained in a container
            article.appendChild(image);
            article.appendChild(h2);
            article.appendChild(p1);
            article.appendChild(p2);
            article.appendChild(ul);

            section.appendChild(article);
        }
    })
    // this catches any error if occured while loading the url 
    .catch(function(e){
        alert("Error " + e.message);
    });