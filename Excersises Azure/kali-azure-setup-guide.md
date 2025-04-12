
# 🔐 Kali Linux on Azure: GUI + RDP Setup Guide

This guide walks you through creating a **Kali Linux virtual machine on Microsoft Azure** with a full **XFCE desktop environment** and **Remote Desktop (RDP)** access. Great for beginners setting up a cloud-based cybersecurity lab.

---

## 🚀 Step-by-Step Instructions

### 1. Create a Kali Linux VM on Azure

1. Go to [Azure Portal](https://portal.azure.com)
2. Click **"Create a resource"** → Search for **"Kali Linux"**
3. Choose the **Kali Linux** image (usually provided by "Offensive Security")
4. Select a VM size (e.g., `Standard_B2s` works well)
5. Create admin account with username and password
6. Open the following ports in "Networking":
   - **22** (SSH)
   - **3389** (RDP)
7. Click **Review + Create**

---

### 2. SSH Into the Kali VM

From your terminal (replace `your_ip` with the VM's public IP):

```bash
ssh username@your_ip
```

---

### 3. Update the System

```bash
sudo apt update && sudo apt upgrade -y
```

This updates the package list and upgrades all installed packages.

---

### 4. Install XFCE Desktop (GUI)

```bash
sudo apt install kali-desktop-xfce -y
```

XFCE is a lightweight desktop perfect for cloud VMs.

---

### 5. Install xrdp (RDP Access)

```bash
sudo apt install xrdp -y
sudo systemctl enable xrdp
sudo systemctl start xrdp
```

---



### 6. Connect via RDP

Use the **Windows Remote Desktop Client** (or any RDP client):

- IP: your VM’s public IP
- Username: The one you set in azure portal
- Password: The one you set in azure portal

---

## ✅ Done!

You now have a fully working Kali Linux machine in the cloud with a GUI and remote access. Perfect for learning, hacking, and running security tools.

---

## 📌 Notes

- This is intended for educational use and personal labs.
- Always shut down or lock down cloud VMs when not in use to avoid charges.
- For security, consider using a firewall or Azure NSG rules to limit RDP access.

---

## 🏁 Related Commands

```bash
# Restart xrdp
sudo systemctl restart xrdp

# Check xrdp status
sudo systemctl status xrdp
```

---

## 🙌 About

This project is part of my journey to become a **Microsoft MVP** by combining cloud skills with cybersecurity knowledge.
