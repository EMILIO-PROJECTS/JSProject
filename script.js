window.onload = function () {
  const docBod = document.body;

  const nav = createPageElement("nav", docBod, "nav", "", "");
  const navMenu = createPageElement("ul", nav, "nav__menu", "", "");
  const navMenuHome = createPageElement(
    "li",
    navMenu,
    "nav__menu__item",
    "",
    "Home"
  );
  const navMenuAbout = createPageElement(
    "li",
    navMenu,
    "nav__menu__item",
    "",
    "About"
  );
  const navMenuGallery = createPageElement(
    "li",
    navMenu,
    "nav__menu__item",
    "",
    "Gallery"
  );
  const navMenuContact = createPageElement(
    "li",
    navMenu,
    "nav__menu__item",
    "",
    "Contact"
  );

  document.querySelectorAll(".nav__menu__item").forEach((navItem) => {
    navItem.onclick = (e) => {
      window.location = "#" + navItem.innerText;
    };
  });

  const main = createPageElement("main", docBod);

  const sectionHome = createPageElement("section", main, "section");
  sectionHome.id = "Home";
  const sectionHomeArticleMain = createPageElement(
    "article",
    sectionHome,
    "article"
  );
  const sectionHomeArticleMainHeading = createPageElement(
    "h1",
    sectionHomeArticleMain,
    "section__heading",
    "",
    "Hello World"
  );
  const sectionHomeArticleMainContent = createPageElement(
    "p",
    sectionHomeArticleMain,
    "section__content",
    "",
    "Please wipe your feet"
  );

  const sectionAbout = createPageElement("section", main, "section");
  sectionAbout.id = "About";
  const sectionAboutArticleMain = createPageElement(
    "article",
    sectionAbout,
    "article"
  );
  const sectionAboutArticleMainHeading = createPageElement(
    "h1",
    sectionAboutArticleMain,
    "section__heading",
    "",
    "About"
  );
  const sectionAboutArticleMainContent = createPageElement(
    "p",
    sectionAboutArticleMain,
    "section__content",
    "",
    "This JavaScript dynamically creates elements inside the DOM tree. Navigation menu items point to each section. Each section scrolls smoothly. “Hello World” appears first, styled with centered shadow. The page layout uses flex and padding. Every section has a unique ID. Clicking any menu item triggers a location hash update. The createPageElement function simplifies repetitive DOM generation. CSS rules control fonts, colors, shadows, and spacing. Structure and styling remain cleanly separated. All components are rendered only with vanilla JavaScript functions."
  );
  const sectionGallery = createPageElement("section", main, "section");
  sectionGallery.id = "Gallery";
  const sectionGalleryArticleMain = createPageElement(
    "article",
    sectionGallery,
    "article"
  );
  const sectionGalleryArticleMainHeading = createPageElement(
    "h1",
    sectionGalleryArticleMain,
    "section__heading",
    "",
    "Gallery"
  );
  const sectionGalleryArticleMainContent = createPageElement(
    "p",
    sectionGalleryArticleMain,
    "section__content",
    "",
    "The gallery section displays images created dynamically with JavaScript. Images are added inside a flex container for layout. Each image has a unique source. Users can navigate the gallery using the menu. The gallery section has an assigned ID. Images are wrapped in clickable elements for interaction. JavaScript creates all gallery elements on page load automatically. CSS styles control image size, spacing, and hover effects. The layout adjusts responsively on different screen sizes. The gallery content is inside a section tag. This implementation uses only vanilla JavaScript and CSS."
  );
  const sectionContact = createPageElement("section", main, "section");
  sectionContact.id = "Contact";
  const sectionContactArticleMain = createPageElement(
    "article",
    sectionContact,
    "article"
  );
  const sectionContactArticleMainHeading = createPageElement(
    "h1",
    sectionContactArticleMain,
    "section__heading",
    "",
    "Contact"
  );
  const sectionContactArticleMainContent = createPageElement(
    "p",
    sectionContactArticleMain,
    "section__content",
    "",
    "The contact section includes a form created dynamically with JavaScript. It contains input fields for name, email, and message. Each input field has a corresponding label. Users can submit the form by clicking a button. The section has a unique ID assigned. Form validation can be added using JavaScript event listeners. All form elements are appended inside a section element. CSS styles control the layout and spacing of inputs. The contact form uses flexbox for alignment. JavaScript handles dynamic creation without any HTML. This approach keeps structure and styling cleanly separated."
  );

  function createPageElement(
    $elem = "div",
    $parent = docBod,
    $classlist = null,
    $innerText = "",
    $innerHTML = ""
  ) {
    const elem = document.createElement($elem);
    if ($classlist != null) elem.className = $classlist;
    if ($innerHTML != "") elem.innerHTML = $innerHTML;
    if ($innerText != "") elem.innerText = $innerText;

    if ($parent == null || $parent === undefined) $parent = docBod;
    $parent.appendChild(elem);
    return elem;
  }
};
