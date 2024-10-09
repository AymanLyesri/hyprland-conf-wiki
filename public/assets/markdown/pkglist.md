# [Package List](https://github.com/AymanLyesri/hyprland-conf/blob/master/.config/hypr/pacman/pkglist.txt) and Installation

**To install packages:**

> **Warning:** [Yay](https://github.com/Jguer/yay) need to be installed for this to work properly.

> Some packages may be missing or added unnecessarily.

```bash
#For installing and updating essential packages (default:yay)
bash $HOME/.config/hypr/pacman/update.sh [yay,paru...]
```

**To generate a package list:** `optional`

```bash
cd $HOME
pacman -Qqen > $HOME/.config/hypr/pacman/pkglist.txt
#OR
yay -Qqen > $HOME/.config/hypr/pacman/pkglist.txt
```
