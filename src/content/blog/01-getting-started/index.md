---
title: "Getting started"
description: "Here's how you start with MarkDown."
date: "Feb 5 2025"
---

## Getting Started with Linux for CTF and Pwn College

Welcome to this comprehensive guide for beginners looking to set up a Linux environment for CTF challenges and Linux Luminarium tasks. Whether you're running Windows or macOS, this guide will walk you through both Virtual Machine and Dual Boot setups, and then guide you through your first steps into the world of Linux-based challenges.

Written by [Aryan Kudva](https://github.com/hadakoi) and [Aadit Agrawal](https://aaditagrawal.com).

---

## Table of Contents

- [1. Linux Setup Options](#1-linux-setup-options)
  - [1.1 Virtual Machine Setup](#11-virtual-machine-setup)
  - [1.2 Dual Boot Setup](#12-dual-boot-setup)
- [2. Getting Started with Linux Luminarium](#2-getting-started-with-linux-luminarium)
- [3. Documenting Your Progress](#3-documenting-your-progress)
- [4. Next Steps](#4-next-steps)

---

## 1. Linux Setup Options

Before diving into CTF challenges and Linux Luminarium tasks, you'll need a working Linux environment. You have two main options: **Virtual Machine** or **Dual Boot**.

### 1.1 Virtual Machine Setup

For those who prefer a safe and isolated environment without altering your existing operating system, using a virtual machine (VM) is ideal. **Ubuntu** is recommended for its ease of use and compatibility, while **Fedora** may not work as well on a VM.

**Mac users (especially on Apple Silicon Macs):** Unix commands and basic programs just work on MacOS. If not, consider using a tool like OrbStack for minimal overhead CLI VMs.

- **Ubuntu on VM**
  Watch this detailed [Ubuntu Virtual Machine Setup Video](https://www.youtube.com/watch?v=Hva8lsV2nTk).

- **Fedora on VM**
  *Note:* Fedora might not perform as well in a VM environment; therefore, it is **not recommended**.

### 1.2 Dual Boot Setup

For users who are confident and want a more robust Linux experience, dual booting is a viable option. However, be cautious: dual booting comes with risks, such as potentially wiping your laptop if done incorrectly.

Dual booting, however, does come with its own set of risks. Windows might cause issues or even result in data loss if the configuration is not done correctly. Therefore, proceed with caution. Moreover, in recent times, Windows has actively become hostile towards Linux installs, and it may even try to overwrite your bootloader, thus preventing you from booting into Linux entirely.

- **Ubuntu Dual Boot**
  Watch the [Ubuntu Dual Boot Setup Video](https://www.youtube.com/watch?v=8TnOqM_GyqM).

- **Fedora Dual Boot**
  Watch the [Fedora Dual Boot Setup Video](https://www.youtube.com/watch?v=kvnfccdTYQU).

---

## 2. Getting Started with Linux Luminarium

Once you have your Linux environment ready, your next step is to engage with the Linux Luminarium tasks available at [Pwn College](https://pwn.college/linux-luminarium/). Here’s how to begin:

1. **Create an Account:**
   Register at [Linux Luminarium](https://pwn.college/linux-luminarium/) and decide whether you want to use the built-in desktop or connect via SSH.

2. **Learn SSH:**
   If you're new to SSH, watch this [introductory video on SSH](https://www.youtube.com/watch?v=DJO1A2neZ6Y) for a quick overview.

---

## 3. Documenting Your Progress

As you progress through the Linux Luminarium challenges, it's crucial to keep a detailed record of your work using Markdown files (with a `.md` extension). If you missed yesterday's lecture, consider watching this [Crash Course Video on Markdown](https://www.youtube.com/watch?v=ftOBvusMHjQ).

Below is a suggested Markdown template for documenting your CTF challenge solutions. Feel free to modify it to suit your workflow:

```md
# CTF Challenge Name

## Challenge

Challenge description goes here.

## Solving

Workflow here.

*Example of italics:*
`Italia`

**Example of bold text:**
**Bolding**

[Test Link for YouTube](https://www.youtube.com/)

### Terminal Output

`Your terminal commands or output here`

## Flag

> Put your flag here.
```

---

## 4. Next Steps

That’s all for the beginner tasks! Once you've completed these initial steps and the Linux Luminarium challenges, stay tuned for upcoming CTF tasks. If you've already finished the Linux Luminarium, feel free to ignore these instructions and move on to the next set of challenges.

Happy hacking and remember to always document your journey with precision and clarity!
