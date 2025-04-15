Contact List App
A simple Contact List App that allows you to view and search contacts fetched from a random user API. The app mimics a mobile interface with a slide-to-unlock feature, displaying a list of contacts and their details, such as name, phone number, email, and address.

Features
Slide to Unlock: A fun slide-to-unlock feature to transition from the home screen to the app screen.

Contact List: Displays a list of randomly generated contacts with details such as name, phone number, email, and address.

Search Functionality: Allows you to search contacts by their name.

Accordion Display: Contacts are displayed in an accordion-style format with collapsible details.

Mobile-like UI: The app mimics a mobile device interface for a better user experience.

Tech Stack
HTML: For the structure of the app.

CSS: For styling the UI.

JavaScript: For handling the functionality, including fetching the contact data, dynamic rendering of the UI, and implementing the search feature.

Bootstrap 5: For styling and mobile responsiveness.

Project Structure
The project consists of the following key files:

bash
Copy
Edit
/ContactListApp
  ├── /style.css           # Custom styles for the app
  ├── /script.js           # JavaScript functionality
  ├── index.html           # Main HTML file
Key Components:
index.html: The main HTML structure of the app, including the home screen, app screen, and contact list screen.

style.css: Custom styles for the app, including the mobile interface and layout.

script.js: JavaScript file that handles the app's core functionality, including:

Fetching contacts from the RandomUser.me API.

Implementing the slide-to-unlock feature.

Displaying contact details in an accordion format.

Handling the search functionality.

Setup and Installation
1. Clone the Repository
Clone the repository to your local machine:

bash
Copy
Edit
git clone https://github.com/yourusername/js-contact-list-app.git
cd js-contact-list-app
2. Open the App
Open the index.html file in any modern browser (Chrome, Firefox, etc.):

bash
Copy
Edit
open index.html
Or simply double-click on the index.html file to open it in your browser.

Usage
1. Slide to Unlock
Slide the slider to the right to "unlock" the app screen.

2. View Contacts
After unlocking, click on the Contact icon to navigate to the contact list screen.

The app will fetch and display a list of randomly generated contacts with their details (name, phone number, email, and address).

3. Search Contacts
Use the search bar at the top of the contact list screen to filter the displayed contacts by name.

4. View Contact Details
Click on any contact to view more detailed information, such as phone number, email, and address, in a collapsible accordion format.

API Used
The app uses the RandomUser.me API to generate random user data. The API provides random user details, including name, phone number, email, and address.

Example API Request:
plaintext
Copy
Edit
https://randomuser.me/api?results=6
This request fetches 6 random user profiles to populate the contact list.
