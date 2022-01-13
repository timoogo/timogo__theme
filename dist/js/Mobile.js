
const header = document.querySelector("header");
    const aside = document.querySelector("aside");
    const asideOptions = {
      rootMargin: "-80px 0px 0px 0px"
    };
    const asideObserver = new IntersectionObserver(function(
      entries,
      asideObserver
    ) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          header.classList.add("scrolled");

        } else {
          header.classList.remove("scrolled");
        }
      });
    },
    asideOptions);
    
    asideObserver.observe(aside);
