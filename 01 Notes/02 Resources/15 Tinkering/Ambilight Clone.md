Copied from: https://wiki.faked.org/DIY_Ambilight
# DIY Ambilight

## Introduction

I've been using two Lightpack v1 modules connected via USB to my mediacenter box for years, but after getting a new TV, the old Lightpack setup wasn't big enough anymore. Pretty much all products that can be bought ready-to-use cost way too much so i deciced to build my own Ambilight clone.

Most solutions seem to go the way of using a HDMI splitter and a HDMI capture card connected to a Raspberry Pi, which interprets the grabbed video frames and controls the LEDs connected to one of its GPIO pins. This is not the way i wanted to go, first because that would require running another Raspberry Pi, and second because that's where it gets expensive if you want something that captures at 4K@60Hz and does not mess up the HDMI connection.

As one of the requirements was being able to use it with Kodi (on a Vero 4K+), Enigma (on a VU+ Uno 4K SE) and Android TV (on a Nvidia Shield TV Pro), controlling it via USB like the Lightpack does was also not an option, unless i wanted to move the USB cable between each device whenever i switch to it, so it needed to be something that can be controlled via network.

The very first search result for "ws2812b wifi" is [WLED](https://github.com/Aircoookie/WLED), so i started reading up on what it does and how to use it. The short version: it's a firmware for the wifi-capable ESP8266 board which can control addressable RGB LEDs (commonly referred to as "ws2812b"). And it has support for [Hyperion](https://github.com/hyperion-project/hyperion.ng), which is a software that can grab the display output of a video device and convert it to instructions for LED controllers.

### WLED

WLED seems to be around for less than two years (as of this writing) but it looks like it is very mature and has lots of features and supports many common protocols already. Using ESP8266 boards also makes it very easy to set up, as those boards cost <$5, can be bought pretty much anywhere and you only need a USB cable to upload new firmware (disclaimer: i've been using them for years, so i may be a bit biased regarding what would be considered "easy to use").

### Hyperion

Hyperion was also the software i have been running on my Kodi boxes, as it provided a very reliable video grabber and made it reasonably easy to set up the LED layout, which is something you have to do so Hyperion can covert the rectangular image from the video grabber into a command for the LEDs at the respective positions. (It basically looks at the video image, sees that e.g. the top left corner is red, so it refers to the LED layout you configured because it needs to know which LEDs in the LED strip are mapped to the top left corner, so that it can send a command to turn those red, too.)

## Hardware

For the first proof-of-concept build i just went with the setup shown in the [WLED Wiki](https://github.com/Aircoookie/WLED/wiki) and the hardware i had laying around: an ESP8266 Board, a TXS0108E Level Shifter and a short WS2813 LED Strip. That got wired up on a breadboard and connected to a 5V power supply (although the USB connection for uploading the firmware would probably have been sufficient for those few LEDs - just don't go full brightness), et voilà, we have blinkenlights. I was able to control the LEDs via the web interface, and the included effects looked like everything was working a intended, so i moved on to full build stage.

Two things i'd like to point out right away, because i only noticed them after the first prototype was finished and i connected the full 5 meter LED strip to it and had to integrate these fixes when i thought i was already done:

1. Yes, you should use a relay. Even when switched off, my ~300 LEDs draw ~0.25 amps, unless i completely cut the power with the a relay.
2. Yes, you should inject power also from the other end of the LED strip, as there will be a very noticeable drop in brightness along the LED strip the further you get away from the powered end.

  
So here's the bill of materials for my DIY Ambilight:

- ESP8266 Board [Amazon](https://www.amazon.de/dp/B0754N794H/) 3 for ~12€
- TXS0108E Level Shifter [Amazon](https://www.amazon.de/dp/B07NNRS8FS/) 6 for ~10€
- KY-019 Relay [Amazon](https://www.amazon.de/dp/B07CNR7K9B/) 3 for ~5€
- WS2813 LED Strip [Amazon](https://www.amazon.de/dp/B07DPJNMRP/) 5m for ~47€ (60LED/m, black, IP30)
- 5V 20A Power Supply [Amazon](https://www.amazon.de/dp/B07PQT2Q7L/) ~16€
- 4 pin LED Strip Connectors [Amazon](https://www.amazon.de/dp/B012UXUSP6/) ~5€
- 1000 uF Capacitor [Amazon](https://www.amazon.de/dp/B0734T3GJ9/) Set of 125 for ~9€
- 470 Ohm Resistor [Amazon](https://www.amazon.de/dp/B07PZ3M75Z/) Set of 500 for ~7€

Breaking the cost down into what was actually used for my build, i ended up at ~75€. This does not cover the cost of the wires, connectors, soldering tin and tools i used, let alone the time, but it should give you a general idea. ProTip: buy electronics in bulk. It's cheaper, and it's always good to have some ESP8266, level shifters and relays at home. ;-)

### Wiring

After wiring it up, i would have liked to see something like the image below, but real life is messy so i won't show any actual photos of the build:

[![ESP8266 WLED Steckplatine final.png](https://wiki.faked.org/images/thumb/7/7c/ESP8266_WLED_Steckplatine_final.png/300px-ESP8266_WLED_Steckplatine_final.png)](https://wiki.faked.org/File:ESP8266_WLED_Steckplatine_final.png)

  
Let's go over the connections so you'll understand what they do: the 5V and Ground from the power supply is split into two cables each, one for the electronics and one for the LED strip.

- The 5V connection from the power supply goes into "common" of the relay, and from "NO" ("normally open", as we want the power to be cut when the relay is off) to the 1000 uF capacitor.
- The ground connection from the power supply goes straight to the 1000 uF capacitor.
- From the 1000 uF capacitor, both connections go to the power injection cables of the LED strip, on both ends.

- The 5V for the electronics goes to "+" pin on the control side of the relay, the 5V pin of the ESP8266 and the "VCC B" reference input on the level shifter.
- The GND between all the electronics gets also connected, and is also wired up to the GND pin of the LED strip's plug.
- In short (no pun intended): all the electronics are on the same 5V and GND, except that the LED strip only gets GND (as it get its 5V from the relay).

- The level shifter gets an additional connection from the ESP8266's 3.3V pin to the low-voltage reference input.
- Pin OE (Output Enable) on the level shifter gets connected to the 3.3V input, too, otherwise the outputs won't output. Don't ask me how long it took me to figure that out.

- Pin D4 of the ESP8266 is the "data" pin for the LEDs, so that gets connected to any of the inputs on the level shifter (i used A6)
- Pin D6 of the ESP8266 is the "data" pin for the relay, and that also goes to any of the inputs on the level shifter (i used A5). Technically it's not really necessary to use the level shifter to control the relay, as it should also work with 3.3V, but as i have 8 channels on the level shifter, that additional connection is just added peace of mind.
- Pin B6 on the level shifter (the high-voltage output of input A6) goes to the 470 Ohms resistor.
- Pin B5 on the level shifter (the high-voltage output of input A5) gets connected to the signal pin on the relay.

- From the 470 Ohms resistor, split the cable into two connections: one for the main data pin of the LED strip connector, the other for the backup data pin (as the WS2813 has two data pins for redundancy).

- Again: GND from pretty much anywhere you like also goes to the GND pin of the LED strip connector.
- Again: The 5V input of the LED strip connector is NOT connected, otherwise it would bypass the relay and still draw power when the relay is off.

After doing some first tests with a dead-bug-style setup, i eventually decided to build my "production" unit a bit more reliable, with pin headers for easy replacement of components (and i had to do that a lot, because:) and JST connectors for the power connections. A word of advice here: if you're going to add connectors, for the sake of everything that's holy to you, make sure that if you have two plugs that carry 5V and GND, do absolutely make sure that they're both wired identically, with 5V on the same pins. I think in total i wasted 3x ESP8266, 2x level shifters and at least one relay because it didn't notice early enough that the polarity of my power plugs didn't match. Oh well, sacrifices to the magical smoke monster.

Anyways, so what it did is get a [perfboard](https://www.amazon.de/dp/B0728HZHTR/) of the appropriate size to fit all 3 board onto, soldered the female pin headers into place (with 1 row of holes in between for making connections), then used some thin wire to connect all the pins to match my schematic and added two screw terminals (one for electronics power, one for data/GND to the LED strip), replaced the pins on the relay to point straight down instead of to the side (but you could do it any way you see fit, just make sure it all fits somehow). The 1000 uF capacitor was added to the power plug for the LED strip (which is actually splitting up into another set of cables with a JST plug on one end for the "near end" power injection leads that have a JST socket now, and one half of a LED strip connector on the other end to inject power into the end of the LED strip that was cut off).

The 470 Ohms resistor was already present in the data/GND cable with the socket for the LED strip's plug, so i just connected that into the screw terminal, but for another build i would probably move that right behind the screw terminal onto the perfboard, so i can just use any cable without having to add the resistor there first.

And that's what it looked like in the end:

[![](https://wiki.faked.org/images/thumb/1/1f/ESP8266_WLED.jpg/300px-ESP8266_WLED.jpg)](https://wiki.faked.org/File:ESP8266_WLED.jpg)

ESP8266 + TXS0108E + KY-019

I did all of my testing using a bench power supply that provided exactly 5V, while also showing me how much current is being drawn, but when i moved the setup to the power supply i bought for this project, at least 2 of my ESP8266 died over night, and i was completely clueless why this was happening (as opposed to those that died with a puff of magic smoke, where it was rather obvious that something was wrong). While replacing the old relay that didn't quite latch anymore after the last visit of the magic smoke monster, i used my multimeter (Aneng AN8009 - very cheap, but quite good!) to measure the voltage that was being delivered through the relay, and noticed that the power supply's output voltage was at a rather high 5.4V instead of the 5.0V i was looking for. While genuine Wemos D1 Mini boards are hard to come by, and may tolerate voltages higher that 5V, i highly recommend using that multimeter to dial the output voltage of the power supply down (or up) to something as close as 5.0V as you can.

(At the time of this writing, the ESP8266 i'm currently using with the proper voltage hasn't died yet - but i'll update this page if it turns out to be something other than overvoltage.)

## Software

Now that the hard part of the build is done, let's go over the software i'm using:

- [WLED](https://github.com/Aircoookie/WLED)
- [Hyperion](https://github.com/hyperion-project/hyperion.ng)
- [Hyperion Android Grabber](https://play.google.com/store/apps/details?id=com.abrenoch.hyperiongrabber&hl=en&gl=US)
- [Enigmalight](https://www.boxpirates.to/index.php?thread/206406-plugin-enigmalight-ambilight-f%C3%BCr-enigma2-receiver-oe1-6-oe2-0-oe2-2-oe2-5-dreamb/)

The star of the show is WLED. It receives data from Hyperion on my OSMC Vero 4K+ (my mediacenter running Kodi), from Hyperion Android Grabber on my Nvidia Shield TV Pro (which i use to stream games from my PC) and from Enigmalight on my VU+ Uno 4K SE (basically "just" cable television, on steroids).

### WLED

As WLED doesn't allow exporting its config (yet), here are the most important settings i changed from the stock setup:

- Wifi Setup: SSID & Key already set in the image i uploaded, so nothing to change here for me, but have a look at the [WLED wiki](https://github.com/Aircoookie/WLED/wiki) how to connect to a stock image.
- LED Preferences: LED count = 298, Enable automatic brightness limiter = Off
- Sync Interface: Force max brightness = Off (this is important so that data from Hyperion can switch the relay on if it was off)

### Hyperion

As Hyperion.NG is not yet available as a package for OSMC, i used the excellent [hyperion-vero4k](https://github.com/hissingshark/hyperion-vero4k) script to build Hyperion.NG on my Vero 4K+ (using the current master branch, not a release). This makes the initial installation a breeze and is easily reproduceable, leaving plenty of time for the more challenging part: setting Hyperion up correctly.

For Hyperion, the most important settings are:

- LED Hardware / LED Controller
    - Controller Type: udpraw
    - Hardware LED count: 298
    - Target IP: <the IP of your ESP8266>
    - Target Port: 19446
- LED Hardware / LED Layout
    - Top: 100
    - Bottom: 100 (should be the same a Top)
    - Left: 56
    - Right: 56
    - Gap Length: 14
    - Gap Position: 199 (position, not count - so it starts from 0, not 1 - and is actually the 200th LED)
    - Input Position: 199
    - Reverse Direction: On

Your exact layout depends on your number of LEDs and how you attach them, but this should give you a general idea of how to configure the layout. And always remember: this layout is viewed from the front of your TV!

Feel free to use a ruler or similar to measure the left and right bottom parts length on your computer screen when configuring the exact gap/input position of the layout - i know i did! ;-)

As i'm running this on a Vero 4K+, i'm using the AMLogic grabber with a width and height of 100 and 56 (matching my LED layout). I have also written some short Python scripts to enable and disable the "platform capture" feature whenever Kodi wakes up or goes to sleep, so that Hyperion doesn't block WLED by sending LED commands even though Kodi is not actually in use, and the relay can switch the LEDs off.

**.kodi/userdata/wake.py**

```
import requests

hyperion_url = 'http://127.0.0.1:8090/json-rpc'
hyperion_data = '{"command":"componentstate","componentstate":{"component":"GRABBER","state":true}}'
requests.post(hyperion_url, hyperion_data)
```

**.kodi/userdata/standby.py**

```
import requests

hyperion_url = 'http://127.0.0.1:8090/json-rpc'
hyperion_data = '{"command":"componentstate","componentstate":{"component":"GRABBER","state":false}}'
requests.post(hyperion_url, hyperion_data)
```

Yes, they're not pretty and nearly identical, but honestly: i don't care as long as they work. (PS: Yes, i know that Python can use JSON natively, but Hyperion doesn't like real JSON from Python because of the **exact** true/false values that are required, and Python complains if i use those exact values. So strings it is!)

### Hyperion Android Grabber

The Hyperion Android Grabber does pretty much what its name implies: it grabs the screen output of Android and sends it to Hyperion.

Configuration should be fairly simple, just make sure to point it to your Hyperion IP and port 19445, configure the same number of vertical and horizontal LEDs as in Hyperion, but one important settings is the **priority**: set this to something like 150 (i think the default is 50), otherwise it won't trigger the output.

### Enigmalight

Mostly working, but still not perfect. Also not that easy to even get installed. To be continued...