    const header = document.querySelector("header");
    const sectionOne = document.querySelector(".hero");
    const burger = document.querySelector('#navbar-toggle')
    const sectionOneOptions = {
      rootMargin: "-80px 0px 0px 0px"
    };
    
    const sectionOneObserver = new IntersectionObserver(function(
      entries,
      sectionOneObserver
    ) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          header.classList.add("scrolled");
          burger.classList.add("scrolled");
          console.log(burger)
        } else {
          header.classList.remove("scrolled");
           burger.classList.remove("scrolled");
          console.log("burger rem")
        }
      });
    },
    sectionOneOptions);
    
    sectionOneObserver.observe(sectionOne);
