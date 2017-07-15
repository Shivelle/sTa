    const scrollLine    = document.querySelector('.scroll-line');
    const slides        = document.querySelectorAll('#slides .slide');
    let currentSlide    = 0;
    const slideInterval = setInterval(nextSlide,2000);
    const animals       = [
  {
    name: 'Crocodile',
    paragraph: '"Morning to ye! Morning to ye!" He rejoined, again moving off. "Oh! I was going to warn ye against. But never mind, never mind;it\'s all one, all in the family too. Sharp frost this morning, ain\'t it? Good-bye to ye. Shan\'t see ye again very soon, I guess; unless it\'s before the Grand Jury." And with these cracked words he finally departed, leaving me, for the moment, in no small wonderment at his frantic impudence.', 
    url: 'https://static.pexels.com/photos/39068/crocodile-eye-animal-nature-39068.jpeg' 
  }, 
  {
    name: 'Monkey',
    paragraph: '"Morning to ye! Morning to ye!" He rejoined, again moving off. "Oh! I was going to warn ye against. But never mind, never mind;it\'s all one, all in the family too. Sharp frost this morning, ain\'t it? Good-bye to ye. Shan\'t see ye again very soon, I guess; unless it\'s before the Grand Jury." And with these cracked words he finally departed, leaving me, for the moment, in no small wonderment at his frantic impudence.', 
    url: 'https://static.pexels.com/photos/70355/vervet-monkey-female-animal-70355.jpeg'
  }, 
  {
    name: 'Frog',
    paragraph: '"Morning to ye! Morning to ye!" He rejoined, again moving off. "Oh! I was going to warn ye against. But never mind, never mind;it\'s all one, all in the family too. Sharp frost this morning, ain\'t it? Good-bye to ye. Shan\'t see ye again very soon, I guess; unless it\'s before the Grand Jury." And with these cracked words he finally departed, leaving me, for the moment, in no small wonderment at his frantic impudence.', 
    url: 'https://static.pexels.com/photos/468052/pexels-photo-468052.jpeg'
  }, 
  {
    name: 'Green Frog',
    paragraph: '"Morning to ye! Morning to ye!" He rejoined, again moving off. "Oh! I was going to warn ye against. But never mind, never mind;it\'s all one, all in the family too. Sharp frost this morning, ain\'t it? Good-bye to ye. Shan\'t see ye again very soon, I guess; unless it\'s before the Grand Jury." And with these cracked words he finally departed, leaving me, for the moment, in no small wonderment at his frantic impudence.', 
    url: 'https://static.pexels.com/photos/119783/pexels-photo-119783.jpeg'
  }, 
  {
    name: 'Yellow Monkey',
    paragraph: '"Morning to ye! Morning to ye!" He rejoined, again moving off. "Oh! I was going to warn ye against. But never mind, never mind;it\'s all one, all in the family too. Sharp frost this morning, ain\'t it? Good-bye to ye. Shan\'t see ye again very soon, I guess; unless it\'s before the Grand Jury." And with these cracked words he finally departed, leaving me, for the moment, in no small wonderment at his frantic impudence.', 
    url: 'https://static.pexels.com/photos/146100/pexels-photo-146100.jpeg'
  }, 
  {
    name: 'Snake',
    paragraph: '"Morning to ye! Morning to ye!" He rejoined, again moving off. "Oh! I was going to warn ye against. But never mind, never mind;it\'s all one, all in the family too. Sharp frost this morning, ain\'t it? Good-bye to ye. Shan\'t see ye again very soon, I guess; unless it\'s before the Grand Jury." And with these cracked words he finally departed, leaving me, for the moment, in no small wonderment at his frantic impudence.', 
    url: 'https://static.pexels.com/photos/45843/snake-python-animal-scale-45843.jpeg'
  }, 
  {
    name: 'Lion',
    paragraph: '"Morning to ye! Morning to ye!" He rejoined, again moving off. "Oh! I was going to warn ye against. But never mind, never mind;it\'s all one, all in the family too. Sharp frost this morning, ain\'t it? Good-bye to ye. Shan\'t see ye again very soon, I guess; unless it\'s before the Grand Jury." And with these cracked words he finally departed, leaving me, for the moment, in no small wonderment at his frantic impudence.', 
    url: 'https://static.pexels.com/photos/90846/pexels-photo-90846.jpeg'
  }, 
  {
    name: 'Lizard', 
    paragraph: '"Morning to ye! Morning to ye!" He rejoined, again moving off. "Oh! I was going to warn ye against. But never mind, never mind;it\'s all one, all in the family too. Sharp frost this morning, ain\'t it? Good-bye to ye. Shan\'t see ye again very soon, I guess; unless it\'s before the Grand Jury." And with these cracked words he finally departed, leaving me, for the moment, in no small wonderment at his frantic impudence.', 
    url: 'https://static.pexels.com/photos/169359/pexels-photo-169359.jpeg'
  }, 
  {
    name: 'Eagle', 
    paragraph: '"Morning to ye! Morning to ye!" He rejoined, again moving off. "Oh! I was going to warn ye against. But never mind, never mind;it\'s all one, all in the family too. Sharp frost this morning, ain\'t it? Good-bye to ye. Shan\'t see ye again very soon, I guess; unless it\'s before the Grand Jury." And with these cracked words he finally departed, leaving me, for the moment, in no small wonderment at his frantic impudence.', 
    url: 'https://static.pexels.com/photos/121760/pexels-photo-121760.jpeg'
  }, 
  {
    name: 'Aligator', 
    paragraph: '"Morning to ye! Morning to ye!" He rejoined, again moving off. "Oh! I was going to warn ye against. But never mind, never mind;it\'s all one, all in the family too. Sharp frost this morning, ain\'t it? Good-bye to ye. Shan\'t see ye again very soon, I guess; unless it\'s before the Grand Jury." And with these cracked words he finally departed, leaving me, for the moment, in no small wonderment at his frantic impudence.', 
    url: 'https://static.pexels.com/photos/69396/crocodile-animal-eye-alligator-69396.jpeg' 
  }, 
  {
    name: 'Giraffe', 
    paragraph: '"Morning to ye! Morning to ye!" He rejoined, again moving off. "Oh! I was going to warn ye against. But never mind, never mind;it\'s all one, all in the family too. Sharp frost this morning, ain\'t it? Good-bye to ye. Shan\'t see ye again very soon, I guess; unless it\'s before the Grand Jury." And with these cracked words he finally departed, leaving me, for the moment, in no small wonderment at his frantic impudence.', 
    url: 'https://static.pexels.com/photos/87316/pexels-photo-87316.jpeg' 
  }, 
  {
    name: 'Jaguar', 
    paragraph: '"Morning to ye! Morning to ye!" He rejoined, again moving off. "Oh! I was going to warn ye against. But never mind, never mind;it\'s all one, all in the family too. Sharp frost this morning, ain\'t it? Good-bye to ye. Shan\'t see ye again very soon, I guess; unless it\'s before the Grand Jury." And with these cracked words he finally departed, leaving me, for the moment, in no small wonderment at his frantic impudence.', 
    url: 'https://static.pexels.com/photos/9322/africa-animals-zoo-tiger.jpg'
  }

  ]; 


  // functions


    function fillScrollLine() {
      const windowHeight      = window.innerHeight;
      const fullHeight        = document.body.clientHeight;
      const scrolled          = window.scrollY;
      const percentScrolled   = (scrolled / (fullHeight - windowHeight)) * 100;
      scrollLine.style.width  = `${percentScrolled}%`;
    }



    // slider
    function nextSlide() {
        currentSlide  = (currentSlide+1)%slides.length;
          slides[currentSlide].className = 'slide';
          slides[currentSlide].className = 'slide showing';
          console.log('hello'); 
    }


// ===============================================

    
/*

    function loadAnimal(i) {
      for (let animal of animals) {
        let animalName = animals.name; 
        let animalText = animals.paragraph;

        // slides[currentSlide].innerHTML = `<img src="${animals.url}%">`; 
        slides[currentSlide].innerHTML = `${animals.name}%`; 




        slides[currentSlide].className = 'slide';
        currentSlide                   = (currentSlide+1)%slides.length;
      };  
      console.log('finished func'); 
    }*/


/*
              <a href="${bookmark.link}" class="bookmark" data-id="${i}" target="_blank">
            <div class="img" style="background-image:url('${bookmark.image}')"></div>
            <div class="title">${bookmark.title}</div>
            <span class="glyphicon glyphicon-remove"></span>
          </a>*/



    // event listeners
    window.addEventListener('scroll', debounce(fillScrollLine));

    
    // debounce
    function debounce(func, wait = 15, immediate) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }






