# backend series project
This is series in which we are going to built backend project by using javascript
-[Model link](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)


## HTTP CRASH COURSE

HTTP - Hyper text transfer protocol
url - uniformed resource locator
urn - uniformed resource name
uri - uniformed resource identifier

##what are http headers
metadata ---> key-value sent along with the request and response
-> caching, authentication, manage state
      x-prefer --> 2012(x-deprecated)

+ Request headers ---> from client
+ Response headers ---> from server
+ Representation headers  --> encoding/compression
+ payload Headers        ---> data


# MOST COMMON HEADERS

+ ACCEPT: application/json
+ user-agent
+ authorization
+ content - type
+ cookie
+ cache - control


# cors
+ Access-control-allow-origin
+ access-control-allow-credentials
+ access-control-allow-method

# security
+ cross-origin-embedder-policy
+ cross-origin-opener-policy
+ content-security-policy
+ x-xcs-protection

All the above are comes under header and all this are defined by the company to there standard policies they apply to that



# Http methods
basic set of operations that can be used to interact with server

+ Get : retrieve a resource
+ head : no message body(response headers only)
+ options : what operations are available
+ trace : loopback test (get same data)
+ delete : remove a resource
+ put : replace a resource
+ post : interact with resource (mostly add)
+ patch : change part of a resource

........etc http methods we have


# http status code

+ Informational responses (100 – 199)
+ Successful responses (200 – 299)
+ Redirection messages (300 – 399)
+ Client error responses (400 – 499)
+ Server error responses (500 – 599)

