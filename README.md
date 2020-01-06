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
* <a href="https://fonts.google.com/specimen/Special+Elite" target="_blank">Special Elite</a>
* <a href="https://fonts.google.com/specimen/Oswald" target="_blank">Oswald</a>

## UX

### Design Objectives:

* Is the content appropriate for the audience:

The audience for this website will be english speaking tourists and literary fans, and writers. The audience is likely a young technology savvy audience and will likely access the site on mobile devices. A mobile first approach was considered appropriate for this type of audience. Although the website will accommodate all visitors its primary audience will be technology literate.

* Is the content relevant?

Yes the content on this site is a relevant to Irish Literature. Additonal content can be submitted by users through the "Submission" page form and this content will be curated by the website moderator. 

* Is the content grouped in an intuitive way?

The content is grouped into easily understood sections (Home, Map, Submissions).

The site also aims to have a old-school retro writing aesthetic to reflect the historic nature of the source material. 

* Is the technology for this content appropriate?

A standard website has been chosen as the method to distribute this information as it allows the use of an interactive maps powered by Google Maps.

### Business Strategy

* What is the product this website is selling?

The product that we are trying to sell is the centralised repository for interesting literary locations around Ireland.

* What value are we trying to add to this?

By providing a map to show the geographical locations of these sites tourists and interested parties will be able to plan trips to cities and regions based on the interesting sites available there.

* What has been done like this before?

To the developers knowledge this is the first of this type of site developed focusing on Irish literature. However, many sites make up of the Google Maps API.

    
* What are the technology considerations 

A website is an appropriate technology to reach the widest possible audience and allows the use of the Google Maps API.

* Why would a user want this product? What’s worth doing?

Through interviews with  potential users of this website a list of development priorities were established. An importance versus viability analysis was also conducted, the results of which are as follows:

<a href="https://ibb.co/V2V7D0K" target="_blank"><img src="https://i.ibb.co/WgnbFNT/importance-v-viability-ms2.jpg" alt="importance-v-viability-ms2" border="0"></a>

The development priorities for this project are as follows:
1.	Provide central location to hold literary locations around Ireland
2.	Provide a mechanism for displaying literary locations around Ireland 
3.	Create a mechanism for the submission of new location from interested parties
4.	Provide central location for all social media links
5.	Develop section dedicated to selected authors and highlight all locations associate with them

Due to time/resource the final objective was not completed and will be inplimented at a later stage of development of this site.

### User stories

1. A tourist is planning a trip to Ireland visits the site: I am traveling to Ireland and want to learn more about it's literary history, I find this site and use it to help plan my trip.
2. A member of the general public is researching or is interested in the literary/cultural hertiage in a specific region of Ireland: I am interested in notable literary/cultural figures in a particular area and wish to find out more about writers connected to that place. 
3. A promoter of a literary museum/site or regional tourist office staff member who visits the site: I am researching ways to promote attractions in my local area and find the site, I want to contact the website to add in the literary attraction in my area.


### Wireframe
* <a href="https://ibb.co/1z5dm89" target="_blank">Home</a>
* <a href="https://ibb.co/qCmR387" target="_blank">Map</a>
* <a href="https://ibb.co/x8gdB0D" target="_blank">Submissions</a>
* <a href="https://ibb.co/T2RqxT9" target="_blank">Writers</a>

## Features
### Existing Features
### All Pages
The website has a responsive navigation bar and title at the top of the page. The title also acts as a "Home" button.

On the footer of each page are social media icons link the the Writers of Ireland social media profiles.

#### Home
The page has a carousel which transition with a fade between images of different Irish writers. The carousel also has previous and next control buttons on the left and right of the images, respectively.

The page includes an "About Us" section which is contained inside a jumbotron. At the bottom of the jumbotron there are links in the form of buttons linking to the other pages of the website and explaining their function. 

#### Map
The Map page shows a display of a Google Maps API embedded map. The map is focused on Ireland.

The google maps interface has be augmented in a number of ways. 

Firstly the map is not the google maps default but a styled version. This version aims to provide a retro feel and blend in with the websites old-school aesthetic.

The map controls have been customised to so that the map style control buttons are located at the bottom of the map in the center of the interface. The zoom and street view controls have also been moved to the center of the right hand side of the interface. The full screen control feature has also been moved to the center of the right hand side of the interface.

A search box (or Place Autocomplete Card) with autocomplete functionality has been included in the map, this is achieve using a google "Place Autocomplete widget". Radio buttons in the search box allow the user to filter the types of predictions that the autocomplete returns. These filters are by establishments, address and geocodes. 

The searches in this box have also been limited to the Republic of Ireland and Northern Ireland, this is achieved using the strictBounds function and defining the coordinates around the island of Ireland. 

Google marker clustering has also been applied to the map to allow markers placed close together to be combined when the maps is zoomed out.

Infowindows have been included on all markers on the map. When a particular marker is clicked an infowindow will be displayed with information on the location and image and a link for futher information on location or associated writer.

### Features left to Implement
Due to time constraints the writers page of the website was not implemented.


## Technologies Used
This project used:
* HTML
* CSS
* JavaScript
* <a href="https://fonts.google.com/" target="_blank">Google Fonts</a>
* <a href="https://c9.io/" target="_blank">Cloud9</a>
* <a href="https://git-scm.com/" target="_blank">Git</a>
* <a href="https://getbootstrap.com/" target="_blank">BootstrapCDN</a>
* <a href="https://jquery.com/" target="_blank">jQuery</a>
* <a href="https://popper.js.org/" target="_blank">popper.js</a>
* <a href="https://www.responsinator.com/" target="_blank">Responsinator</a>
* <a href="https://developers.google.com/maps/documentation" target="_blank">Google Maps Platform</a>

