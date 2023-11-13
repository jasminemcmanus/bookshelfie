const genres = [
    "Biography", 
    "Classic",
    "Contemporary",
    "Drama",
    "Dystopia",
    "Fantasy",
    "Gothic",
    "Graphic Novel",
    "Historical Fiction",
    "Horror",
    "Literary Fiction",
    "Magical Realism",
    "Mystery",
    "Non-Fiction",
    "Poetry",
    "Romance",
    "Science Fiction",
    "Other"
]

function handleNavBar(event) {
    let navlinks = document.getElementsByClassName("navlinks");
    for (let i = 0; i < navlinks.length; i++) {
      navlinks[i].className = navlinks[i].className.replace( "active", "");
    }
    event.currentTarget.className += "active";
  }

export {handleNavBar}
export default genres;
