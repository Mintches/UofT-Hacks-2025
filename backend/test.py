# from pymongo import MongoClient, errors

# # Example with synchronous client configuration for reference
# client = MongoClient("mongodb://localhost:27017", socketTimeoutMS=5000, connectTimeoutMS=5000)

# Ensure you're using an asynchronous client from Motor with similar timeout settings if needed
import motor.motor_asyncio

client = motor.motor_asyncio.AsyncIOMotorClient("mongodb://localhost:27017")
database = client["test_db"]
collection = database["test_collection"]

async def test_insert():
    item = {"user_id": "test_user", "qNum": 1, "ans": 5}
    result = await collection.insert_one(item)
    print(f"Inserted document: {result.inserted_id}")

import asyncio
asyncio.run(test_insert())
