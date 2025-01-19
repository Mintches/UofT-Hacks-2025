from fastapi import FastAPI, HTTPException
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel
from bson import ObjectId
import os

from dotenv import load_dotenv
load_dotenv()

app = FastAPI()

# MongoDB connection
MONGO_URI = os.getenv("MONGO_URI")

client = AsyncIOMotorClient(MONGO_URI)
database = client["P"]
collection = database["C"]
print(collection)

# Root endpoint
@app.get("/")
async def read_root():
    return {"message": "Welcome to your FastAPI application!"}

class Item(BaseModel):
    user_id: str
    qNum: int # question number
    ans: int # answer number (1 = strongly disagree, 5 = strongly agree)

class ItemInDB(Item):
    id: str # userId

@app.post("/items/", response_model=ItemInDB)
async def create_item(item: Item):
    item_dict = item.dict()
    result = await collection.insert_one(item_dict)
    item_dict["_id"] = str(result.inserted_id)
    return ItemInDB(id=item_dict["_id"], **item_dict)

@app.get("/items/{item_id}", response_model=ItemInDB)
async def read_item(item_id: str):
    item = await collection.find_one({"_id": ObjectId(item_id)})
    if item is None:
        raise HTTPException(status_code=404, detail="Item not found")
    item["_id"] = str(item["_id"])
    return ItemInDB(id=item["_id"], **item)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
