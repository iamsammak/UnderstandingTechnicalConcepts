# Communication

<p align="center">
  <img src="http://i.imgur.com/5KeocQs.jpg">
  <br/>
  <i><a href=http://www.escotal.com/osilayer.html>Source: OSI 7 layer model</a></i>
</p>

## [Hypertext transfer protocol (HTTP)](#http)

Below info copied from donnemartin's [system design primer](https://github.com/donnemartin/system-design-primer#hypertext-transfer-protocol-http)


### What is HTTP?

HTTP is a method for encoding and transporting data between a client and a server.
It is a request/response protocol:
clients issue requests and servers issue responses with relevant content and completion status info about the request
HTTP is self-contained, allowing requests and responses to flow through many intermediate routers and servers that perform load balancing, caching, encryption, and compression.

A basic HTTP request consists of a verb (method) and a resource (endpoint). Below are common HTTP verbs:

| Verb | Description | Idempotent* | Safe | Cacheable |
|---|---|---|---|---|
| GET | Reads a resource | Yes | Yes | Yes |
| POST | Creates a resource or trigger a process that handles data | No | No | Yes if response contains freshness info |
| PUT | Creates or replace a resource | Yes | No | No |
| PATCH | Partially updates a resource | No | No | Yes if response contains freshness info |
| DELETE | Deletes a resource | Yes | No | No |

\*Can be called many times without different outcomes.

HTTP is an application layer protocol relying on lower-level protocols such as TCP and UDP

#### Source(s) and further reading: HTTP

* [What is HTTP?](https://www.nginx.com/resources/glossary/http/)
* [Difference between HTTP and TCP](https://www.quora.com/What-is-the-difference-between-HTTP-protocol-and-TCP-protocol)
* [Difference between PUT and PATCH](https://laracasts.com/discuss/channels/general-discussion/whats-the-differences-between-put-and-patch?page=1)


### What is the difference between HTTP and TCP?
Answer from [Daniel Miller](https://www.quora.com/What-is-the-difference-between-HTTP-protocol-and-TCP-protocol)

##### The short
TCP is a transport-layer protocol, and HTTP is an application-layer protocol that runs over TCP

#### The long
Idea one needs to understand: a layered networking model
  - There are different protocols that let a computer talk at different distances and different layers of abstraction

Starting from the bottom going up.

##### Physical layer
This is where electrocal signals or light pulses or radio waves actually transmit information from place to place.
The physical layer doesn't really have protocols, but instead has standards for voltages, frequencies, and other physical properties. You can transmit information directly this way, but you need a lot of power or dedicated line, and without higher layers you won't be able to share bandwidth.

##### Link layer
Covers communication with devices that share a physical communications medium. Here, protocols like Ethernet, 802.11a/b/g/n, and Token Ring specify how to handle multiple concurrent accesses to the physical medium and how to direct traffic to one device instead of another. In a typical home network, this is how your computer talks to your home "router."

##### Network layer
In most cases, this is dominated by Internet Protocol (IP). The magic of Internet, you get to talk to a computer halfway around the world, without needing to know where it is. Routers handle directing your traffic from your local network to the network where the other computer lives, where its own link layer handles getting the packets to the right computer.

We can talk to a computer somewhere around the world, but that computer is running lots of different programs. How should it know which one to deliver your message to?
The transport layer takes care of this, usually with port numbers. The two most popular transport layer protocols are TCP and UDP.
TCP does a lot of interesting things to smooth over the rough spots of network-layer packet-switched communication like reordering packets, retransmitting lost packets, etc.
UDP is more unreliable, but has less overhead.

##### Application layer
So we've connected your browser to the web server software on the other end, but how does the server know what page you want? How can you post a question or an answer? These are things that application-layer protocols handle. For web traffic, this is the HyperText Transfer Protocol (HTTP). There are thousands of application-layer protocols: SMTP, IMAP, and POP3 for email; XMPP, IRC, ICQ for chat; Telnet, SSH, RDP for remote administration; etc.


## TCP and UDP

Below info copied from donnemartin's [system design primer](https://github.com/donnemartin/system-design-primer#transmission-control-protocol-tcp)

## [Transmission control protocol (TCP)](#tcp)

<p align="center">
  <img src="http://i.imgur.com/JdAsdvG.jpg">
  <br/>
  <i><a href=http://www.wildbunny.co.uk/blog/2012/10/09/how-to-make-a-multi-player-game-part-1/>Source: How to make a multiplayer game</a></i>
</p>

TCP is a connection-oriented protocol over an [IP network](https://en.wikipedia.org/wiki/Internet_Protocol).  Connection is established and terminated using a [handshake](https://en.wikipedia.org/wiki/Handshaking).  All packets sent are guaranteed to reach the destination in the original order and without corruption through:

* Sequence numbers and [checksum fields](https://en.wikipedia.org/wiki/Transmission_Control_Protocol#Checksum_computation) for each packet
* [Acknowledgement](https://en.wikipedia.org/wiki/Acknowledgement_(data_networks)) packets and automatic retransmission

If the sender does not receive a correct response, it will resend the packets.  If there are multiple timeouts, the connection is dropped.  TCP also implements [flow control](https://en.wikipedia.org/wiki/Flow_control_(data)) and [congestion control](https://en.wikipedia.org/wiki/Network_congestion#Congestion_control).  These guarantees cause delays and generally result in less efficient transmission than UDP.

To ensure high throughput, web servers can keep a large number of TCP connections open, resulting in high memory usage.  It can be expensive to have a large number of open connections between web server threads and say, a [memcached](#memcached) server.  [Connection pooling](https://en.wikipedia.org/wiki/Connection_pool) can help in addition to switching to UDP where applicable.

TCP is useful for applications that require high reliability but are less time critical.  Some examples include web servers, database info, SMTP, FTP, and SSH.

Use TCP over UDP when:

* You need all of the data to arrive intact
* You want to automatically make a best estimate use of the network throughput

## [User datagram protocol (UDP)](#udp)

<p align="center">
  <img src="http://i.imgur.com/yzDrJtA.jpg">
  <br/>
  <i><a href=http://www.wildbunny.co.uk/blog/2012/10/09/how-to-make-a-multi-player-game-part-1/>Source: How to make a multiplayer game</a></i>
</p>

UDP is connectionless.  Datagrams (analogous to packets) are guaranteed only at the datagram level.  Datagrams might reach their destination out of order or not at all.  UDP does not support congestion control.  Without the guarantees that TCP support, UDP is generally more efficient.

UDP can broadcast, sending datagrams to all devices on the subnet.  This is useful with [DHCP](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol) because the client has not yet received an IP address, thus preventing a way for TCP to stream without the IP address.

UDP is less reliable but works well in real time use cases such as VoIP, video chat, streaming, and realtime multiplayer games.

Use UDP over TCP when:

* You need the lowest latency
* Late data is worse than loss of data
* You want to implement your own error correction

#### Source(s) and further reading: TCP and UDP

* [Networking for game programming](http://gafferongames.com/networking-for-game-programmers/udp-vs-tcp/)
* [Key differences between TCP and UDP protocols](http://www.cyberciti.biz/faq/key-differences-between-tcp-and-udp-protocols/)
* [Difference between TCP and UDP](http://stackoverflow.com/questions/5970383/difference-between-tcp-and-udp)
* [Transmission control protocol](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)
* [User datagram protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol)
* [Scaling memcache at Facebook](http://www.cs.bu.edu/~jappavoo/jappavoo.github.com/451/papers/memcache-fb.pdf)
