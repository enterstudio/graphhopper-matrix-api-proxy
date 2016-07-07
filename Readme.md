## GraphHopper Matrix API Proxy

This server proxies the call from GraphHopper to Google Maps

### License

Apache License 2.0

### Installation

```bash
git clone https://github.com/karussell/graphhopper-matrix-api-proxy.git
cd graphhopper-matrix-api-proxy
# now set your API key in app.js ... api_key="<YOUR API KEY>";
npm install
node app.js
```

### Try

```bash
curl "http://localhost:3000/graphhopper_matrix?origins=40.6655101,-73.89188969999998&destinations=40.6905615%2C-73.9976592|40.6905615%2C-73.9976592
```
