# fet-ca-1
Front end development - Course assessment 1


- Welcome -
Create a ‘welcome.js’ file in the correct folder. In this file, create a jQuery function that selects the HTML element with the “liveToastBtn” ID and shows the HTML Toast element with the ID of ‘liveToast’. This function should be run when the user clicks the ‘Like’ button in the HTML header.

Make a copy of the ‘Like’ button element in the HTML file and place it directly after the existing ‘Like’ button element. Change the button text to “I’m Bored” and the element’s ID to “boredBtn”. In the same ‘welcome.js’ file, create another function that executes a GET Request to the “https://www.boredapi.com/api/activity/” API, once the new “I’m Bored” button is clicked. The response from this API Request should be logged into the web console.







 - Table -
Create a ‘table.js’ file in the correct folder and use this file to populate the Table in the ‘personal’ section as follows, using Vanilla JavaScript:

You need to have 5 rows of data.
The Table needs to be populated from the 'table.js' file you have created
 The following functionality needs to be implemented in the ‘table.js’ file, using jQuery:

When one of the images in the Table is clicked, the image needs to be displayed in a new window in your web browser.
The table’s odd rows need to change font color when the mouse hovers over them, changing font color back to black once the mouse stops hovering over them.


- About me -
Create an ‘aboutMe.js’ file in the correct folder.

In this file, you must create functions to update the ‘about me’ content.

Change all the "Something about me text" to something about you when the page loads. This could be anything, hobbies, what you like or do not like, your pet's names, or where you live. All the "Something about me text" needs to be changed from the function. The information can be real or made up

 When you click the content that you have updated, the background color needs to be powderblue, and the font color needs to change to white.
- Contact Information -
Create a ‘contact.js’ file in the correct folder.

In this file, you must create a single function with the following 3 variables:

email
telephone_number
address
 In the index.html file, in the ‘contact’ section, add a Button.

When this button is clicked, the following should happen in the function created above:

1. Ask the user for information.

You must store this information in the 3 variables created in the contact.js file. Make sure that data is received from the user input, and that it is in the correct format (e.g., make sure the user enters an email address containing both a '@' and '.' ).

 2. Change the current contact information (email, telephone number, and address) to the input data in these 3 new variables.

This must be done using jQuery selectors, without adding more HTML IDs to the ‘contact’ section.

 3. Print the data entered to the console in the following format:

From: email@emailaddress.co.za
Contact: 0458754125
Address: 12 Smith Road, John Park.


- Accessibility -
Create an ‘accessibility.js’ file in the correct folder.

In the Accessibility’ section, we have a visual aid for users who struggle to read small font, in the form of a Toggle Switch. When the user clicks this Toggle Switch to the ‘On’ position, all text on the web page within <p> tags need to be increased by 20%. When the user clicks the Toggle Switch back to the ‘Off’ position, all text on the web page within <p> tags need to be decreased back to the original size. Create a single function in the file that accomplishes this.
These are the tasks