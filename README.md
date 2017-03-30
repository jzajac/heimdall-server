# heimdall-server

This is a demo application that accepts a JSON object with quote details. 

## Request

```javascript
{
    "type": "auto",
    "city": "Dover",
    "state": "NH",
    "postal": "03820"   
}
```

## Response

```javascript
{
    "refNo": "Q12345",
    "price": 123.45
}
```