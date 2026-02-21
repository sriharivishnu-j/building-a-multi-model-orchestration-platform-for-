from kafka import KafkaProducer
import json

producer = KafkaProducer(bootstrap_servers='localhost:9092')
producer.send('ai-topic', json.dumps({'key': 'value'}).encode('utf-8'))
producer.flush()