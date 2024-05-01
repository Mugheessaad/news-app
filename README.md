# News-App

## Description

The News Management App is a web application built with Vue.js and Vuetify framework. It allows users to manage news articles, including adding new articles, syncing with a news API, deleting all articles, editing existing articles, and deleting individual articles.
![main](https://github.com/Mugheessaad/news-app/assets/110941437/9627c2fa-a263-4903-94f8-9b22471eed21)

## Features

### Component 1: Main Top Bar

- **Add New**: Opens a popup to add a new news article. After adding necessary details, the news article is added to the datatable.
- **Sync**: Fetches new articles from the news API and populates them in the datatable if it's empty.
- **Delete All**: Deletes all records from the datatable.
![topbar](https://github.com/Mugheessaad/news-app/assets/110941437/aa6f7d95-d898-4227-8c36-d4714f1941aa)

### Component 2: Datatable

- Displays all news articles in a JavaScript datatable with pagination.
- Each row has two buttons:
  - **Edit**: Opens a popup with pre-filled news details for editing. Updates reflect in the datatable.
  - **Delete**: Deletes the specific row from the datatable.
![datatable](https://github.com/Mugheessaad/news-app/assets/110941437/e0431aae-ffe8-49bc-b587-fdcf0d6d1837)

### Component 3: Add/Edit Popup

- Allows users to add a new news article or edit existing ones.
- Contains necessary fields for news details.
- Provides options to add or update news articles.
![add-update](https://github.com/Mugheessaad/news-app/assets/110941437/daa1b058-381e-40c0-805e-a6f0252b530d)

## Technologies Used

- Vue3.js
- Vuetify
- Datatable
- Pinia (for communication between components)
- News API (for collecting data)

## Installation

1. Clone the repository:

   ```
   git clone User https://github.com/Mugheessaad/news-app
   ```

2. Navigate to the project directory:

   ```
   cd news-app
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Run the development server:

   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the app.

## Usage

1. Use the main top bar to add new articles, sync with the news API, or delete all articles.
2. Use the datatable to view, edit, or delete individual news articles.
3. Click on the **Add New** button to add a new article or click on the **Edit** button in the datatable to edit existing articles.
4. Click on the **Delete** button in the datatable to delete specific articles.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).

--
