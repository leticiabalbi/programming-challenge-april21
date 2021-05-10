# Programming Challenge

## Description

This challenge was developed in the technical testing phase of the selection process for the developer vacancy at Sidia. It consists of an application that lists movies, from the [MovieLens](https://grouplens.org/datasets/movielens/ ) dataset,  by year, genre, and by the number of the best-rated movies in descending order. The project is divided into three parts: Data preparation, Back-end and Front-end.

## Data preparation

### Install the following dependencies:

- [Python](https://www.python.org/)
- [Pandas](https://pandas.pydata.org/)                       `pip install pandas`
- [MongoDB](https://www.mongodb.com/) driver          `pip install pymongo[srv]`

**Python Pandas Library** provides extremely streamlined forms of data representation, which helps to understand them better. Besides, it provides a huge set of commands and features which are used easily to perform various tasks in a large amount of data efficiently and help to shorten the procedure of handling data. Thus, we will use **Pandas** to process our data.

Using a database management system is faster, more secure, powerful, and easier than directly managing data yourself. Thus, we will use the non-relational, open-source document database **MongoDB** to store our processed data. The document data model is a powerful way to store and retrieve data that allows developers to evolve quickly and move fast.

### Steps to run

1. Copy or move `movies.csv` and `ratings.csv` files from [MovieLens](https://grouplens.org/datasets/movielens/ ) to the `/data_preparation` directory;
2. Still in the same directory, execute `python data_processing.py` command. It will run our data processing program and create a new .csv file of our processed data;
3. Then, execute `python import_csv_to_mongo.py` command. It will run a program that creates our database on MongoDB and stores our processed data there.

## Back-end  and Front-end

### Technology stack:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Express.js](https://expressjs.com/pt-br/)
- [Mongoose](https://mongoosejs.com/)
- [EJS]()

**Node.js** is lightweight, efficient and the development process is greatly accelerated by the sharing of code between the front-end and the back-end. With the help of **Express.js**, we can easily build different types of web applications in a short period of time. **Mongoose** makes working with MongoDB easier and is enough for our project since we have a small database and we are working with basic Mongo operations. Lastly, **EJS** is very easy to integrate with Node.js and we can easily add our js logic in HTML tags.

## Steps to run the application

### Install the following software:

- [npm](https://www.npmjs.com/)
- [Node.js](https://nodejs.org/en/)

### Steps

1. Go to the project root directory (if you are on `/data_preparation`  directory just execute `cd ..` to return to project root directory);
2. Execute `npm install` to install all the required dependencies;
3. Then, execute `npm start devStart`;
4. Open your browser and access `http://localhost:3000/movies`.

### Usage

- Endpoint: `http://localhost:3000/movies`
- GET movies by genre: `http://localhost:3000/movies?genre={genre}`
- GET movies by year: `http://localhost:3000/movies?year={year}`
- GET movies by a number K: `http://localhost:3000/movies?topK={topK}`
- GET movies by genre and year: `http://localhost:3000/movies?genre={genre}&year={year}`
- GET movies by genre and a number of K: `http://localhost:3000/movies?genre={genre}&topK={topK}`
- GET movies by year and a number of K: `http://localhost:3000/movies?year={year}&topK={topK}`
- GET movies by year, genre and a number of K: `http://localhost:3000/movies?genre={genre}&year={year}&topK={topK}`

#### Observations

If the value of some of the query parameters is null or has not been defined, then its value will be the default value established during the API development. The default value for each parameter is as follows:

- `genre`: it will consider all movies genres;
- `year`: it will consider all movies years;
- `topK`: it will consider just the top 50 rated movies.

## Screenshots

![](/screenshots/image1.png)

![](/screenshots/image2.png)





