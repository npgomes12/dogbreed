# Voice-Controlled Multi-Page Web Application

## Overview

This project is a multi-page web application built using HTML, CSS, and JavaScript that demonstrates API integration, voice-controlled navigation, and dynamic data visualization.

The application consists of three interactive pages:

- Home Page
- Stocks Dashboard
- Dog Information Explorer

Users can navigate between pages using traditional controls or voice commands powered by the Annyang Speech Recognition library. The application also integrates multiple public APIs to display real-time content and interactive data. :contentReference[oaicite:0]{index=0} :contentReference[oaicite:1]{index=1}

---

## Features

### Home Page
- Displays a random inspirational quote using the ZenQuotes API
- Voice-controlled navigation
- Dynamic background color changes through speech commands
- Quick access buttons to other pages

### Stocks Dashboard
- Search stock tickers and visualize historical price data
- Interactive stock price charts using Chart.js
- Displays trending stocks from social media discussions
- Voice-controlled stock lookup
- Voice navigation between pages

### Dog Information Explorer
- Displays random dog images in an automatic slideshow
- Retrieves dog breed information from an external API
- Shows breed descriptions and lifespan information
- Voice-controlled breed lookup
- Voice navigation and color customization

---

## Technologies Used

### Languages
- HTML5
- CSS3
- JavaScript (ES6)

### Libraries
- Annyang.js (Speech Recognition)
- Chart.js
- Simple Slider

### APIs
- ZenQuotes API
- Polygon Stock API
- ApeWisdom API
- Dog CEO API
- Dog API

---

## Skills Demonstrated

- Front-End Web Development
- JavaScript DOM Manipulation
- REST API Integration
- Asynchronous Programming (Fetch API)
- Data Visualization
- Speech Recognition
- Responsive Design
- Event-Driven Programming


## Voice Commands

### Navigation Commands

```
Navigate to Home page
Navigate to Stocks page
Navigate to Dog page
```

### Utility Commands

```
Hello
Change the color to blue
Change the color to red
Change the color to green
```

### Stock Commands

```
Look up AAPL
Look up TSLA
Look up NVDA
```

### Dog Commands

```
Load dog breed Labrador Retriever
Load dog breed Golden Retriever
Load dog breed Husky
```

---

## Program Walk-Through

### Home Page

#### Application Landing Page
The user is greeted with a home page that provides navigation to the Stocks and Dog Explorer pages. A random motivational quote is automatically retrieved from the ZenQuotes API when the page loads.

<img src="https://i.imgur.com/imaVWre.png" width="80%" alt="Home Page"/>

<br />

#### Voice Navigation Controls
Users can enable speech recognition and navigate between pages using voice commands such as:

- Navigate to Dog page
- Navigate to Stocks page
- Change the color to blue


---

### Stocks Dashboard

#### Search for a Stock
Users enter a stock ticker symbol and select a time range to retrieve historical stock data.

<img src="https://i.imgur.com/GHwRPu1.png" width="80%" alt="Stock Search"/>

<br />

#### Generate Interactive Stock Chart
The application retrieves stock data from the Polygon API and visualizes closing prices using Chart.js.



#### View Trending Stocks
A dynamic table displays trending stocks gathered from ApeWisdom's social sentiment data.

<img src="https://i.imgur.com/vg2lNMh.png" width="80%" alt="Trending Stocks"/>

<br />

#### Voice-Controlled Stock Lookup
Users can search stocks using voice commands.

Example:

```
Look up AAPL
Look up TSLA
Look up NVDA
```


---

### Dog Information Explorer

#### Load Random Dog Images
The application retrieves random dog images from the Dog CEO API and displays them in an automatic slideshow.

<img src="https://i.imgur.com/yP04g29.jpeg" width="80%" alt="Dog Slider"/>

<br />

#### Browse Dog Breeds
The system retrieves breed information from the Dog API and dynamically creates breed buttons.


<br />

#### View Breed Information
Selecting a breed displays detailed information including:

- Breed Name
- Description
- Minimum Lifespan
- Maximum Lifespan

<img src="https://i.imgur.com/VGLhFaD.png" width="80%" alt="Breed Information"/>

<br />

#### Voice-Controlled Breed Search
Users can load breed information through speech recognition.

Example:

```
Load dog breed Husky
Load dog breed Golden Retriever
Load dog breed Labrador Retriever
```


---

### Voice Recognition System

The application uses the Annyang JavaScript library to provide speech recognition functionality across all pages.

Supported commands include:

```
Navigate to Home page
Navigate to Stocks page
Navigate to Dog page

Change the color to blue
Change the color to red

Look up AAPL

Load dog breed Husky
```


---

## Learning Outcomes

Through this project I gained experience with:

- Consuming and processing API data
- Building interactive web interfaces
- Implementing voice-controlled user interactions
- Creating dynamic charts and visualizations
- Managing asynchronous JavaScript operations
- Structuring multi-page web applications
- Integrating third-party libraries and services

---

## Future Improvements

- User authentication
- Dark mode support
- Mobile responsiveness improvements
- Expanded stock analytics
- Favorite dog breed saving functionality
- Additional voice commands
- Improved UI/UX design

