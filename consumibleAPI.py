import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from pylab import *
from sklearn.model_selection import train_test_split

Dataset = pd.read_csv('.\\Datasets\\DatasetFinal.csv', encoding="UTF-8")

train, test = train_test_split(Dataset, test_size = 0.3)

datosTrainX = train['texto']
datosTrainY = train['clase']

datosTestX = test ['texto']
datosTestY = test ['clase']

vectorizer = CountVectorizer()
counts = vectorizer.fit_transform(datosTrainX.values)
classifier = MultinomialNB()
targets = datosTrainY.values

classifier.fit(counts, targets)

example_counts = vectorizer.transform(datosTestX)

print(classifier.score(example_counts,datosTestY))

examples = [""]
example_counts = vectorizer.transform(examples)
predictions = classifier.predict(example_counts)
print(predictions)