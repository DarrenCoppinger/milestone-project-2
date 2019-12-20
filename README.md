<h1 align="center">
<img src="https://i.ibb.co/F3TWf3m/writers-of-Ireland.jpg" alt="writers-of-Ireland" border="0" width="100%" >
</h1>

<h2> 
<a href="https://darrencoppinger.github.io/milestone-project-2/">See the website here</a>
</h2>

A website designed to gather together information on interesting literary sites around Ireland. The website aims to achieve the following criteria:
* Provide a convenient centralised location to highligh interesting literary locations. Particularly those that are lesser known. 
* The website must provide an interactive maps for interested parties to investigate highlighted locations and gather further information.
* The website should provide a form that allows visitors of the site to contribute to the database and submit a location to be added to the interactive map. These submissions will be reviewed by the sites moderator and added if approriate.

This website will present a literary sensibility providing a sense of the heritage of Irish literary history.

The fonts were chosen to give a classic writer feel so a typewriter like font was chosen for the headings with a complementary font for the bodies of text. The fonts were sourced from Google Fonts and are as follows:
* Special Elite
* Oswald

## UX

### Design Objectives:

* Is the content appropriate for the audience:
The audience for this website will be english speaking tourists and literary fans, and writers. The audience is likely a young technology savvy audience and will likely access the site on mobile devices. A mobile first approach was considered appropriate for this type of audience. Although the website will accommodate all visitors its primary audience will be technology literate.

* Is the content relevant?

Yes the content on this site is a relevant to Irish Literature. Additonal content can be submitted by users through the "Submission" page form and this content will be curated by the website moderator. 

* Is the content grouped in an intuitive way?

The content is grouped into easily understood sections (Home, Map, Submissions).

The site also aims to have a simple elegan aesthetic to it to reflect the playwright's sense of style. 

* Is the technology for this content appropriate?

A standard website has been chosen as the method to distribute this information as it allows the use of an interactive maps powered by Google Maps.

### Business Strategy

* What is the product this website is selling?

The product that we are trying to sell is the centralised repository for interesting literary locations around Ireland.

* What value are we trying to add to this?

By providing a map to show the geographical locations of these sites tourists and interested parties will be able to plan trips to cities and regions based on the interesting sites available there.

* What has been done like this before?

To the developers knowlegde this is the first of this type of site developed focusing on Irish literature.

    
* What are the technology considerations 

A website is an appropriate technology to reach the widest possible audience and allows the use of the Google Maps API.

* Why would a user want this product? What’s worth doing?

Through interviews with  potential users of this website a list of development priorities were established. An importance versus viability analysis was also conducted, the results of which are as follows:

<a href="https://ibb.co/V2V7D0K"><img src="https://i.ibb.co/V2V7D0K/importance-v-viability-ms2.jpg" alt="importance-v-viability-ms2" border="0"></a>

The development priorities for this project are as follows:
1.	Provide central location to hold literary locations around Ireland
2.	Provide a mechanism for displaying literary locations around Ireland 
3.	Create a mechanism for the submission of new location from interested parties
4.	Provide central location for all social media links
5.	Develop section dedicated to selected authors and highlight all locations associate with them

### User stories

* A tourist is planning a trip to Ireland visits the site: I am traveling to Ireland and want to learn more about it's literary history, I find this site and use it to help plan my trip.
* A member of the general public is researching or is interested in the literary/cultural hertiage of region of Ireland: I am interested in notable literary/cultural figures in a particular area and wish to find out more about their connect to the place. 
* A promoter of a literary museum/site or regional tourist office staff member visits the site: I am researching ways to promote attractions in my local area and find the site, I want to contact the website to add in the literary attraction in my area.


### Wireframe
* <a href="https://ibb.co/1z5dm89">Home</a>
* <a href="https://ibb.co/qCmR387">Map</a>
* <a href="https://ibb.co/x8gdB0D">Submissions</a>
* <a href="https://ibb.co/T2RqxT9">Writers</a>



## Features
### Existing Features
### All Pages
At the top of each page has the website title and responsive navigation bar at the top of the page. The title also acts as a "Home" button.

On the footer of each page are social media icons link the the Writers of Ireland social media profiles.

#### Home
The page has a carousel which rotates between mages of different Irish writers and has previous and next controls on the left and right of the images respectively.

The page includes an "About Us" section which is contained inside a jumbotron. At the bottom of the jumbotron there are links in the form of buttons linking to the other pages of the website and explaining their function. 

#### Map
The Map page shows a display of a Google Maps API embedded map. The map is focused on Ireland.

The google maps interface has be augmented in a number of ways. 

Firstly the map is not the google maps default but a styled version. This version aims to provide a retro feel and blend in with the websites old-school aesthetic.

The map controls have been customised to so that the map style control buttons are located at the bottomo of the map in the center of the interface. The zoom and street view controls have also been moved to the center of the right hand side of the interface. The full screen control feature has also been turned off.

The a search with autocomplete functionality has been included in the map. The searches in this box have been limited to the Ireland of Ireland as much as is possible.



### Features left to Implement
Due to time constraints the writers page of the website was not implemented.


