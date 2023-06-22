# Medical Bill Upload App

The Medical Bill Upload App is a simple web application built with React that allows users to upload and manage their medical bills. Users can enter bill details, including patient information, hospital name, date of service, bill amount, and upload an image of the bill. The app provides features to view, edit, and delete bills.

## Features

- Create new bills by filling out a form with patient information, hospital name, date of service, bill amount, and uploading an image of the bill.
- View a summary of each bill, including patient name, address, hospital name, date of service, bill amount, and the uploaded bill image.
- Edit existing bills to update the information.
- Delete bills to remove them from the list.
- List all uploaded bills on the home page, allowing users to easily navigate and access each bill's summary.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- React Router: A routing library for managing navigation and URL routing in React applications.
- React Hook Form: A library for managing form state and validation in React.
- Styled Components: A CSS-in-JS library for styling React components.
- Local Storage: The browser's built-in storage mechanism for persisting bill data.

## Setup and Installation

1. Clone the repository or download the source code.
2. Open a terminal and navigate to the project directory.
3. Run the following command to install the required dependencies:
   npm install
4. Start the development server with the following command:
   npm start	

Note: The app should open automatically in your default browser. If not, you can access it at http://localhost:3000.

## Usage

- To add a new bill, click the "Add a New Bill" button on the home page and fill out the form with the required details. Upload an image of the bill by selecting a file from your computer.
- To view the summary of a bill, click the "View Bill" button next to the corresponding bill on the home page. The summary page will display all the details of the selected bill, including the uploaded bill image.
- To edit a bill, click the "Edit Bill" button on the bill summary page. It will redirect you to the form page with the pre-filled values of the selected bill. Make the necessary changes and click "Submit" to save the updated bill.
- To delete a bill, click the "Delete Bill" button on the bill summary page. The bill will be removed from the list of bills.

