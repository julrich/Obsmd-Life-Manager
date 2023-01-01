> sudo prime-select query
> sudo prime-select intel
> sudo prime-select nvidia

> dkms status
nvidia, 440.44, 5.0.0-37-generic, x86_64: installed
wireguard, 0.0.20191219, 5.0.0-32-generic, x86_64: installed
wireguard, 0.0.20191219, 5.0.0-37-generic, x86_64: installed

> egrep 'WW|EE' /var/log/Xorg.0.log
        (WW) warning, (EE) error, (NI) not implemented, (??) unknown.
[     6.526] (WW) The directory "/usr/share/fonts/X11/cyrillic" does not exist.
[     6.526] (WW) The directory "/usr/share/fonts/X11/100dpi/" does not exist.
[     6.526] (WW) The directory "/usr/share/fonts/X11/75dpi/" does not exist.
[     6.526] (WW) The directory "/usr/share/fonts/X11/100dpi" does not exist.
[     6.526] (WW) The directory "/usr/share/fonts/X11/75dpi" does not exist.
[     6.526] (WW) Hotplugging is on, devices using drivers 'kbd', 'mouse' or 'vmmouse' will be disabled.
[     6.526] (WW) Disabling Keyboard0
[     6.526] (WW) Disabling Mouse0
[     6.554] (WW) Warning, couldn't open module nvidia
[     6.554] (EE) Failed to load module "nvidia" (module does not exist, 0)
[     6.570] (WW) Falling back to old probe method for fbdev
[     6.571] (WW) Falling back to old probe method for vesa

> lsmod | grep nvidia

> find /lib/modules/$(uname -r) -type f -name '*.ko' | grep nvidia
/lib/modules/5.0.0-37-generic/kernel/drivers/net/ethernet/nvidia/forcedeth.ko
/lib/modules/5.0.0-37-generic/kernel/drivers/video/fbdev/nvidia/nvidiafb.ko
/lib/modules/5.0.0-37-generic/kernel/drivers/i2c/busses/i2c-nvidia-gpu.ko
/lib/modules/5.0.0-37-generic/kernel/drivers/char/drm/nvidia.ko
/lib/modules/5.0.0-37-generic/kernel/drivers/char/drm/nvidia-modeset.ko
/lib/modules/5.0.0-37-generic/kernel/drivers/char/drm/nvidia-drm.ko
/lib/modules/5.0.0-37-generic/kernel/drivers/char/drm/nvidia-uvm.ko
