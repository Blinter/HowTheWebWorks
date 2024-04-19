# How the Web Works
---
# Part 1

## Solidify Terminology

`What is HTTP?`
Hypertext Transfer Protocol is a protocol used for exchanging data on the World Wide Web. It is a ubiquitous standard which is primarily used for communication between a client (i.e. Web Browser) and a server (i.e. Instance of a server run in a datacenter.)

`What is a URL?`
Uniform Resource Locator is an address which points to a specific resource on the internet. It's used by browsers to indicate to a server what response it would like to receive. URL usually consists of a 'Scheme' such as 'http' or 'https', a 'Domain Name' which is a registered name, a 'Port' (an unsigned 16-bit integer between 1 and 65535). Optionally a URL may include one or more 'Parameters' which can be a query string, or an 'Anchor', which is a specification for a client's web browser to set the current page's to focus on it.
Example:
> Scheme + "://" + Domain Name + ":" + Port + "?" Parameters + "#" +  Anchor

`What is DNS?`
Domain Name System is a hierarchical and decentralized system for names on the internet. DNS works to resolve names to specific IP addresses or addresses on the internet, adding a layer of simplicity when it comes to specific addresses that point to a unique resource over the internet.
DNS can also be used in different networks such as the Intranet, to provide localized resources to a private or localized network.

`What is a query string?`
A Query string is used to transmit other data to a server in a normal request using HTTP. It can start with either a "Forward Slash" (/) or a "Question Mark" (?) before additional parameters. The forward slash prefix may not be compatible with all implementations attempting to pass parameters.

After the prefix, data is generally transmitted through a "key-value" pair system, where delimiters in values such as `:/?#[]@!$%'()*+,;=` are not used in any of the key or value data attributes. Applications must convert these symbols to other values in order to be processed correctly. Multiple parameters are separated by an ampersand or the & symbol.

A server will be able to interpret these "key-values" for further processing.

`What are two HTTP verbs and how are they different?`

Two HTTP verbs are POST and GET.

**POST** - is generally used as a reverse of GET, in which a GET HTTP request is used to serve data to the client, when initiated by a client. In POST, data is generally being served to the server from the client. There are side effects, and the client sends data in the form of parameters to the server. 
One example for where POST is used is when the client 'Posts' to the server the data that a user inputs into the form.

**GET** - is used to retrieve data from server to a client. GET is normally used where nothing is updated or changed from the request, where GET is used to request data from servers only. Parameters may still be sent to the server but the server interprets this to provide different data to the client without side effect. 
One example where parameters are used in GET is for search queries.

`What is an HTTP request?`
An HTTP request is used by a client can communicate to a server. An HTTP request contains a method such as GET or POST. It dictates whether a client will perform an action or request a data to a server. A request contains a header, containing a method, request-target, and an HTTP version. Afterwards, this request usually is followed by a response by the server.

`What is an HTTP response?`
An HTTP response is the result of an HTTP request, providing a reply to a request. This usually is a response that contains a status code (three digit code, from 100-599), and an HTTP version. (such as HTTP/1.1 200 OK) It also contains response headers and a body. The headers may contain data for the client to help interpret the data: like Content-Type or Cache-Control. It also contains a 'Body', which would be the main content as a result of the previous request.


`What is an HTTP header? Give a couple examples of request and response headers you have seen.`
Header response headers may include:
    + Hostname
    + Date
    + Language Preferences
    + Cookies previously received
    + Compression/Encoding Options
    + Accepted formats for response
    + Cache Control option
*HTTP Requests*: HTTP GET/POST
*HTTP Responses*: 200 OK, 404 Not Found, 500 Server Error.

*A full and complete list of HTTP Headers may also be analyzed by visiting this the MDN Web Docs Documentation at https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers*

`What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?`
+ First the web browser must resolve 'somesite.com' by querying a respective DNS server for the IP address.

+ The client must then take this data and create an HTTP GET request to send to a server, containing the path '/some/page.html' and other criteria such as the hostname that was used 'somesite.com'. Other details are also compiled into the header such as language preference, and acceptable response formats.

+ Based on the schema (http), it will use the HTTP protocol. The web browser then initiates a connection to the IP address which was resolved by the DNS server it queried, then send the request headers using the HTTP protocol.
+ The server accepts the connection and then receives the HTTP request. It processes this data and creates an HTTP response, containing a Response Code, Response Header, and Response Body. The server then transmits this block of data back to the client using the HTTP connection that was created by the client's on the web browser.

+ The web browser receives this HTTP Response and interprets this data by verifying the status code, interpreting the header and body. The web browser further send more HTTP Requests to the server depending on other resources required.

This intercommunication cycle is the normal cycle of operations when browsing the internet using the HTTP protocol.

---
# Part 2

## Practice Tools

1. Using ***curl***, make a ***GET*** request to the *icanhazdadjoke.com* API to find all jokes involving the word “pirate”

```bash
curl -H "Accept: application/json" "https://icanhazdadjoke.com/search?term=pirate"
```
Result
```JSON
{"current_page":1,"limit":20,"next_page":1,"previous_page":1,"results":[{"id":"QuscibaMClb","joke":"What does a pirate pay for his corn? A buccaneer!"},{"id":"2gii3LeN7Ed","joke":"Why couldn't the kid see the pirate movie? Because it was rated arrr!"},{"id":"SvzIBAQS0Dd","joke":"What did the pirate say on his 80th birthday? Aye Matey!"},{"id":"SnOf2gqjiqc","joke":"Why are pirates called pirates? Because they arrr!"},{"id":"exXSCtkOKe","joke":"Why do pirates not know the alphabet? They always get stuck at \"C\"."}],"search_term":"pirate","status":200,"total_jokes":5,"total_pages":1}
```
---
2. Use ***dig*** to find what the IP address is for *icanhazdadjoke.com*
```bash
dig icanhazdadjoke.com
```
Result
```
;; ANSWER SECTION:
icanhazdadjoke.com.     46      IN      A       104.21.66.15
icanhazdadjoke.com.     46      IN      A       172.67.198.173
```
---
3. Make a simple web page and serve it using ***python3 -m http.server***. Visit the page in a browser.

```
cd ~/test;
python3 -m http.server;
```
Result:
```
x.x.x.x - - [19/Apr/2024 02:08:47] "GET / HTTP/1.1" 200 -
```