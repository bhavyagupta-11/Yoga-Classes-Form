# Yoga Classes Registration

## Overview

This project is a Yoga Classes Registration that allows users to enroll in monthly yoga classes. The system includes an admission form, payment integration, and a registrations page to view and manage registered participants.

## Features

- User-friendly admission form with age validation.
- Monthly payment of 500 INR for enrolled participants.
- Selection of batches (6-7AM, 7-8AM, 8-9AM, 5-6PM) with the flexibility to switch batches each month.
- Payment integration with a mock payment process.
- Registrations page displaying participant details grouped by month.

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- MongoDB (for storing participant data)
- Bootstrap (for styling)

## Project Structure

```
|-- yoga-classes-registration/
    |-- public/
        |-- style.css
        |-- index.html
        |-- view.html
    |-- server.js
    |-- package.json
    |-- README.md
```

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/bhavyagupta-11/Yoga-Classes-Form.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up MongoDB:

   - Create a MongoDB Atlas account: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a cluster and obtain the DATABASE URI.
   - Replace the DATABASE URI in `server.js` with your own.

4. Run the application:

   ```bash
   node server.js
   ```

   The application will be accessible at [http://localhost:3000](http://localhost:3000).

5. A demo of the application is available at [https://yogaadmission.onrender.com](https://yogaadmission.onrender.com)

## Usage

1. Visit [http://localhost:3000](http://localhost:3000) in your browser.
2. Fill out the admission form and proceed with the payment process.
3. View and manage registrations on the registrations page.

## Contributing

Feel free to contribute to this project by opening issues or creating pull requests. Follow the standard GitHub flow when contributing.

## License

This project is licensed under the [MIT License](LICENSE).
```

Make sure to replace placeholder details such as `your-username` and customize the content based on your specific project requirements. Additionally, include a `LICENSE` file if you choose a license for your project.
