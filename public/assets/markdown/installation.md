# Installation Guide

### Step 1: Clone the Repository

> **Notice:** Repo has been Cleaned up from 2Gb to 90Mb, sorry for the inconvenience.

> Clone latest commit (less download size)

```bash
git clone --depth 1 https://github.com/AymanLyesri/hyprland-conf.git
```

### Step 2: Move the Repository to Your Home Directory

```bash
mv <repository_folder>/* $HOME/
```

### Step 3: [Package List](https://github.com/AymanLyesri/hyprland-conf/blob/master/.config/hypr/pacman/pkglist.txt) and Installation

> **Warning:** [Yay](https://github.com/Jguer/yay) or another pacman wrapper need to be installed for this to work properly.

> Some packages may be missing or added unnecessarily.

```bash
bash $HOME/.config/hypr/pacman/update.sh [yay,paru...]
```

### Step 4: Reboot Your System

```bash
sudo reboot
```
