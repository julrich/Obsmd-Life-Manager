# Projects

```dataview
TABLE
	target AS "Target",
	goal AS "Goal",
	deadline as "Deadline",
	complete as "Complete"
FROM "02 Action/02 Projects"
WHERE Area = [[Mechanical Keyboards]]
SORT complete DESCENDING
```
# Hardware

## Keyboard

- Awesome Keyboards: https://github.com/qmk/keyboard_awesome
- Yet another keyboard post, or, introducing ErgoNICE: https://val.packett.cool/blog/ergonice/

## Split Keyboards

- Awesome Split Keyboards: https://github.com/diimdeep/awesome-split-keyboards

## Switches

- Kailh Switches Guide: https://switchandclick.com/kailh-switches-a-comprehensive-guide/

## Keycaps

- Keycaps Info From Matrix: https://matrixzj.github.io/
- Pimp My Keyboard: https://pimpmykeyboard.com/colors/

## Mounts / Tenting

### Links

- https://splitkb.com/products/manfrotto-pocket-tripod

# Software

## Typing

Pages where you can train typing precision and speed:

- https://monkeytype.com/
- https://www.keybr.com/de/index
- https://en.wikipedia.org/wiki/Epistory_-_Typing_Chronicles
- https://en.wikipedia.org/wiki/Nanotale_-_Typing_Chronicles
- https://gnusenpai.net/colemakclub/
- https://en.wikipedia.org/wiki/The_Typing_of_the_Dead

## Alternative layouts

### Comparisons

- QWERTY vs. Dvorak vs. Colemak Keyboard Layouts: https://www.daskeyboard.com/blog/qwerty-vs-dvorak-vs-colemak-keyboard-layouts/
- Keyboard layout evaluation: https://github.com/bclnr/kb-layout-evaluation
- Keyboard Layouts - Things to consider before switching: https://youtube.com/watch?v=rhdMVXlnQIM

![[Pasted image 20230106164324.png]]
https://www.reddit.com/r/Colemak/comments/qslro8/10000_simple_wikipedia_sentences_heatmap_qwerty/

### Colemak

#### Miryoku

Main `README.md` (development branch):  https://github.com/manna-harbour/miryoku_qmk/blob/miryoku/users/manna-harbour_miryoku/readme.org

##### OS Layout

Before change:

in …/qmk_firmware ➜ cat /etc/vconsole.conf
```
KEYMAP=de-latin1-nodeadkeys
FONT=lat9w-16
```

in …/qmk_firmware ➜ localectl status
```
System Locale: LANG=de_DE.UTF-8                            
    VC Keymap: de-latin1-nodeadkeys                        
   X11 Layout: de                                          
    X11 Model: pc105                                       
  X11 Variant: nodeadkeys  
```

Set layout (general):
```
setxkbmap -layout us
```

Get original german layout again (general):
```
setxkbmap -layout de
```

##### Commands

Debug keycodes:
```
xev | awk -F'[ )]+' '/^KeyPress/ { a[NR+2] } NR in a { printf "%-3s %s\n", $5, $8 }'
```

##### Links

- GIthub: https://github.com/manna-harbour/miryoku
- Reference Manual: https://github.com/manna-harbour/miryoku/tree/master/docs/reference
- ![[Pasted image 20230114163304.png]]
- https://github.com/manna-harbour/miryoku/blob/master/data/cover/miryoku-kle-cover-miryoku_qmk.png
- https://github.com/manna-harbour/miryoku/discussions/85 > `Custom Hardware Support` > `Miryoku QMK`
- https://github.com/manna-harbour/miryoku_qmk/tree/miryoku/users/manna-harbour_miryoku#checkout-update-and-merge
- OLED support on split keyboards: https://www.reddit.com/r/ErgoMechKeyboards/comments/ujaj8t/miryoku_need_help_enabling_oleds_on_crkbd/

#### Links

- https://dreymar.colemak.org/
- https://forum.colemak.com/topic/2855-learning-colemakdh-on-a-split-columnar-keyboard/
- Keycaps:
	- https://drop.com/talk/42259/the-first-sculptured-keycaps-set-featuring-colemak-dh-alternative-layout-to-be-exact-the-first-one-w
	- https://novelkeys.com/products/gmk-oblivion-v3-1-gb?variant=40377910886567
- https://www.colemak.academy/
	- maybe succeeded by this fork? https://gnusenpai.net/colemakclub/
