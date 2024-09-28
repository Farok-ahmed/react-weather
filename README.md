# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# Weather Component Documentation

## Overview
The Weather component is a React-based widget that allows users to search for and display current weather information for a specified city. It utilizes the OpenWeatherMap API to fetch weather data and presents it in a user-friendly interface.

## State
The component uses React's `useState` hook to manage two state variables:

1. `city` (string): Stores the user's input for the city name.
2. `weatherData` (object | false): Stores the weather data fetched from the API. Initially set to `false`.

## Main Function

### `search()`
An asynchronous function that fetches weather data from the OpenWeatherMap API.

- **Functionality**:
    - Constructs the API URL using the `city` state and an API key stored in the environment variable `VITE_APP_ID`.
    - Sends a GET request to the API.
    - Parses the JSON response.
    - Updates the `weatherData` state with the fetched data.
- **Error Handling**: Logs any errors to the console.

## UI Elements

1. **Search Bar**
    - An input field for entering the city name.
    - A search button with a magnifying glass icon.

2. **Weather Icon**
    - Displays an icon representing the current weather condition.
    - Currently shows a static "clear sky" icon.

3. **Temperature Display**
    - Shows the current temperature in Celsius.
    - Data source: `weatherData.main.temp`

4. **City Name Display**
    - Shows the name of the city.
    - Data source: `weatherData.name`

5. **Weather Details Section**
    - Humidity:
        - Displays humidity percentage.
        - Data source: `weatherData.main.humidity`
    - Wind Speed:
        - Displays wind speed in km/h.
        - Data source: `weatherData.wind.speed`

## Styling
- The component uses Tailwind CSS classes for styling.
- The layout is responsive, with a maximum width of 400px on medium-sized screens and above.

## Usage
To use this component:
1. Import it into your React application.
2. Ensure you have the required environment variables set up, particularly `VITE_APP_ID` for the OpenWeatherMap API key.
3. Make sure the required icon assets are available in the specified paths.

## Potential Improvements
1. Add error handling for API request failures.
2. Implement dynamic weather icons based on the actual weather condition.
3. Add loading state indicators during API requests.
4. Implement form submission on Enter key press.
5. Add unit tests for component functionality.