## Technologies Used
This project used:
* HTML
* CSS
* <a href="https://fonts.google.com/">Google Fonts</a>
* <a href="https://c9.io/">Cloud9</a>
* <a href="https://git-scm.com/">Git</a>
* <a href="https://getbootstrap.com/">BootstrapCDN</a>
* <a href="https://jquery.com/">jQuery</a>
* <a href="https://popper.js.org/">popper.js</a>
* <a href="https://www.responsinator.com/">Responsinator</a>
* <a href="https://developers.google.com/maps/documentation">Google Maps Platform</a>

## Testing
Both of the follow validators were used to check the code developed from this project:
* <a href="https://jigsaw.w3.org/css-validator/">W3C Jigsaw CSS Validator</a>
* <a href="https://validator.w3.org/">WC3 Markup Validator</a>

This website was tested on multiple browsers. They included:
* Google Chrome
* Microsoft Edge
* Firefox

### User Stories Testing


* A tourist is planning a trip to Ireland visits the site: I am traveling to Ireland and want to learn more about it's literary history, I find this site and use it to help plan my trip.

1. A tourist sees the home page of the website and reads the about section.
2. The see the text "click here to explore our map and to discover literary locations all over Ireland" and click the button. 
3. They go to the map page of the website and explore the map by zooming in on the region of the map that they are interested in.
4. They click on the marker in thier region of interest and read more information on the location, see the image and potential follow the link to get more information on it. 

* A member of the general public is researching or is interested in the literary/cultural hertiage of region of Ireland: I am interested in notable literary/cultural figures in a particular area and wish to find out more about their connect to the place.
* 
1. A member of the general public sees the home page of the website and reads the about section.
2. The see the text "click here to explore our map and to discover literary locations all over Ireland" and click the button. 
3. They go to the map page of the website and searchs for a particpular city or town and looking at the markered literary locations in that area
4. They click on the marker in thier region of interest and read more information on the location, see the image and potential follow the link to get more information on it. 
* A promoter of a literary museum/site or regional tourist office staff member visits the site: I am researching ways to promote attractions in my local area and find the site, I want to contact the website to add in the literary attraction in my area.

1. A promotor or tourist office staff member visits the site looking for a way to promote locations in their area.
2. They sees the home page of the website and reads the about section and explore the site.
3. They click the button beside the following text "click here to submit a location you wish to be included on our map"
4. They fill in the form with their name, email and description of the location that they wish to submit. This information is then sent to the site administrator/moderator for review and if the information is relevent to the site it will be added to the map. 


* A promoter of a literary museum or site visits the site: I am reasearching ways to promote my business and find this website, I want to contact the website to add my business to the map.

### Manual testing of elements and functionality on each page

#### Home

1. Navbar
    1. Visit the Home page on a desktop sized screen (lg)
    2. Hover over the Name Header text "Writers of Ireland" to check that the hover effects work.
    3. Click the Name Header text "Writers of Ireland" to check that it links to the Home page.
    4. Hover over each navbar item to check the hover effect works for each one.
    5. Click on each one of the navbar buttons to ensure that each links to the correct page.
    6. Alter the screen size from desktop size down to small devices (sm) size to check that the navbar is responsive. At that size the navbar changes to the toggler icon.
    7. Click the toggler icon to check that the drop-down menu activates.
    8. Hover over each of the drop-down menu buttons to make sure the hover effect activates
    9. Click each of the drop-down menu buttons to make sure that they links to the correct page.
2. Carousel
    1. Visit the Home page and see the carousel under the navbar
    2. Click the forward and back arrows on either side of the slides 
4. Footer
    1. Visit the Home page on a desktop sized screen (lg)
    2. Hover over each of the footer social media buttons to ensure that they react to correctly
    3. Click each of the social media buttons to ensure that they launch the correct social media account in another page
    4. Alter the screen size from desktop size down to mobile (sm) size to check that footer is responsive. At the sm screen size the footer should reform into two rows of two columns.
5. Review of all functionality and responsiveness on mobile screen size by using <a href="https://www.responsinator.com/">Responsinator</a>

#### Map

#### Submissions



## Development

This project was developed using the IDE Cloud9. Updates to the project were committed to git. These updates where then pushed to GitHub where they were stored in a public directory.

Committing and pushing updates was done through cloud9s inbuilt functionality.

To deploy these pages to GitHub pages for the GitHub repository, the following method was used.
1. Logged into my GitHub account (https://github.com/DarrenCoppinger)
2. Go to Repository tab.
3. Click the repository called "milestone-project-2"
4. Go to the "Settings" tab at the top of the page and click it.
5. Scroll down the "Settings" page to the "GitHub Pages" section.
6. In the "Sources" subsection select "Master Branch" from the drop-down menu currently labelled none. This refreshes the page and publishes the project.
7. Scroll down again to the GitHub pages section to find a link to the deployed website.


### To Run Project Locally

To clone or copy this project from GitHub follow these steps:
1. Follow this link to the [project repository on GitHub] (https://darrencoppinger.github.io/milestone-project-2/)
2. On the left side of the page click the green button labelled "Clone or Download"
3. In the pop up that appears labe;led "Clone with HTTPs" section copy the URL
4. In your local IDE open Git Bash
5. Change the working directory to the to the location for the cloned directory to be stored.
6. Type "git clone" and then paste in the URL copied from GitHub in step 3
7. Hit enter and create your local drive.


## Credits
### Media
All images used on this website were found using google images advanced search feature to find images in the public domain.

#### Disclaimer

This Website was produced for educational purposes only.
