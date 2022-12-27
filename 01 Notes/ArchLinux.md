# Aufsetzen Arch Linux

Geht aus von vorhandenen Partitionen (EXT4) für Root, Home und Swap:
* Root: /dev/nvme0n1p5
* Swap: /dev/nvme0n1p2
* Home: /dev/nvme0n1p4

* Deutsche Tastatur aktivieren: loadkeys de
* Deutsche Tastatur mit Sonderzeichen aktivieren: loadkeys de-latin1
* Root-Partition formatieren: mkfs.ext4 -L p_arch /dev/nvme0n1p5
* Swap-Partition zurücksetzen: mkswap -L p_swap /dev/nvme0n1p2
* Partitionen mounten:
	* mount -L p_arch /mnt
	* mkdir -p /mnt/home
	* mount /dev/nvme0n1p4 /mnt/home
* Label zur Home-Partition hinzufügen: e2label /dev/nvme0n1p1 p_home
* Swap aktivieren: swapon -L p_swap
* WLAN konfigurieren: wifi-menu
* Mirrorliste sichern: cp /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist.bak
* Pacman / Dep-Manager aktualisieren: pacman -Sy
* Reflektor installieren: pacman -S reflector
* Mirrorliste optimieren: reflector --latest 5 --protocol http --protocol https --sort rate --save /etc/pacman.d/mirrorlist
* Installation Basispakete: pacstrap /mnt base base-devel linux linux-firmware gvim
* Installation dhcpcd für Internetverbindung: pacman --root /mnt -S dhcpcd
* Installation intel-ucode Microcodes für CPU: pacman --root /mnt -S intel-ucode
* Installation Abhängigkeiten WLAN: pacman --root /mnt -S wpa_supplicant netctl dialog
	* -> 1) für openresolv wählen
* Generieren fstab-Datei mit Labels: genfstab -Lp /mnt > /mnt/etc/fstab
* In das installierte System wechseln: arch-chroot /mnt/
* Rechnername festlegen: echo calculatron > /etc/hostname
* Sprache einstellen: 
	* echo LANG=de_DE.UTF-8 > /etc/locale.conf
	* vim /etc/locale.gen
		* # (Kommentare) vor den de_DE- + en_US-Zeilen streichen
	* locale-gen
* Tastaturbelegung festlegen: echo KEYMAP=de-latin1 > /etc/vconsole.conf
* Schriftart festlegen: echo FONT=lat9w-16 >> /etc/vconsole.conf
* Zeitzone festlegen: ln -sf /usr/share/zoneinfo/Europe/Berlin /etc/localtime
* Initramfs erzeugen: mkinitcpio -p linux
* Root-Passwort anlegen: passwd
* Bootloader-Abhängigkeiten (bootctl / Gummiboot) installieren: pacman -S efibootmgr dosfstools gptfdisk
* Bootloader (bootctl / Gummiboot) installieren: bootctl install
* Arch-UEFI Konfiguration anlegen: vim /boot/loader/entries/arch-uefi.conf
	* Folgender Inhalt:
		title    Arch Linux
		linux    /vmlinuz-linux
		initrd   /initramfs-linux.img
		options  root=LABEL=p_arch rw resume=LABEL=p_swap
* Arch-UEFI Backup-Konfiguration anlegen: vim /boot/loader/entries/arch-uefi-fallback.conf
	* Folgender Inhalt:
		title    Arch Linux Fallback
		linux    /vmlinuz-linux
		initrd   /initramfs-linux-fallback.img
		options  root=LABEL=p_arch rw resume=LABEL=p_swap
* Bootloader-Konfiguration anlegen: vim /boot/loader/loader.conf
	* Folgender Inhalt:
		default   arch-uefi
		timeout   1
* Aus dem installierten System rausgehen: exit
* Partition unmounten: umount /dev/nvme0n1p5

# Konfiguraton Arch Linux
* Benutzer hinzufügen: useradd -m -g users -s /bin/bash julrich
* Passwort setzen: passwd julrich
* sudo installieren: pacman -S sudo
* Permissions für Gruppe wheel anpassen: vim /etc/sudoers
	* Komentar bei Zeile "# %wheel ALL=(ALL) ALL" entfernen
* Benutzer in Gruppe wheel hinzufügen: gpasswd -a julrich wheel
* Benutzer in Gruppe audio hinzufügen: gpasswd -a julrich audio
* Benutzer in Gruppe video hinzufügen: gpasswd -a julrich video
* Benutzer in Gruppe games hinzufügen: gpasswd -a julrich games
* Benutzer in Gruppe power hinzufügen: gpasswd -a julrich power
* SSD TRIM aktivieren: systemctl enable --now fstrim.timer
* Weitere Pakete installieren: pacman -S acpid dbus avahi cups
* Pakete enablen:
	* systemctl enable acpid
	* systemctl enable avahi-daemon
	* systemctl enable org.cups.cupsd.service
