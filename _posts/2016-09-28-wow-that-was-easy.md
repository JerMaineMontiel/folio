---
title: Wow, that was easy.
date: '2016-09-28 09:58:00'
layout: post
permalink: "/posts/:year/:month/:title"
summary: I got the server configured and Ghost up and running in about two days. Could've
  been a day, really. Couple things, though...
tags:
- nginx
- apache
- ghost
- digitalocean
---
So! My server is configured and running, waiting for me to throw something on it. Using the [DigitalOcean tutorial](https://www.digitalocean.com/community/tutorials/how-to-create-a-blog-with-ghost-and-nginx-on-ubuntu-14-04) on creating a blog with Ghost and Nginx, the process was pretty much straightforward. Just following the steps I had Ghost up and running in a matter of minutes. 

## Small problem: Web servers.

Where my hangups came in were trying to get Nginx to work like it should. [Nginx](http://nginx.com) is a web server. (I realize using "server" to describe what it is might be a bit confusing since, well, aren't I _on_ a server... on the web? But web servers are what actually do the _serving_: it makes it so that the box -- the physical server space where the files are hosted -- you're connecting to knows what it is you're looking for when you type that domain in the address bar. It's why you have to go to a domain provider and link an IP address to your domain; the web server then routes you exactly to the place where the files are on the box based on the domain in the request. _MAGIC_.) [Apache](http://apache.org) is also a web server. DigitalOcean's servers are already configured with Apache, since it's the one used more widely. 

The trick is that, while you can have two web servers on the same box, they can't be listening on the same port. The default listening port, where the requests will come in, is 80. Since Apache was already there and running, listening on port 80, Nginx would complain when I tried to run it -- "port already in use" is what you'd see looking at the error logs. So there's two things I found that can be done: 1) Apache's already there, so reverse proxy (basically fowarding the request) to your other web servers. I didn't look too much into this but I'm gonna include [this link from AskUbuntu](http://askubuntu.com/questions/347721/host-two-separate-web-servers-on-the-same-ip). 2) Switch 'em out: migrate the settings from Apache to Nginx, making Nginx your main web server. [That's what I did](https://www.digitalocean.com/community/tutorials/how-to-migrate-from-an-apache-web-server-to-nginx-on-an-ubuntu-vps). (If you still want to use Apache after this you can [reverse proxy](https://www.digitalocean.com/community/tutorials/how-to-configure-nginx-as-a-web-server-and-reverse-proxy-for-apache-on-one-ubuntu-16-04-server) here too.)  I didn't _have_ to switch it over, but going through that I have a better understanding of web servers and how they automagically give us our meme generators. Plus, Nginx is pretty cool. The configuration structure for setting up the request routing is very straightforward, and I'm gonna test it out further and migrate another site to my box. 

## Quick tip on Ghost in subdirectories

Another tip if you're using Ghost: the tutorial assumed that the blog was gonna be in the root directory of your site. Mine won't, so be sure that Ghost knows where it's at _and_ you're routing the request to the right directory. [Here's a post on Ghost for Beginners](https://www.ghostforbeginners.com/how-to-install-ghost-in-a-subdirectory/) to help you out.

And that was about it. Mostly painless; in hindsight, anyway. There may be other things I'll have to configure, like SSL (Secure Sockets Layer, which encrypts the traffic from browser to web server), so I'll detail that when I do. As of now, we're gonna start the experience design process for the site. I'll even have pictures next time!