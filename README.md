# **Typely** 🚀

**Typely** is a user-friendly web app designed to enhance your search experience with its intuitive typeahead functionality. As you start typing in the input field, Typely instantly suggests relevant results, saving you time and effort in finding exactly what you need. The clean and minimal interface ensures a seamless and efficient search process, making it ideal for users who value speed and accuracy. Whether you're searching for information, products, or any other data, Typely makes it effortless to get the results you’re looking for, all with a smooth, real-time search experience.

## **Installation & Setup ⚡**

Clone the repository and follow these steps:

1. Clone the repo:

   ```bash
   git clone https://github.com/eballoi/typely.git
   cd typely
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a .env file on the project root including the `API_BASE_URL`

   ```bash
   API_BASE_URL=https://jsonplaceholder.typicode.com
   ```

4. Run the app locally:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

# Tests in Typely

Typely uses tests to ensure the app functions correctly and remains reliable as new features are added. Below is an overview of how the tests are structured and how to run them.

## Test Structure

Typely uses **[Jest](https://jestjs.io/)** as the testing framework along with **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)** for rendering React components and interacting with the DOM.

## Running Tests

To run the unit tests in Typely, follow these steps:

### 1. Install Dependencies

If you haven't already, make sure to install the necessary dependencies:

```bash
npm install
```

Then to run tests

```bash
npm test
```
