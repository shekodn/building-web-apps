Exercise #1:
Modify the server-side code so that it can return a time (in milliseconds)
that represents how long the user has logged in.

In particular, you need to modify index.js to handle the Ajax request
for the time, and modify js/auth.js to record the login time when a user
successfully logged in to the system.


Exercise #2:

By default the session's cookie is set to last for 1 minute. 
That means, after logged in for more than 1 minute, the user should not
be able to click the link to access the /restricted/* images.

With the current implementation, can you figure out a way to
cheat the system such that even logged in for more than 1 minute, you
can still accdess the /restricted/* images?

Exercse #3:
Modify the server-side code to enforce the 1 minute login period.

