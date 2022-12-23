from sanic import Sanic
from sanic.response import json
app = Sanic(name="blogger")


# @app.route('/<path:path>')
@app.route('/')
async def index(request, path=""):
    return json({'hello': path})