## Testing
Both of the follow validators were used to check the code developed from this project:
* <a href="https://jigsaw.w3.org/css-validator/" target="_blank">W3C Jigsaw CSS Validator</a>
* <a href="https://validator.w3.org/" target="_blank">WC3 Markup Validator</a>

This website was tested on multiple browsers. They included:
* Google Chrome
* Microsoft Edge
* Firefox

### User Stories Testing


1. A tourist is planning a trip to Ireland visits the site: I am traveling to Ireland and want to learn more about it's literary history, I find this site and use it to help plan my trip.
    1. A tourist sees the home page of the website and reads the about section.
    2. The see the text "click here to explore our map and to discover literary locations all over Ireland" and click the button next to it. 
    3. They go to the map page of the website and explore the map by zooming in on the region of the map that they are interested in.
    4. They click on a marker in thier region of interest and read more information on the location, see the image and potential follow the link to get more information on it. 

2. A member of the general public is researching or is interested in the literary/cultural hertiage of region of Ireland: I am interested in notable literary/cultural figures in a particular area and wish to find out more about their connect to the place.
    1. A member of the general public sees the home page of the website and reads the about section.
    2. The see the text "click here to explore our map and to discover literary locations all over Ireland" and click the button. 
    3. They go to the map page of the website and, in the search box card, type in the name of the area they are in.
    4. They select their location from the autocomplete searchs results (a particpular city or town on the island of Ireland) and look at the markered literary locations in that area.
    5. They click on the marker in thier region of interest and read more information on the location, see the image and potential follow the link to get more information on it. 

3. A promoter of a literary museum/site or regional tourist office staff member visits the site: I am researching ways to promote attractions in my local area and find the site, I want to contact the website to add in the literary sites in my area.
    1. A promotor or tourist office staff member visits the site looking for a way to promote locations in their area.
    2. They sees the home page of the website and reads the about section and explore the site.
    3. They click the button beside the following text "click here to submit a location you wish to be included on our map"
    4. They fill in the form on the Submissionss page with their name, email and description of the location that they wish to submit. 
    5. They clock submit and this information is then sent to the site administrator/moderator for review. If the information is relevent to the site it will be added to the map. 

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
    8. Hover over each of the drop-down menu buttons to make sure the hover effect activates.
    9. Click each of the drop-down menu buttons to make sure that they links to the correct page.
2. Carousel
    1. Visit the Home page and see the carousel under the navbar.
    2. Click the forward and back arrows on either side of the slides.
    3. Wait to see that the fade transition works correctly for carousel images.
3. Jumbotron
    1. Visit the Home page and see the jumbotron text
    2. Hoover over both buttons to ensure they react correctly
    3. Click both buttons to make sure that they bring you to the correct pages.
4. Footer
    1. Visit the Home page on a desktop sized screen (lg)
    2. Hover over each of the footer social media buttons to ensure that they react to correctly
    3. Click each of the social media buttons to ensure that they launch the correct social media account in another page
    4. Alter the screen size from desktop size down to mobile (sm) size to check that footer is responsive. At the sm screen size the footer should reform into two rows of two columns.
5.  Responsinator
    1. Review of all functionality and responsiveness on mobile screen size by using <a href="https://www.responsinator.com/">Responsinator</a>

#### Map

1. Repeat Navbar checks as described in step one of the Home section
2. Embedded Google Map Place Autocomplete Card, check that the searches using the seach bar in the card filter prediction based on which radio button is press (All, Establishments, Addresses or Geocodes)
3. Check that the zoom, full screen and streetview buttons as well as the styled map and satellite image option buttons are all in their correct positions and work.
4. Click on a cluster on the map to ensure that the maps sooms to the location of a cluster to reveal the cluster in that area.
5. Click on all markers to ensure that they launch and the the text, images and links are correct.
6. Search for a place using search bar and ensure that the markers generated by this search are new markers without text from infowindows added to the maps by the developers.
6. Repeat footer checks as described in step four of the Home section 
7. Review of all functionality and responsiveness on mobile screen size by using <a href="https://www.responsinator.com/">Responsinator</a>

It was noted during the testing that for some of the infowindows on a small screen size that the infowindow could be obscured by the Place Autocomplete card at the top of the map viewport. The size of the images in the infowindows was reduced to lessen this effect however, a slight issue still remains. However, a user would be able to reposition the infowindow on the map to read it and to close it down.

During testing it was noted that when a search term was selected in the autocomplete search box the resulting marker would have the same inforwindow information as the last entry in the infowindow content matrix (named content). To fix this issue different variables had to be defined for the markers used in the autocomplete search and the infowindow markers already present on the map.

#### Submissions

1. Repeat Navbar checks as described in step one of the Home section
2. Submissions Form
    1. Submit empty form without any data and check that an error message appears in the first empty field
    2. Submit the form with an empty Name field and check that a relevant error message appears
    3. Submit the form with an empty email address and check that an error messages appears
    3. Submit the form with an invalid email address and check that an error messages appears when you do so
    4. Submit the form with an empty project description field and check that an error messages appears when you do so
    5. Hover over "Submit" button to ensure is reacts
    6. Check that page resets when the submit button is clicked
    7. Check that email is received at email address link to the EmailJS account
3. Resize page down to check that the form is responsive to the change in width and never goes beyond 80% of the page width.
4. Repeat footer checks as described in step four of the Home section 
5. Review of all functionality and responsiveness on mobile screen size by using <a href="https://www.responsinator.com/">Responsinator</a>

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