* Cron installieren: pacman -S cronie
* Cron aktivieren: systemctl enable --now cronie
* Automatische Zeitsynchronisierung aktivieren: systemctl enable --now systemd-timesyncd.service
* Hardware-Clock setzen: hwclock -w
* Git installieren: pacman -S git
* Package Manager (trizen) installieren:
	* su julrich
	* cd /tmp
	* git clone https://aur.archlinux.org/trizen.git
	* cd trizen
	* makepkg -si
	* cd
	* exit
* WLAN aktivieren (vorher in /etc/netctl evtl. durch wifi-menu angelegte .services löschen):
    * netctl enable wireless-wpa
	* netctl start wireless-wpa
* CPU Frequenz- / Lüfter-Steuerung installieren:
    * pacman -S i7z cpupower
    * trizen -S thermald cpupower-gui
    * systemctl enable --now thermald cpupower

# Konfiguration Desktop-Environment / X
* LightDM Display Manager installieren: pacman -S lightdm i3
	* Mit Enter bestätigen = "Voreinstellung=alle"
* Greeter installieren:
	* su julrich
	* trizen -S lightdm-webkit-theme-aether (Defaults bestätigen)
	* exit
* X Server installieren: pacman -S xorg-server xorg-xinit
* Treiber + Switching installieren:
    * pacman -S bumblebee bbswitch nvidia xf86-video-intel mesa mesa-demos
    * gpasswd -a julrich bumblebee