- https://colemakmods.github.io/mod-dh/
- Colemak vs Colemak-DH: https://www.reddit.com/r/ErgoMechKeyboards/comments/sqcx5s/colemak_vs_colemakdh/
- QWERTY is the worst keyboard layout. A Colemak Odyssey: https://youtube.com/watch?v=VfSloMvEwd4
- Learning a new Keyboard Layout - Colemak DH: https://youtube.com/watch?v=_Y0MT-QR7xg
- "Moonlander Layout 5 months on. Tap dance, Colemak and layers on ZSA's split programmable keyboard": https://www.youtube.com/watch?v=W20mCn2NdXc

### Dvorak

#### Links

- https://en.wikipedia.org/wiki/Dvorak_keyboard_layout

### Halmak

#### Links

- https://github.com/kaievns/halmak

### Workman

Link: https://workmanlayout.org/

## MCUs and Firmware

- https://www.reddit.com/r/ErgoMechKeyboards/comments/z0eirf/recommended_mcus_and_firmware_in_2022/

### Raspberry Pico / RP2040

- https://learn.adafruit.com/using-qmk-on-rp2040-microcontrollers
- QMK on RP2040 Split Keyboard Overview: https://youtube.com/watch?v=OHGVUv2wHVk
- https://golem.hu/guide/raspberry-pi-pico
- Pi Pico + KMK = the perfect combo for Custom Keyboards: https://www.youtube.com/watch?v=Q97bFwjQ_vQ

## KMK

### MCUs

#### Raspberry Pico / RP2040

- Pi Pico + KMK = the perfect combo for Custom Keyboards: https://www.youtube.com/watch?v=Q97bFwjQ_vQ

## QMK

### Info

