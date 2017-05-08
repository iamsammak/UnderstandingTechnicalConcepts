Below info copied from donnemartin's [system design primer](https://github.com/donnemartin/system-design-primer#transmission-control-protocol-tcp)

### Transmission control protocol (TCP)

<p align="center">
  <img src="http://i.imgur.com/JdAsdvG.jpg">
  <br/>
  <i><a href=http://www.wildbunny.co.uk/blog/2012/10/09/how-to-make-a-multi-player-game-part-1/>Source: How to make a multiplayer game</a></i>
</p>

#### Quick and Dirty

TCP manages the sending and receiving of all your data as packets. Think of it like a guaranteed mail service. Example: when you request a song on your device. Spotify sends the song broken up into many packets. When your packets arrive, TCP does a full inventory and sends back acknowledgements of each packet received. If all packets are there, TCP signs for your delivery and you're done. If TCP finds some packets are missing, it won't sing. Otherwise, your song wouldn't song as good or portions of the song could be missing. For each missing or incomplete packet, Spotify will resend them. Once TCP verifies the delivery of many packets for that one song request, your song will play.

TCP + Router system is scalable
  - the more routers you add, because of fault tolerance and redundancy, the more reliable the Internet becomes
  - you can grow and scale the internet without interrupting anyone using it

#### The long

TCP is a connection-oriented protocol over an [IP network](https://en.wikipedia.org/wiki/Internet_Protocol).  Connection is established and terminated using a [handshake](https://en.wikipedia.org/wiki/Handshaking).  All packets sent are guaranteed to reach the destination in the original order and without corruption through:

* Sequence numbers and [checksum fields](https://en.wikipedia.org/wiki/Transmission_Control_Protocol#Checksum_computation) for each packet
* [Acknowledgement](https://en.wikipedia.org/wiki/Acknowledgement_(data_networks)) packets and automatic retransmission

If the sender does not receive a correct response, it will resend the packets.  If there are multiple timeouts, the connection is dropped.  TCP also implements [flow control](https://en.wikipedia.org/wiki/Flow_control_(data)) and [congestion control](https://en.wikipedia.org/wiki/Network_congestion#Congestion_control).  These guarantees cause delays and generally result in less efficient transmission than UDP.

To ensure high throughput, web servers can keep a large number of TCP connections open, resulting in high memory usage.  It can be expensive to have a large number of open connections between web server threads and say, a [memcached](#memcached) server.  [Connection pooling](https://en.wikipedia.org/wiki/Connection_pool) can help in addition to switching to UDP where applicable.

TCP is useful for applications that require high reliability but are less time critical.  Some examples include web servers, database info, SMTP, FTP, and SSH.

Use TCP over UDP when:

* You need all of the data to arrive intact
* You want to automatically make a best estimate use of the network throughput
