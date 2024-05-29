In this there are three types of xss attacks
1) DOM based: DOM-Based XSS occurs when the client-side script manipulates the DOM (Document Object Model) of the page using untrusted data, leading to the execution of malicious scripts.
2) Reflexive: Reflected XSS occurs when an attacker tricks a user into clicking a URL with a malicious script embedded in a parameter, which the server then reflects back to the user's browser without proper sanitization.
3) Stored based: Stored XSS happens when malicious input is permanently stored on the target server, such as in a database, and then displayed to users in a web page without proper sanitization.