* Dateien /etc/X11/xorg.conf.d/intel.conf und /etc/bumblebee/xorg.conf.nvidia anlegen (vgl.: https://wiki.archlinux.org/index.php/Lenovo_ThinkPad_P52#Proprietary_driver_with_bumblebee)
* Intel Grafikkarte im initramfs aktivieren: vim /etc/mkinitcpio.conf
	* MODULES=(i915)
* Bumblebee aktivieren:
    * systemctl enable bumblebeed
    * systemctl start bumblebeed
* Reboot
* Tastatur-Einstellungen setzen: localectl set-x11-keymap de pc105 nodeadkeys
* Keymapping-Util installieren: pacman -S xbindkeys
* LightDM aktivieren: systemctl enable lightdm
* LightDM-Konfiguration anpassen: vim 
	* [Seat:*]
	* greeter-session = lightdm-webkit-theme-aether
* Fonts installieren: pacman -S noto-fonts ttf-ubuntu-font-family ttf-dejavu ttf-freefont ttf-liberation ttf-troid ttf-inconsolata ttf-roboto terminus-font ttf-font-awesome
* Terminal (urxvt) installieren: trizen -S rxvt-unicode
* Application-Switcher installieren: pacman -S rofi
* X Window System (xrandr) installieren: pacman -S xorg-xrandr
* Compositor (picom) installieren: trizen -S picom-tryone-git
* Status Bar (Polybar) installieren: trizen -S polybar
* Hintergrundbild (Feh) installieren: pacman -S feh
* Tmux installieren: pacman -S tmux
* Notification-Handler (dunst) installieren: pacman -S dunst
* DNSmasq installieren:
    * pacman -S dnsmasq nettle
    * resolvconf -u
* Hack Font installieren: trizen -S nerd-fonts-hack
* Fontviewer installieren: trizen -S fontviewer

# Audio-Setup
* Audiokomponente installieren: pacman -S alsa-utils
* Laptop-Integrationen / ACPI-Support installieren:
    * pacman -S acpid
    * systemctl enable acpid
    * systemctl start acpid
* Internen Lautsprecher / Beeper deaktivieren:
    * sudo sh -c 'echo "blacklist pcspkr" >> /etc/modprobe.d/modprobe.conf'
* Bluetooth (bluez) installieren:
    * pacman -S bluez bluez-utils
    * modprobe btusb
    * systemctl enable bluetooth
    * systemctl start bluetooth
* Audio-Server / -Mixer installieren:
    * pacman -S pulseaudio pulseaudio-alsa pulseaudio-bluetooth pulseaudio-equalizer pulseaudio-zeroconf
    * pacman -S pasystray pavucontrol
    * trizen -S pamix-git
* Spotify installieren: trizen -S spotify

# Anwendungen installieren
* ripgrep installieren: trizen -S ripgrep-all
	* "Voreinstellung=1" wählen
* Firefox + Chrome installieren: pacman -S firefox firefox-i18n-de chromium
* Firefox AUR-Suche installieren: trizen -S arch-firefox-search
* Kate installieren: pacman -S kate
* Slack und Mattermost installieren: trizen -S slack-desktop mattermost-desktop
* Zoom installieren: trizen -S zoom
* Flameshot installieren: pacman -S flameshot
* tig installieren: pacman -S tig
* Wireguard installieren: pacman -S wireguard-tools
* Visual Studio Code installieren: trizen -S visual-studio-code-bin
* rsync installieren: pacman -S rsync
* Monitor Setup-GUI (arandr) installieren: pacman -S arandr
* Docker installieren:
    * pacman -S docker
    * trizen -S docker-machine
    * gpasswd -a julrich docker
    * systemctl enable docker
    * systemctl start docker
* docker-compose installieren: trizen -S docker-compose
* VMware installieren:
    * trizen -S vmware-workstation
    * sudo pacman -S linux-headers
    * systemctl enable vmware-networks
    * systemctl enable vmware-usbarbitrator
    * systemctl start vmware-networks
    * systemctl start vmware-usbarbitrator
    * modprobe -a vmw_vmci vmmon
* Steam installieren:
    * Prüfen das [multilib] in /etc/pacman.conf einkommentiert ist
    * pacman -Syu
    * trizen -S steam-fonts
    * pacman -S steam lib32-virtualgl lib32-nvidia-utils
* OpenJDK / Java installieren: pacman -S jre11-openjdk jdk11-openjdk
* IntelliJ Idea Ultimate installieren: trizen -S intellij-idea-ultimate-edition
* 1Password CLI installieren: trizen -S 1password-cli
* tree CLI Utility installieren: pacman -S tree
* sshpass installieren: pacman -S sshpass
* moreutils (sponge, etc) installieren: pacman -S moreutils
* Bild-Viewer (nomacs) installieren: trizen -S nomacs-git
* Kubernetes CLI (kubectl) installieren: pacman -S kubectl
* Lokales Kubernetes CLI (minikube) installieren: trizen -S minikube
* VMware-Treiber für Docker Machine herunterladen und im Path ablegen (als `docker-machine-driver-vmware`; chmod u+x /usr/local/bin/docker-machine-driver-vmware): https://github.com/machine-drivers/docker-machine-driver-vmware/releases
* Disk Usage Analyzer (ncdu): pacman -S ncdu
* Istio CLI installieren: trizen -S istio-bin
* docker-compose.yml k8s-Konverter installieren: trizen -S kompose-bin
* Zip-Utils installieren (bunzip, etc): pacman -S bzip2 unzip zip
* Resource Monitor installieren: pacman -S htop
* FTP GUI-Client installieren (FileZilla): pacman -S filezilla
* Zertifikat-Utils installieren (Cloudflare cfssl): trizen -S cfssl
* Microsoft Teams Client installieren: trizen -S teams
* Dateibrowser installieren (SpaceFM): trizen -S spacefm
* VLC Mediaplayer installieren: pacman -S vlc
* Wiki / Notes / Knowledgebase (obsidian) installieren: trizen -S obsidian-appimage
* Audacity installieren: trizen -S audacity
* Yarn installieren: pacman -S yarn
* GitHub CLI installieren: trizen -S github-cli
* snapd installieren:
    * trizen -S snapd
    * sudo systemctl enable --now snapd.socket
    * sudo ln -s /var/lib/snapd/snap /snap
* myrepos installieren: trizen -S myrepos
* phantomjs installieren: trizen -S phantomjs
* USB- / Mount-Tooling (udisksctl) installieren: pacman -S udisks2
* Serial Communication Tools (minicom) installieren: trizen -S minicom
* Python (3) installieren: pacman -S python
* Python PIP instllieren: pacman -S python-pip
* Python Microprocesser Programming IDE (thonny) installieren: trizen -S thonny
* YouTube-Downloader installieren (youtube-dl): trizen -S youtube-dl
* Local PHP Dev-Environment installieren (ddev): trizen -S ddev-bin
* Lokale Zertifikate (mkcert): trizen -S mkcert
* Discord installieren: pacman -S discord
* OBS Studio installieren: pacman -S obs-studio
* OBS Studio Browser installieren: trizen -S obs-linuxbrowser-bin
* Rescue Time installieren: trizen -S rescuetime2
* Wakatime installieren: sudo pip install wakatime
* Simple Screen Recorder installieren: trizen -S simplescreenrecorder
* Exa (ls-replacement) installieren: trizen -S exa
* Bat (cat-replacement) installieren: trizen -S bat
* Fzf (fuzzy find / search) installieren: trizen -S fzf
* Broot (directory browsing) installieren: trizen -S broot
	
Links:
* https://faq.i3wm.org/question/5430/cant-get-a-window-to-start-in-the-scratchpad-and-i3-behaves-very-oddly.1.html
* https://www.reddit.com/r/linux/comments/4jbeh4/psa_if_you_use_urxvt_as_your_terminal_emulator/
* https://wiki.archlinux.de/title/Urxvt
* https://linux.die.net/man/1/urxvtc
* https://wiki.archlinux.org/index.php/Picom
* https://wiki.archlinux.org/index.php/Firefox#arch-firefox-search
* https://kubernetes.io/docs/tasks/configure-pod-container/translate-compose-kubernetes/
* https://unix.stackexchange.com/questions/321151/do-not-manage-to-activate-hdmi-on-a-laptop-that-has-optimus-bumblebee

Commands:
* Prozessorinformationen / aktuelle Taktung: sudo i7z
* Taktungssteuerung / Performance-Profile: cpupower-gui
* Texteditor: kate
