import pandas as pd
from pymongo import MongoClient
import json

#Connect to moviesCluster from MongoDB
client = MongoClient("mongodb+srv://user01:movies@moviescluster.e22f8.mongodb.net/programming_challenge?retryWrites=true&w=majority")

db = client['programming_challenge']	#programming_challenge database
coll = db['movies']						# movies collection

#Read processed data csv file and add it in movies collection
data = pd.read_csv("processed_movies.csv")
json_data = json.loads(data.to_json(orient = 'records'))
coll.remove()
coll.insert(json_data)


	

