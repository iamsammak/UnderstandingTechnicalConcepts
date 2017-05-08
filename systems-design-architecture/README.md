# Systems Design/Architecture


[HTTP][http]

[TCP][tcp] and [UDP][udp]

#### What is the difference between HTTP and TCP?

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


<!-- Directory Links -->
[http]: ./http.md
[tcp]: ./tcp_and_udp.md
[udp]: ./tcp_and_udp.md