Using DFU boot loader (see: https://www.reddit.com/r/olkb/comments/8sxgzb/replace_pro_micro_bootloader_with_qmk_dfu/).

Using own fork according to: https://docs.qmk.fm/#/getting_started_github
Fork: https://github.com/julrich/qmk_firmware/tree/julrich
Sofle: https://github.com/qmk/qmk_firmware/blob/master/keyboards/sofle/readme.md
Sofle Default Keymap (`default`): https://github.com/qmk/qmk_firmware/tree/master/keyboards/sofle/keymaps/default
Sofle RGB Keymap (`rgb_default`): https://github.com/qmk/qmk_firmware/blob/master/keyboards/sofle/keymaps/rgb_default/
Sofle Miryoku Keymap (`manna-harbour_miryoku`): https://github.com/qmk/qmk_firmware/blob/master/keyboards/sofle/keymaps/manna-harbour_miryoku/

### Installation

- https://docs.qmk.fm/#/newbs_getting_started
	- Following warnings in terminal on `qmk setup julrich/qmk_firmare`: 
	```
	Ψ Found avr-gcc version 12.2.0
	⚠ We do not recommend avr-gcc newer than 8. Downgrading to 8.x is recommended.
	```
	- First compilation went fine though: `qmk compile -kb sofle -km rgb_default`
- https://docs.qmk.fm/#/newbs_building_firmware
	- `qmk config user.keyboard=sofle/rev1`
	- `qmk config user.keymap=julrich`
	- `qmk new-keymap`
	- Keymap lives in `/home/julrich/qmk_firmware/keyboards/sofle/keymaps/julrich`
	- Copy `sofle/keymaps/rgb_default` to `sofle/keymaps/julrich`
	- `qmk compile`
- https://docs.qmk.fm/#/newbs_flashing
	- https://docs.qmk.fm/#/newbs_flashing?id=flash-your-keyboard-from-the-command-line
	- https://docs.qmk.fm/#/faq_build?id=linux-udev-rules
	- https://github.com/qmk/qmk_firmware/blob/master/util/udev/50-qmk.rules
	- `sudo udevadm control --reload-rules`
	- `sudo udevadm trigger`
	- `/etc/modules-load.d/qmk.conf`
	- `qmk flash` (for both halves, disconnect TRRS first)

### Commands

- `qmk list-keyboards` for a list of all supported keyboards

### Resources

#### RGB

- Get RGB for Sofle running https://www.reddit.com/r/olkb/comments/sbvefp/has_anyone_gotten_qmk_rgb_matrix_effects_working/
tldr:
```
RGB_MATRIX_ENABLE = yes
RGB_MATRIX_DRIVER = WS2812
```

#### OLED

^d64747

- HELL0 NAVI. Interface: https://github.com/qmk/qmk_firmware/tree/master/keyboards/lily58/keymaps/druotoni
- Bongo Cat:
	- oledbongocat: https://github.com/nwii/oledbongocat
	- Sofle Keyboard Bongo Cat WPM: https://www.youtube.com/watch?v=WdGJuWOdpCA
- Luna the keyboard cat: https://www.reddit.com/r/olkb/comments/lmtgxc/introducing_luna_the_qmk_keyboard_pet/
- OLED image generator: https://joric.github.io/qle/

#### MCUs

##### Atmel ATmega32U4

32kb flash on chip

- https://www.microchip.com/en-us/product/ATmega32U4

##### Raspberry Pico / RP2040

- https://learn.adafruit.com/using-qmk-on-rp2040-microcontrollers
- QMK on RP2040 Split Keyboard Overview: https://youtube.com/watch?v=OHGVUv2wHVk
- https://golem.hu/guide/raspberry-pi-pico

##### Sea Micro

- https://joshajohnson.com/sea-micro/
- Sea-Micro Review : https://youtube.com/watch?v=xYn4d1Y6pBM

##### Sea Picro

8mb / 16mb flash on board, 378kb SRAM

- https://joshajohnson.com/sea-picro/
- On board flash (`25Q64CWIG`): https://www.alldatasheet.com/view.jsp?Searchword=25Q64CWIG&sField=1

##### Black Pill

- https://42keebs.eu/shop/parts/controllers/black-pill-stm32-arm-controller/
- https://www.electronics-lab.com/meet-stm32-black-pill-development-board/

#### Firmware

- https://thomasbaart.nl/2018/12/01/reducing-firmware-size-in-qmk/
- https://github.com/qmk/qmk_firmware/blob/master/docs/feature_tap_dance.md
- https://blog.splitkb.com/how-to-work-with-small-keyboards
- https://github.com/qmk/qmk_firmware/blob/master/docs/squeezing_avr.md
- https://github.com/manna-harbour/miryoku/issues/90
- https://github.com/manna-harbour/miryoku/discussions/76

#### Keyboard layouts

- https://planelles.dev/blog/2019/08/28
- https://www.reddit.com/r/olkb/comments/a0texz/whatre_your_favorite_qmk_hacks/

## VIA

"Your keyboard's best friend": https://caniusevia.com/

Could maybe be used for graphical configuration, Sofle RGB is compatible according to their compatibility list here:
https://www.caniusevia.com/docs/supported_keyboards

## LEDs

- Control your Keyboard LEDs with StreamerBot | macro pad part 4: https://www.youtube.com/watch?v=x9fZ-6AX4nM

# Links

## YouTube channels

- https://www.youtube.com/@Glarses
- https://www.youtube.com/@SwitchandClickOfficial
- https://www.youtube.com/@HipyoTech

# Sofle RGB + GMK Grand Prix + Kailh Speed Bronze

## Parts

### Already bought

- ✅ Sofle RGB
	- Images of the done build:
	- Tracking Sofle: http://www.hongkongpost.hk/eng/tracking/index.htm > `LK773201020HK`
	- Etsy Listing: https://www.etsy.com/de/listing/1256160429/vorgelotete-sofle-rgb-mx-hotswap-sockel
	- Introduction blog post: https://josef-adamcik.cz/electronics/let-me-introduce-you-sofle-keyboard-split-keyboard-based-on-lily58.html
	- Github documentation: https://josefadamcik.github.io/SofleKeyboard/
	- Github repository: https://github.com/josefadamcik/SofleKeyboard
	- Resource collection: https://wfendler.notion.site/Sofle-v2-3927311fb2fc4d03896f3081ca439b29
	- OLED: 2 ssd1306 128x32 OLED display module
	- ![[Pasted image 20230109122144.png]]
	- ![[Pasted image 20230109122110.png]]
	- ![[Pasted image 20221230175054.png]]
	  https://showcase.beekeeb.com/sofle-rgb-mx-xda-translucent-keycaps/
	- ![[Pasted image 20221228120447.png]]
	- ![[Pasted image 20221228124423.png]]
	- ![[Pasted image 20221228124500.png]]
- 🚚 GMK Grand Prix
	- Images
		- ![[Pasted image 20221230165825.png]]
		- ![[Pasted image 20221230170151.png]]
		- ![[Pasted image 20221230170202.png]]
		- ![[Pasted image 20221230170207.png]]
		- ![[Pasted image 20221230170214.png]]
	- Keycap overview: https://matrixzj.github.io/docs/gmk-keycaps/Grand-Prix/ ^d985aa
	- ✅ GMK Grand Prix Base Kit ^13d7a3
		- https://novelkeys.com/products/gmk-grand-prix?variant=36492567576743
		- https://candykeys.com/product/gmk-grand-prix-base-kit
		- ![[Pasted image 20221228120218.png]]
	- 🚚 GMK Grand Prix Novelties Kit ^199139
		- https://www.reddit.com/r/mechmarket/comments/vqr51y/usor_h_gmk_deku_gmk_retrocast_gmk_space_cadet_gmk/
		- https://candykeys.com/product/gmk-grand-prix-novelty-kit
		- ![[Pasted image 20230109092926.png]]
		- ![[Pasted image 20230109092938.png]]
		- ![[Pasted image 20230109092949.png]]
		- ![[Pasted image 20221228120340.png]]
	- 🚚 GMK Grand Prix Space Kit
		- https://www.reddit.com/r/mechmarket/comments/vqr51y/usor_h_gmk_deku_gmk_retrocast_gmk_space_cadet_gmk/
		- https://candykeys.com/product/gmk-grand-prix-space-kit
		- ![[Pasted image 20221228120356.png]]
- ✅ Kailh Speed Bronze Switches
		- Shop: https://www.caseking.de/glorious-kailh-speed-bronze-switches-120-stueck-gakc-068.html
		- ![[Pasted image 20221228120549.png]]
- ✅ USB-C Cable
	- Tracking: http://www.sf-express.com/us/en/ > `SF6043522735038`
	- https://www.etsy.com/de/listing/1189082143/gewickeltes-kabel-rgb-leuchtendes
	- ![[Pasted image 20221228122044.png]]
	- ![[Pasted image 20230102173629.png]]
	- ![[Pasted image 20230102173654.png]]
- ✅ Anti slip feet
	- "Elastikpuffer, 320 Stück Gummipuffer Schutzpuffer Transparent Möbelpuffer Selbstklebende Gummifüße Gumminoppen Lärm Dämpfung Pads Anschlagpuffer (8 Größen)": https://www.amazon.de/dp/B0929JTY9G?psc=1&smid=A17HADPK8J469Q&ref_=chk_typ_imgToDp
	- ![[Pasted image 20230103234743.png]]
- ✅ Sea-Picro
	- Tracking: https://webapp.hongkongpost.hk/en/mail_tracking/index.html > `RD024816924HK`
	- https://joshajohnson.github.io/sea-picro/
	- https://customkbd.com/products/sea-picro?_pos=1&_sid=50beea8f0&_ss=r
	- ![[Pasted image 20221231145529.png]]
	- ![[Pasted image 20221231145537.png]]
- ✅ Cable Name Tag
	- Ordered in black with `TSNM` as the text
	- https://www.etsy.com/de/listing/762665558/personalisierte-kabelanhanger-3d
	- ![[Pasted image 20230104132759.png]]
- ✅ TRRS Cable
	- Tracking: https://tools.usps.com/go/TrackConfirmAction_input?qtc_tLabels1=LZ256248920US
	- Ordered: ![[Pasted image 20230105142340.png]]
	- https://www.etsy.com/de/listing/1377899017/benutzerdefiniertes-geteilte-tastatur
	- ![[Pasted image 20221228122145.png]]
### Needed

- GMK Grand Prix 40s Kit
	- https://candykeys.com/product/gmk-grand-prix-40s-kit
	- ![[Pasted image 20221228120317.png]]
- GMK Grand Prix Addon Kit
	- https://candykeys.com/product/gmk-grand-prix-addon-kit
	- ![[Pasted image 20221228120300.png]]

### Possible Addons / Upgrades

- Cirque 23mm Glidepoint Circle Trackpad
	- https://shop.beekeeb.com/product/23mm-cirque-glidepoint-circle-trackpad-module/
	- ![[Pasted image 20221230175255.png]]
- GMK Grand Prix RAMA Cap Olive Wreath (ESC) / Le Mans (Enter)
	- https://candykeys.com/product/gmk-grand-prix-rama-cap
	- ![[Pasted image 20221228120621.png]]
	- ![[Pasted image 20221228120710.png]]
- GMK Toxic
	- For black / dark keys
	- https://mykeyboard.eu/catalogue/gmk-toxic-base-kit_1547/
	- ![[Pasted image 20221230182208.png]]

### Places to look

#### Markets

- Reddit MechMarket: https://www.reddit.com/r/mechmarket/
- Hardwareluxx Community Thread: https://www.hardwareluxx.de/community/threads/mecha-marktplatz-link-thread.1313234/
- Ebay?

#### Shops

- CandyKeys: https://candykeys.com/group-buys/gmk-grand-prix
- NovelKeys: https://novelkeys.com/products/gmk-grand-prix
- Daily Clack: https://dailyclack.com/products/gmk-grand-prix
- ILUMKB: https://ilumkb.com/products/gb-gmk-grand-prix
- ThockStock: https://thocstock.com/keycaps/gmk-grand-prix
- zFrontier: https://en.zfrontier.com/products/in-stock-gmk-grand-prix?variant=39707491106894

## Software

### Ideas

- Highlight typed keys with "aftertouch" and effect
- Show active layer on display and through LEDs
- Add Pimoroni [Galactic Unicorn](https://shop.pimoroni.com/products/galactic-unicorn?variant=40057440960595) `53x11` LED display, mirroring typed keys and animation
