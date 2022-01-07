    const header = document.querySelector("header");
    const sectionOne = document.querySelector(".hero");
    const burger = document.querySelector('#navbar-toggle')
    const sectionOneOptions = {
      rootMargin: "-80px 0px 0px 0px"
    };
    

    const toggleBtn = document.querySelector("#toggle-button");
    const navList = document.querySelector("#navbar-collapse")
    
    toggleBtn.addEventListener("click", ()=>{
      navList.classList.toggle("active")
    })




    const sectionOneObserver = new IntersectionObserver(function(
      entries,
      sectionOneObserver
    ) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          header.classList.add("scrolled");

        } else {
          header.classList.remove("scrolled");
        }
      });
    },
    sectionOneOptions);
    
    sectionOneObserver.observe(sectionOne);
