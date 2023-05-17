function reColor(step, color){
      $("#header").children().removeClass("acted");
      //Resets ::after on all elements -- cannot alter w/ .css()

      $("#header div:nth-child(" + step + ")").addClass("acted");
      //Finds button holder of current step, sets active for ::after recolor

      $("#header div").children().css({"color": "#F8F0E3", "border-color": "#F8F0E3"});
      //Reset for persistent restyle on hover -- reverts to base condition onload and via reset/close

      $("#header div:nth-child(" + step + ")").children().css({"color": color, "border-color": color});
      //Finds the child button of the current button holder step -- updates to parameter color

      $("#holder").css("border-color", color);
      //Sets the border of the main text element in alignment w/ current parameter color
}

function output(number){
     if (number == 1) {
        document.getElementById('title').innerHTML = "Home";
        document.getElementById('text').innerHTML = "A local company, Golden Isles Web Design can help anyone build and develop a web presence that suits the need of their business or endeavor. Our attachment to the community has inspired us to develop a study course for all ages- be they students enrolled in Glynn Counties Schools, or adult residents who wish to learn the principles of coding. To enquire about business or educational opportunities, either call us at (000) 000-0000 or send us an email through our Contact Us section, found above. We are excited to hear from you. For regular updates, follow our Instagram page @golden_isles_web_services.";
    } else if (number == 2) {
        document.getElementById('title').innerHTML = "Products";
        document.getElementById('text').innerHTML = "Elementary age enrollees are offeed introductory courses in computer usage and coding art pieces. <br> Teen enrollees are offered similar Code Art and Animation courses, yet they involve much greater intricacy. A Videogame Coding course is also provided. <br> Adult enrollees are offered four specialized courses for all experience levels: An introductory course, a Development Principles course, and Illustrative and Game-Based programming courses. <br> Two specialized courses for senior enrollees cover Use and Principles topics for individuals with little to no prior experience.";
    } else if (number == 3) {
        document.getElementById('title').innerHTML = "Testimonials";
        document.getElementById('text').innerHTML = "Stephanie Smith: I wholeheartedly enjoyed my experience at Golden Isles Web Services. I run my personal business on a website they curate, and I have never encountered an issue which they could not fix as rapidly as I could hope. <br><br> Pierre Cochran: My daughters have both taken youth coding courses at GIWS, and younger has not stopped rambling about computers since. She seems to have found a great deal of enjoyment in the course, and has been asking to take further lessons.";
    } else if (number == 4) {
        document.getElementById('title').innerHTML = "Rates";
        document.getElementById('text').innerHTML = "Our Junior packages run at $40 apiece for Computer Basics and Animation Programming. <br><br> Our Youth Packages run $100 apiece for Animation Programming and Game Design, and $60 for Computer Basics <br><br> Our Adult courses run at $140 apiece for Computer Principles, Coding Principles, Videogame Programming, and Illustrative Coding <br><br> Our Senior programs run at $30 for Computer Usage and Operations.";
    } else if (number == 5) {
        document.getElementById('title').innerHTML = "Contact";
        document.getElementById('text').innerHTML = "If you wish to consult with us or book an appointment, email us at about@goldenisleswebservices.com";
    } else if (number == 6) {
        document.getElementById('title').innerHTML = "Golden Isles Web Services";
        document.getElementById('text').innerHTML = "";
    }
}
