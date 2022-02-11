# Pokedexp

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Basic Components

- [DropDown](#dropdown)

- [Extrude SVG image](#extrude-svg-image)

- [THREE.Js Environment](#three.js-environment)

### DropDown

    Generate custom select dropdown component: \
    -props:
    label: helper-text (optional).\
    options: A list of {label:string, value:number}.
    id: The id of the wrapper element and label (optional).\
    open: If it's true, the component is shown.\ 
    selectedOption: Active option which is selected currently.\
    handleChange: Callback function to change selectedOption.\