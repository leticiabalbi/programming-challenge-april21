import pandas as pd

#Read csv files
df_movies = pd.read_csv("movies.csv")
df_ratings = pd.read_csv("ratings.csv", usecols = ["movieId", "rating"])

#Extract year from movie title and add it in a 'year' column
df_movies['year'] = df_movies['title'].str.extract('.*\((.*)\).*', expand=True)

#Create a dataframe with average ratings for each movieId
avg_ratings = df_ratings.groupby('movieId', as_index=False).mean()

#Merge df_movies and avg_ratings
df_movies = df_movies.merge(avg_ratings, on='movieId', how='inner')

#Remove movieId columns from movies table
df_movies = df_movies.drop(columns=['movieId'])

#Write df_movies to a csv file
df_movies.to_csv(r'processed_movies.csv', index = False)
